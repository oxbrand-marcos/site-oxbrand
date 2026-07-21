import { db } from '@/lib/db'
import { blogPosts } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'

const BASE = 'https://oxbrand.com.br'
const FEED_TITLE = 'OxBrand Insights'
const FEED_DESC = 'Estratégia, performance e marketing digital, direto da equipe OxBrand.'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Artigos estáticos (páginas de arquivo não gerenciadas pelo CMS)
const staticArticles = [
  {
    slug: 'leads-do-trafego-pago-como-transformar-em-vendas',
    title: 'Leads do tráfego pago: como transformar cliques em vendas no WhatsApp',
    excerpt: 'Você investe em tráfego pago, o anúncio performa, os leads chegam. As vendas não acontecem. Entenda por que e como fechar o funil.',
    tag: 'Tráfego & Aquisição',
    author: 'OxBrand',
    coverUrl: `${BASE}/blog/leads-trafego-pago-cover.png`,
    createdAt: new Date('2026-06-03'),
    updatedAt: new Date('2026-06-03'),
  },
  {
    slug: 'foco-em-marketing-de-conteudo-como-gerar-resultados-reais',
    title: 'Foco em marketing de conteúdo: como gerar resultados reais',
    excerpt: 'Conteúdo sem estratégia gera métricas de vaidade. Conheça o método Conteúdo Pro: 5 Q\'s + 3 Pq\'s.',
    tag: 'Conversão',
    author: 'OxBrand',
    coverUrl: `${BASE}/blog/marketing-conteudo-cover.png`,
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
  },
]

export async function GET() {
  // Posts publicados do banco
  let cmsArticles: typeof staticArticles = []
  try {
    const rows = await db
      .select({
        slug: blogPosts.slug,
        title: blogPosts.title,
        excerpt: blogPosts.excerpt,
        tag: blogPosts.tag,
        author: blogPosts.author,
        coverUrl: blogPosts.coverUrl,
        createdAt: blogPosts.createdAt,
        updatedAt: blogPosts.updatedAt,
      })
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt))

    cmsArticles = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: r.excerpt ?? '',
      tag: r.tag,
      author: r.author,
      coverUrl: r.coverUrl ? `${BASE}${r.coverUrl}` : '',
      createdAt: r.createdAt,
      updatedAt: r.updatedAt ?? r.createdAt,
    }))
  } catch {
    // banco indisponível no build — continua só com estáticos
  }

  // Une e ordena por data desc
  const allArticles = [...cmsArticles, ...staticArticles].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  )

  const items = allArticles
    .map(
      (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${BASE}/blog/${a.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${a.slug}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <pubDate>${a.createdAt.toUTCString()}</pubDate>
      <lastBuildDate>${(a.updatedAt ?? a.createdAt).toUTCString()}</lastBuildDate>
      <author>contato@oxbrand.com.br (${escapeXml(a.author)})</author>
      <category>${escapeXml(a.tag)}</category>${a.coverUrl ? `\n      <enclosure url="${escapeXml(a.coverUrl)}" type="image/png" />` : ''}
    </item>`
    )
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${BASE}/blog</link>
    <description>${escapeXml(FEED_DESC)}</description>
    <language>pt-br</language>
    <managingEditor>contato@oxbrand.com.br (OxBrand)</managingEditor>
    <webMaster>contato@oxbrand.com.br (OxBrand)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/images/oxbrand-avatar.png</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${BASE}/blog</link>
    </image>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
