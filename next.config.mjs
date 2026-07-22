import { buildRedirects } from './lib/redirects.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Garante que /sobre/ redireciona automaticamente para /sobre (sem barra)
  trailingSlash: false,

  async redirects() {
    return buildRedirects()
  },

  // Headers de segurança (PageSpeed / Práticas recomendadas)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
        ],
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Formats modernos — avif tem melhor compressão; webp como fallback
    formats: ['image/avif', 'image/webp'],
    // Cache longo para assets estáticos (1 ano)
    minimumCacheTTL: 31536000,
    // Device sizes alinhados com breakpoints reais do site
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    // Image sizes para componentes com layout fill ou fixed
    imageSizes: [16, 32, 48, 64, 96, 128, 144, 176, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oxbrand.com.br',
        pathname: '/wp-content/uploads/**',
      },
      // YouTube thumbnails para a facade
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
  // Compressão de assets
  compress: true,
}

export default nextConfig
