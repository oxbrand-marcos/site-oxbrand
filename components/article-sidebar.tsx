import Link from 'next/link'
import { ARTICLES } from '@/lib/blog-articles'

// Espelha as categorias canônicas do filtro dos Insights.
const SIDEBAR_CATEGORIES = [
  { slug: 'trafego-e-aquisicao', label: 'Tráfego & Aquisição' },
  { slug: 'sites-e-conversao',   label: 'Sites & Conversão' },
  { slug: 'crm-e-vendas',        label: 'CRM & Vendas' },
  { slug: 'conteudo-e-copy',     label: 'Conteúdo & Copy' },
  { slug: 'estrategia-e-gestao', label: 'Estratégia & Gestão' },
]

function fmtShort(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export interface TocItem { label: string; href?: string }

export function ArticleSidebar({ toc = [], currentSlug }: { toc?: TocItem[]; currentSlug: string }) {
  const recent = [...ARTICLES]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 5)

  return (
    <aside className="hidden lg:flex flex-col gap-8 sticky top-24 self-start">
      {/* Neste artigo */}
      {toc.length > 0 && (
        <div className="flex flex-col gap-4">
          <span className="mono-tag text-zinc-400">Neste artigo</span>
          <nav className="flex flex-col gap-2">
            {toc.map((t, i) =>
              t.href ? (
                <a key={i} href={t.href} className="text-xs text-zinc-500 border-l border-zinc-200 pl-3 py-1 hover:border-primary hover:text-zinc-900 transition-colors">{t.label}</a>
              ) : (
                <span key={i} className="text-xs text-zinc-500 border-l border-zinc-200 pl-3 py-1">{t.label}</span>
              )
            )}
          </nav>
        </div>
      )}

      {/* Diagnóstico gratuito */}
      <div className="border border-zinc-200 p-5 flex flex-col gap-3">
        <span className="mono-tag text-zinc-400">Diagnóstico gratuito</span>
        <p className="text-xs text-zinc-500 leading-relaxed">Quer aplicar esses insights no seu negócio?</p>
        <a href="/diagnostico" className="mono-tag text-primary/70 hover:text-primary transition-colors">Falar com especialistas &#8599;</a>
      </div>

      {/* Categorias */}
      <div className="flex flex-col gap-4">
        <span className="mono-tag text-zinc-400">Categorias</span>
        <nav className="flex flex-col gap-2">
          {SIDEBAR_CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/blog?categoria=${c.slug}`} className="group flex items-center justify-between text-xs text-zinc-500 hover:text-primary transition-colors">
              <span>{c.label}</span>
              <span className="text-zinc-300 group-hover:text-primary transition-colors">&#8599;</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Posts recentes */}
      <div className="flex flex-col gap-4">
        <span className="mono-tag text-zinc-400">Posts recentes</span>
        <nav className="flex flex-col gap-4">
          {recent.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col gap-1">
              <span className="text-xs font-semibold text-zinc-700 leading-snug group-hover:text-primary transition-colors">{p.title}</span>
              <span className="mono-tag text-zinc-400">{fmtShort(p.dateISO)}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
