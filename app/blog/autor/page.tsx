import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PROFILE_AUTHORS } from '@/components/article-author'
import { breadcrumbSchema, jsonLd } from '@/lib/jsonld'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Autores | OxBrand Insights',
  description: 'Conheça o time por trás dos conteúdos da OxBrand: estrategistas e redatores de marketing de performance em Mogi das Cruzes.',
  alternates: { canonical: '/blog/autor' },
  ...pageOg({
    title: 'Autores da OxBrand',
    description: 'O time por trás dos conteúdos da OxBrand: estrategistas e redatores de marketing de performance.',
    path: '/blog/autor',
    subtitle: 'Time de Conteúdo',
  }),
}

export default function AutoresIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
        { name: 'OxBrand', url: '/' }, { name: 'Insights', url: '/blog' }, { name: 'Autores', url: '/blog/autor' },
      ])) }} />
      <Header />
      <main>
        <section className="relative grid-bg border-b border-border pt-32 pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(92,54,235,0.14),transparent_60%)]" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/blog" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">INSIGHTS</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">AUTORES</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Quem escreve na OxBrand</h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-balance">
              O time de estratégia e conteúdo por trás dos nossos insights de marketing de performance.
            </p>
          </div>
        </section>

        <section className="section-light py-16">
          <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROFILE_AUTHORS.map((a) => (
              <Link key={a.slug} href={`/blog/autor/${a.slug}`} className="group flex flex-col items-center text-center gap-3 border border-zinc-200 bg-white p-7 hover:border-primary/40 transition-colors">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100">
                  <Image src={a.avatar} alt={a.name} fill className="object-cover" unoptimized sizes="80px" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">{a.name}</span>
                  <span className="mono-tag text-zinc-400">{a.role}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
