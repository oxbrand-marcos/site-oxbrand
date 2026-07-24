import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { FAQ } from '@/components/faq'
import { serviceSchema, faqPageSchema, breadcrumbSchema, jsonLd } from '@/lib/jsonld'

export interface NicheLPProps {
  path: string
  breadcrumb: string
  serviceType: string
  description: string
  tag: string
  headline: string
  headlineHighlight?: string
  subheadline: string
  bodyHtml: string
  faq: { q: string; a: string }[]
  note?: string
}

export function NicheLP(p: NicheLPProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ name: p.breadcrumb, description: p.description, url: p.path, serviceType: p.serviceType })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'OxBrand', url: '/' }, { name: p.breadcrumb, url: p.path }])) }} />
      {p.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(p.faq)) }} />
      )}
      <Header />
      <main>
        <section className="relative grid-bg border-b border-border pt-32 pb-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(92,54,235,0.16),transparent_60%)]" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">{p.tag.toUpperCase()}</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance">
              {p.headline}
              {p.headlineHighlight && <> <span className="text-glow">{p.headlineHighlight}</span></>}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">{p.subheadline}</p>
            <Link href="/diagnostico" className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">
              Diagnóstico gratuito ↗
            </Link>
          </div>
          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 mt-14 flex items-center justify-center sm:justify-between gap-4">
            <span className="mono-tag text-primary-foreground/80">{p.breadcrumb}</span>
            <span className="hidden sm:block mono-tag text-primary-foreground/50">OxBrand · Marketing de Performance</span>
          </div>
        </section>

        <section className="section-light py-16 border-b border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="article-body" dangerouslySetInnerHTML={{ __html: p.bodyHtml }} />
            {p.note && (
              <p className="mt-8 text-xs text-zinc-400 border-t border-zinc-200 pt-4 leading-relaxed">{p.note}</p>
            )}
          </div>
        </section>

        {p.faq.length > 0 && <FAQ questions={p.faq} />}

        <Contact />
      </main>
      <Footer />
    </>
  )
}
