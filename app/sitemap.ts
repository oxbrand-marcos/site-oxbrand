import { ARTICLES } from '@/lib/blog-articles'
import { PROFILE_AUTHORS } from '@/components/article-author'
import { MetadataRoute } from 'next'
import { db } from '@/lib/db'
import { blogPosts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

const BASE = 'https://www.oxbrand.com.br'

// Páginas estáticas públicas com prioridade e changeFrequency
const staticPages: MetadataRoute.Sitemap = [
  { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/solucoes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solucoes/assessoria-em-marketing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/solucoes/gestao-de-trafego-pago`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/solucoes/desenvolvimento-de-sites`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/solucoes/copywriting-e-redacao`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/solucoes/inbound-marketing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/solucoes/crm-kommo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/nossos-clientes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE}/materiais-gratuitos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/carreiras-em-marketing-digital`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/contato`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE}/diagnostico`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  { url: `${BASE}/agencia-de-marketing-digital-mogi-das-cruzes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/trafego-pago-com-previsibilidade`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/blog/autor`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ...PROFILE_AUTHORS.map((a) => ({ url: `${BASE}/blog/autor/${a.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 })),
  { url: `${BASE}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE}/termos-e-condicoes`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
]

// Artigos estáticos que existem como arquivos de página (não criados pelo CMS)
const staticPosts: MetadataRoute.Sitemap = [
  ...ARTICLES.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.dateISO),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  })),
  { url: `${BASE}/blog/leads-do-trafego-pago-como-transformar-em-vendas`, lastModified: new Date('2026-06-03'), changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE}/blog/foco-em-marketing-de-conteudo-como-gerar-resultados-reais`, lastModified: new Date('2026-01-15'), changeFrequency: 'monthly', priority: 0.75 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Posts publicados do banco
  let dbPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await db
      .select({
        slug: blogPosts.slug,
        updatedAt: blogPosts.updatedAt,
        createdAt: blogPosts.createdAt,
      })
      .from(blogPosts)
      .where(eq(blogPosts.published, true))

    dbPosts = posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.createdAt,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  } catch {
    // Se o banco não estiver disponível durante build, continua sem posts do CMS
  }

  return [...staticPages, ...staticPosts, ...dbPosts]
}
