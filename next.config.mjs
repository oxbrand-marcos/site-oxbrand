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
    // 1 formato so (WebP): AVIF + WebP dobraria as transformacoes de imagem na Vercel.
    formats: ['image/webp'],
    // Uma unica qualidade permitida; cada valor extra de q multiplica as variacoes.
    qualities: [75],
    // Larguras responsivas reduzidas (de 7 para 4) para cortar variacoes por imagem.
    deviceSizes: [640, 1080, 1920, 3840],
    // Larguras para imagens de tamanho fixo (thumbs, avatares, cards).
    imageSizes: [64, 128, 256, 384],
    // Cache de 31 dias (maximo do CDN) para reduzir transformacoes STALE.
    minimumCacheTTL: 2678400,
    // Allowlist do que pode ser otimizado localmente (evita transformacoes acidentais).
    localPatterns: [
      { pathname: '/images/**', search: '' },
      { pathname: '/blog/**', search: '' },
      { pathname: '/nossos-clientes/**', search: '' },
    ],
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
  // Tree-shaking agressivo de barrel imports (menos JS não usado)
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-phone-number-input'],
  },
}

export default nextConfig
