import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'

export const metadata: Metadata = {
  title: 'Página não encontrada (404) | OxBrand',
  description: 'A página que você procura não existe ou mudou de endereço. Volte para a home ou explore as soluções da OxBrand.',
  robots: { index: false, follow: true },
}

const links = [
  { label: 'Nossos Clientes', href: '/nossos-clientes' },
  { label: 'Insights (Blog)', href: '/blog' },
  { label: 'Materiais Gratuitos', href: '/materiais-gratuitos' },
  { label: 'Contato', href: '/contato' },
]

export default function NotFound() {
  return (
    <main>
      <Header />

      <section className="relative flex flex-col items-center justify-center text-center pt-14 min-h-[80svh] overflow-hidden grid-bg border-b border-border">
        <DotsCanvas
          className="z-[1]"
          color="rgba(255,255,255,0.15)"
          dotRadius={1.2}
          spacing={30}
          repelRadius={110}
          repelStrength={7}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 flex flex-col items-center gap-6">
          <span className="mono-tag text-primary/70">Erro 404</span>

          <h1 className="text-8xl sm:text-9xl font-bold leading-none text-foreground stat-number">
            4<span className="text-glow">0</span>4
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Essa página não converteu.</h2>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            O link que você seguiu não existe, mudou de endereço ou nunca esteve no funil. Sem problema: a gente te leva de volta para onde o resultado acontece.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
            >
              Voltar para a home
            </Link>
            <Link
              href="/solucoes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              Ver soluções
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-6 border-t border-border pt-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="mono-tag text-muted-foreground/60 hover:text-primary transition-colors"
              >
                {l.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
