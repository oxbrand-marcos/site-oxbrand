import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/obrigado', '/teste-gestor-de-trafego'],
      },
    ],
    sitemap: 'https://www.oxbrand.com.br/sitemap.xml',
    host: 'https://www.oxbrand.com.br',
  }
}
