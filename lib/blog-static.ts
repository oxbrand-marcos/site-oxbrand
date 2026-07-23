import type { BlogPost } from '@/lib/db/schema'
import { ARTICLE_CONTENT as LEADS_CONTENT } from '@/app/blog/leads-do-trafego-pago-como-transformar-em-vendas/content'
import { ARTICLE_CONTENT as CONTEUDO_CONTENT } from '@/app/blog/foco-em-marketing-de-conteudo-como-gerar-resultados-reais/content'
import { ARTICLES, articleText, coverFor } from '@/lib/blog-articles'

// Posts das matérias dinâmicas (renderizadas por /blog/[slug]).
const dynamicPosts: BlogPost[] = ARTICLES.map((a, i) => ({
  id: -100 - i,
  slug: a.slug,
  title: a.title,
  excerpt: a.subtitle,
  content: articleText(a),
  tag: a.tag,
  author: 'OxBrand',
  coverUrl: coverFor(a.slug),
  coverAlt: a.coverAlt,
  published: true,
  userId: 'static',
  createdAt: new Date(a.dateISO),
  updatedAt: new Date(a.dateISO),
}))

// Posts estáticos bespoke (páginas próprias) + os dinâmicos.
export const STATIC_POSTS: BlogPost[] = [
  ...dynamicPosts,
  {
    id: -1,
    slug: 'leads-do-trafego-pago-como-transformar-em-vendas',
    title: 'Leads do tráfego pago: como transformar cliques em vendas no WhatsApp',
    excerpt: 'Você investe em tráfego pago, o anúncio performa, os leads chegam. As vendas não acontecem. O erro está em tratar o clique como o fim da estratégia.',
    content: LEADS_CONTENT,
    tag: 'Tráfego & Aquisição',
    author: 'OxBrand',
    coverUrl: '/blog/leads-trafego-pago-cover.png',
    coverAlt: 'Leads do tráfego pago: funil digital e WhatsApp',
    published: true,
    userId: 'static',
    createdAt: new Date('2026-06-03'),
    updatedAt: new Date('2026-06-03'),
  },
  {
    id: -2,
    slug: 'foco-em-marketing-de-conteudo-como-gerar-resultados-reais',
    title: 'Foco em marketing de conteúdo: como gerar resultados reais',
    excerpt: "Conteúdo sem estratégia gera métricas de vaidade. Conheça o método Conteúdo Pro: 5 Q's + 3 Pq's, que conecta cada publicação à conversão.",
    content: CONTEUDO_CONTENT,
    tag: 'Conversão',
    author: 'OxBrand',
    coverUrl: '/blog/marketing-conteudo-cover.png',
    coverAlt: 'Foco em marketing de conteúdo: estratégia e resultados',
    published: true,
    userId: 'static',
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
  },
]
