import { ContactFormData } from '../validation/contactSchema'

export interface EmailResult {
  success: boolean
  message: string
  id?: string
}

/**
 * Mock email sending function
 * In production, integrate with Resend, AWS SES, or similar service
 */
export async function sendEmail(data: ContactFormData): Promise<EmailResult> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500))
  
  // Simulate occasional failures for demo
  if (Math.random() < 0.05) {
    return {
      success: false,
      message: 'Temporary error sending email. Please try again.',
    }
  }
  
  console.log('📧 Mock email sent:', {
    to: process.env.CONTACT_EMAIL || 'hello@studio.com',
    subject: `New Project Inquiry from ${data.name}`,
    data: {
      name: data.name,
      email: data.email,
      company: data.company,
      budget: data.budget,
      timeline: data.timeline,
      needsAI: data.needsAI,
      projectGoals: data.projectGoals.substring(0, 100) + '...',
    }
  })
  
  return {
    success: true,
    message: 'Thank you! We\'ll get back to you within 24 hours.',
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2)}`,
  }
}

/**
 * Send confirmation email to the user
 */
export async function sendConfirmationEmail(data: ContactFormData): Promise<EmailResult> {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  console.log('📧 Mock confirmation email sent to:', data.email)
  
  return {
    success: true,
    message: 'Confirmation email sent',
    id: `conf_${Date.now()}`,
  }
}

/**
 * Production implementation example with Resend:
 * 
 * import { Resend } from 'resend'
 * 
 * const resend = new Resend(process.env.RESEND_API_KEY)
 * 
 * export async function sendEmail(data: ContactFormData): Promise<EmailResult> {
 *   try {
 *     const { data: emailData, error } = await resend.emails.send({
 *       from: 'noreply@yourdomain.com',
 *       to: [process.env.CONTACT_EMAIL!],
 *       subject: `New Project Inquiry from ${data.name}`,
 *       html: generateEmailTemplate(data),
 *       replyTo: data.email,
 *     })
 * 
 *     if (error) {
 *       console.error('Email error:', error)
 *       return { success: false, message: 'Failed to send email' }
 *     }
 * 
 *     return { 
 *       success: true, 
 *       message: 'Email sent successfully',
 *       id: emailData?.id 
 *     }
 *   } catch (error) {
 *     console.error('Email sending failed:', error)
 *     return { success: false, message: 'Email service unavailable' }
 *   }
 * }
 * 
 * function generateEmailTemplate(data: ContactFormData): string {
 *   return `
 *     <h2>New Project Inquiry</h2>
 *     <p><strong>Name:</strong> ${data.name}</p>
 *     <p><strong>Email:</strong> ${data.email}</p>
 *     <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
 *     <p><strong>Budget:</strong> ${data.budget}</p>
 *     <p><strong>Timeline:</strong> ${data.timeline}</p>
 *     <p><strong>Needs AI:</strong> ${data.needsAI ? 'Yes' : 'No'}</p>
 *     <p><strong>Project Goals:</strong></p>
 *     <p>${data.projectGoals.replace(/\n/g, '<br>')}</p>
 *   `
 * }
 */
