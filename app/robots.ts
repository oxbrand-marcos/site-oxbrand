import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/obrigado', '/teste-gestor-de-trafego'],
      },
      {
        // Bots de IA liberados explicitamente (busca generativa).
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'Bingbot',
          'meta-externalagent',
          'Amazonbot',
          'DuckAssistBot',
          'cohere-ai',
          'MistralAI-User',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/', '/obrigado', '/teste-gestor-de-trafego'],
      },
    ],
    sitemap: 'https://www.oxbrand.com.br/sitemap.xml',
    host: 'https://www.oxbrand.com.br',
  }
}
