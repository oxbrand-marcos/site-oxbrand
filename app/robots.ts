import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/obrigado'],
      },
    ],
    sitemap: 'https://oxbrand.com.br/sitemap.xml',
    host: 'https://oxbrand.com.br',
  }
}
