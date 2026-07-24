import type { Metadata } from 'next'
import Link from 'next/link'
import { pageOg } from '@/lib/og'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { getAllPublishedPosts } from '@/app/actions/blog'
import { InsightsGrid } from '@/components/insights-grid'
import { blogListingSchema, breadcrumbSchema, jsonLd } from '@/lib/jsonld'
import { STATIC_POSTS } from '@/lib/blog-static'

export const metadata: Metadata = {
  title: 'Insights | OxBrand, Marketing de Performance',
  description: 'Análises de tráfego pago, CRM e conversão direto da operação da OxBrand. Estratégias práticas e dados reais de quem executa, sem modinha, sem enrolação.',
  ...pageOg({
    title: 'OxBrand Insights · Marketing de Performance',
    description: 'Análises de tráfego pago, CRM e conversão direto da operação da OxBrand. Estratégias práticas e dados reais de quem executa, sem modinha, sem enrolação.',
    path: '/blog',
    subtitle: 'Insights & Estratégia',
  }),
}


export default async function InsightsPage() {
  const posts = await getAllPublishedPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            blogListingSchema(
              [...STATIC_POSTS, ...posts.filter((p) => !STATIC_POSTS.some((s) => s.slug === p.slug))]
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map((p) => ({
                  slug: p.slug,
                  title: p.title,
                  datePublished: new Date(p.createdAt).toISOString(),
                })),
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: 'OxBrand', url: '/' }, { name: 'Insights', url: '/blog' }])),
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex flex-col justify-end overflow-hidden grid-bg border-b border-border" style={{ minHeight: '60vh' }}>
          <DotsCanvas />
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">INSIGHTS</span>
            </nav>

            <p className="mono-tag text-primary/60 tracking-[0.2em]">#sempreON</p>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Conteúdo que conecta<br />
              <span className="text-glow">estratégia a resultado.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
              Tendências, análises e estratégias do marketing digital de performance. Nada de modismos: apenas conteúdo que faz sentido para quem precisa crescer.
            </p>
          </div>

          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-center sm:justify-between gap-4">
            <span className="mono-tag font-semibold text-white">OxBrand Insights</span>
            {posts.length >= 10 && (
              <span className="hidden sm:block mono-tag font-semibold text-white">{posts.length} artigos publicados</span>
            )}
          </div>
        </section>

        {/* Grid de posts com filtros */}
        <InsightsGrid posts={posts} />

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <span className="mono-tag text-muted-foreground/60">Diagnóstico gratuito</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Quer aplicar esses insights<br />no seu negócio?
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg">
              Nossa equipe analisa sua operação digital e retorna com um diagnóstico completo e gratuito.
            </p>
            <a
              href="/diagnostico"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
            >
              Falar com especialistas ↗
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
