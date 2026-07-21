import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { FloatingActions } from '@/components/floating-actions'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

// JetBrains Mono — usada em .mono-tag e código; pré-carregada para evitar FOUT
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

const _homeOgImage = 'https://oxbrand.com.br/og?title=OxBrand%20%C2%B7%20Marketing%20de%20Performance&subtitle=Agência%20de%20Marketing%20de%20Performance'

export const metadata: Metadata = {
  metadataBase: new URL('https://oxbrand.com.br'),
  title: 'OxBrand | Agência de Marketing de Performance em Mogi das Cruzes',
  description:
    'A OxBrand transforma dados em crescimento. Tráfego pago, criação de conteúdo, estratégia digital e tecnologia para marcas que querem dominar o mercado.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'OxBrand · Marketing de Performance',
    description: 'A OxBrand transforma dados em crescimento. Tráfego pago, criação de conteúdo, estratégia digital e tecnologia para marcas que querem dominar o mercado.',
    url: 'https://oxbrand.com.br',
    siteName: 'OxBrand',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: _homeOgImage, width: 1200, height: 630, alt: 'OxBrand · Marketing de Performance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OxBrand · Marketing de Performance',
    description: 'A OxBrand transforma dados em crescimento. Tráfego pago, criação de conteúdo, estratégia digital e tecnologia para marcas que querem dominar o mercado.',
    images: [_homeOgImage],
    site: '@oxbrand_br',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <head>
        {/* Preconnect para fontes e recursos externos críticos */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* DNS prefetch para YouTube (facade carregada sob demanda) */}
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="OxBrand Insights · RSS"
          href="https://oxbrand.com.br/blog/rss.xml"
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        <FloatingActions />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
