import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'OxBrand'
  const subtitle = searchParams.get('subtitle') ?? 'Agência de Marketing de Performance'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0a0a0a',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Subtle accent glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,100,50,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Bottom-left accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,100,50,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '60px 72px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '4px',
                backgroundColor: '#f06432',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#fff', fontSize: '18px', fontWeight: 800, lineHeight: 1 }}>Ox</span>
            </div>
            <span
              style={{
                color: '#ffffff',
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '-0.5px',
              }}
            >
              OxBrand
            </span>
          </div>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
            {/* Subtitle / tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div style={{ width: '24px', height: '2px', backgroundColor: '#f06432' }} />
              <span
                style={{
                  color: '#f06432',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {subtitle}
              </span>
            </div>

            {/* Title */}
            <span
              style={{
                color: '#ffffff',
                fontSize: title.length > 50 ? '44px' : '56px',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
              }}
            >
              {title}
            </span>
          </div>

          {/* Footer row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '24px',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', letterSpacing: '0.08em' }}>
              oxbrand.com.br
            </span>
            <span style={{ color: 'rgba(255,255,255,0.20)', fontSize: '13px', letterSpacing: '0.08em' }}>
              Mogi das Cruzes · SP
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
