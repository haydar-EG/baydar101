import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Studio - High-Impact Web & AI Solutions'
  const description = searchParams.get('description') || 'We build high-performance websites and AI-powered solutions that scale.'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #22c55e 2px, transparent 2px)',
          backgroundSize: '50px 50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#a0a0a0',
              marginBottom: '40px',
              lineHeight: '1.4',
            }}
          >
            {description}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#22c55e',
              borderRadius: '8px',
              color: '#000000',
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            ✨ Start Your Project
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
