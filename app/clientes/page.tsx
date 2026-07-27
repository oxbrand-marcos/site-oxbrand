import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { pageOg } from '@/lib/og'
import { jsonLd, breadcrumbSchema } from '@/lib/jsonld'
import { CASES } from '@/lib/clientes'

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Resultados Reais | OxBrand',
  description: 'Cases de clientes que cresceram com a OxBrand. Estrategia, execucao e resultados em marketing de performance, de Mogi das Cruzes para todo o Brasil.',
  ...pageOg({
    title: 'Cases de Sucesso da OxBrand',
    description: 'Marcas reais que estruturaram aquisicao e passaram a crescer com previsibilidade ao lado da OxBrand.',
    path: '/clientes',
    subtitle: 'Cases & Resultados',
  }),
  alternates: { canonical: '/clientes' },
}

export default function CasesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'OxBrand', url: '/' }, { name: 'Cases', url: '/clientes' }])) }}
      />
      <Header />

      <section className="relative flex flex-col pt-14 overflow-hidden grid-bg border-b border-border">
        <DotsCanvas className="z-[1]" color="rgba(255,255,255,0.15)" dotRadius={1.2} spacing={30} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col gap-5 items-center text-center">
          <span className="mono-tag text-primary/70">Cases & Resultados</span>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-foreground">Cases de sucesso</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Marcas reais que estruturaram aquisicao e passaram a crescer com previsibilidade ao lado da OxBrand.
          </p>
        </div>
      </section>

      <section className="py-16 section-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {CASES.map((c) => (
              <Link key={c.slug} href={`/clientes/${c.slug}`} className="group bg-white p-8 flex flex-col gap-3 hover:bg-black/[0.02] transition-colors">
                <span className="mono-tag text-black/40">{c.segment || 'Case'}</span>
                <span className="text-2xl font-bold text-black group-hover:text-primary transition-colors">{c.client}</span>
                <span className="mono-tag text-primary/70 mt-auto">
                  {c.published ? 'Ver case →' : 'Em breve'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
