'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/db/schema'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { readingTime } from '@/lib/utils'
import { STATIC_POSTS } from '@/lib/blog-static'

// Categorias canônicas — a fonte da verdade para labels e slugs
const CATEGORY_DEFS = [
  { slug: 'trafego-e-aquisicao',  label: 'Tráfego & Aquisição' },
  { slug: 'conversao',            label: 'Conversão' },
  { slug: 'crm-e-comercial',      label: 'CRM & Comercial' },
  { slug: 'dados-e-mensuracao',   label: 'Dados & Mensuração' },
  { slug: 'bastidores-ox',        label: 'Bastidores Ox' },
]

/**
 * Normaliza qualquer string de categoria para um slug estável.
 * "Tráfego & Aquisição" → "trafego-e-aquisicao"
 * "Performance"         → "performance"  (mantém compatibilidade com posts antigos)
 */
function toSlug(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // remove diacríticos
    .toLowerCase()
    .replace(/&/g, 'e')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}




interface Props {
  posts: BlogPost[]
}

export function InsightsGrid({ posts }: Props) {
  const [activeSlug, setActiveSlug] = useState('todos')

  // Mescla posts do banco com estáticos, evitando duplicatas por slug.
  //
  // Os posts estáticos têm prioridade sobre os do banco quando o slug coincide.
  // Motivo: a página do artigo (app/blog/[slug]/page.tsx) renderiza a partir do
  // ARTICLE_CONTENT do arquivo content.ts, e não do banco. Se o card do listing
  // lesse a versão do banco, os dois divergiriam — era o que fazia o card exibir
  // "1 min de leitura" enquanto o artigo exibia "6 min". Uma fonte de verdade só.
  const allPosts = useMemo(() => {
    const staticSlugs = new Set(STATIC_POSTS.map((p) => p.slug))
    const dbOnly = posts.filter((p) => !staticSlugs.has(p.slug))
    return [...STATIC_POSTS, ...dbOnly].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  }, [posts])

  // Quais slugs de categoria têm pelo menos um post
  const categoriesWithPosts = useMemo(() => {
    const set = new Set(allPosts.map((p) => toSlug(p.tag)))
    return CATEGORY_DEFS.filter((c) => set.has(c.slug))
  }, [allPosts])

  const filtered = useMemo(
    () =>
      activeSlug === 'todos'
        ? allPosts
        : allPosts.filter((p) => toSlug(p.tag) === activeSlug),
    [allPosts, activeSlug]
  )

  return (
    <section className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrar por categoria">
          {/* "Todos" sempre presente */}
          <button
            onClick={() => setActiveSlug('todos')}
            aria-pressed={activeSlug === 'todos'}
            className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              activeSlug === 'todos'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900'
            }`}
          >
            Todos
          </button>

          {/* Apenas categorias que têm posts */}
          {categoriesWithPosts.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveSlug(cat.slug)}
              aria-pressed={activeSlug === cat.slug}
              className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                activeSlug === cat.slug
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de posts */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-5 py-24 text-center">
            <span className="mono-tag text-zinc-400">Nenhum artigo nesta categoria ainda.</span>
            <button
              onClick={() => setActiveSlug('todos')}
              className="px-5 py-2 text-xs font-bold tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver todos
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
            {filtered.flatMap((post, i) => {
              const mins = readingTime(post.content)
              const card = (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white hover:bg-zinc-50 transition-colors flex flex-col gap-0"
                >
                  {/* Imagem de capa */}
                  {post.coverUrl && (
                    <div className="relative w-full aspect-[16/8] overflow-hidden border-b border-zinc-200">
                      <Image
                        src={post.coverUrl}
                        alt={post.coverAlt ?? post.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  {/* Texto */}
                  <div className="p-8 sm:p-10 flex flex-col gap-5 flex-1">
                    {/* Exibe o label canônico se existir, senão exibe a tag diretamente */}
                    {/* #3b1fae sobre branco = 5.3:1 — passa WCAG AA para texto normal */}
                    <span className="mono-tag" style={{ color: '#3b1fae' }}>
                      {CATEGORY_DEFS.find((c) => c.slug === toSlug(post.tag))?.label ?? post.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug group-hover:text-primary transition-colors text-balance text-center sm:text-left">
                      {post.title}
                    </h2>
                    <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 text-center sm:text-left">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200">
                      <div className="flex flex-col gap-0.5">
                        <span className="mono-tag text-zinc-400">{formatDate(post.createdAt)}</span>
                        <span className="mono-tag text-zinc-400/70">
                          {post.author} · {mins} min de leitura
                        </span>
                      </div>
                      {/* #3b1fae sobre branco = 5.3:1 — passa WCAG AA */}
                      <span className="mono-tag group-hover:text-primary transition-colors" style={{ color: '#3b1fae' }}>Ler artigo ↗</span>
                    </div>
                  </div>
                </Link>
              )
              const isInsertPoint =
                i === 5 || (i === filtered.length - 1 && filtered.length < 6)
              return isInsertPoint
                ? [card, <NewsletterSignup key="newsletter-inline" variant="inline" />]
                : [card]
            })}
          </div>
        )}
      </div>
    </section>
  )
}
