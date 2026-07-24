import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { DeferredGlobals } from '@/components/deferred-globals'
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

// JetBrains Mono, usada em .mono-tag e código; pré-carregada para evitar FOUT
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

const _homeOgImage = 'https://www.oxbrand.com.br/og-home.jpg'
const GTM_ID = 'GTM-TKVR6WRK'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oxbrand.com.br'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  title: 'OxBrand | Agência de Marketing Digital em Mogi das Cruzes',
  description:
    'Agência de marketing de performance em Mogi das Cruzes: tráfego pago, sites, CRM e SEO integrados para gerar crescimento previsível. +450 marcas atendidas.',
  openGraph: {
    title: 'OxBrand · Marketing de Performance',
    description: 'Agência de marketing de performance em Mogi das Cruzes: tráfego pago, sites, CRM e SEO integrados para gerar crescimento previsível. +450 marcas atendidas.',
    url: 'https://www.oxbrand.com.br',
    siteName: 'OxBrand',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: _homeOgImage, width: 1200, height: 630, alt: 'OxBrand · Marketing de Performance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OxBrand · Marketing de Performance',
    description: 'Agência de marketing de performance em Mogi das Cruzes: tráfego pago, sites, CRM e SEO integrados para gerar crescimento previsível. +450 marcas atendidas.',
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
        {/* Consent Mode v2 (opt-out): default concedido, negado se o usuario recusou antes */}
        <Script id="consent-init" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};(function(){var m=document.cookie.match(/oxb_consent=(granted|denied)/);var s=m?m[1]:'granted';gtag('consent','default',{ad_storage:s,analytics_storage:s,ad_user_data:s,ad_personalization:s,security_storage:'granted'});})();`}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Preconnect para fontes e recursos externos críticos */}
        {/* DNS prefetch para YouTube (facade carregada sob demanda) */}
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="OxBrand Insights · RSS"
          href="https://www.oxbrand.com.br/blog/rss.xml"
        />
      </head>
      <body className="antialiased font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <DeferredGlobals />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
