import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation/contactSchema'
import { sendEmail, sendConfirmationEmail } from '@/lib/email/sendEmail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validation = contactFormSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: validation.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      )
    }

    const data = validation.data

    // Send emails (both main notification and confirmation)
    const [emailResult, confirmationResult] = await Promise.allSettled([
      sendEmail(data),
      sendConfirmationEmail(data)
    ])

    // Check if main email failed
    if (emailResult.status === 'rejected' || 
        (emailResult.status === 'fulfilled' && !emailResult.value.success)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send your message. Please try again.' 
        },
        { status: 500 }
      )
    }

    // Log confirmation email failures but don't fail the request
    if (confirmationResult.status === 'rejected' || 
        (confirmationResult.status === 'fulfilled' && !confirmationResult.value.success)) {
      console.warn('Failed to send confirmation email:', confirmationResult)
    }

    return NextResponse.json({
      success: true,
      message: emailResult.status === 'fulfilled' ? emailResult.value.message : 'Thank you! We\'ll get back to you soon.',
      id: emailResult.status === 'fulfilled' ? emailResult.value.id : undefined
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}
