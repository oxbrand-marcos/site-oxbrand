import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { pageOg } from '@/lib/og'
import { Header } from '@/components/header'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'

export const metadata: Metadata = {
  title: 'Portfólio OxBrand | Logotipos, Redes Sociais e Sites',
  description: 'Uma seleção de 118 projetos de branding e presença digital entregues pela OxBrand. Logotipos, identidade visual, redes sociais e sites para mais de 450 marcas.',
  ...pageOg({
    title: 'Portfólio OxBrand | Logotipos, Redes Sociais e Sites',
    description: 'Uma seleção de 118 projetos de branding e presença digital entregues pela OxBrand. Logotipos, identidade visual, redes sociais e sites para mais de 450 marcas.',
    path: '/portfolio',
    subtitle: 'Branding & Presença Digital',
  }),
}

// Volume total produzido pela operação (distinto de projetosNaGaleria no PortfolioGrid)
const pecasProduzidas = 1000

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export default function PortfolioPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[56vh] flex flex-col justify-end overflow-hidden bg-background">
        <DotsCanvas />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
            <span className="mono-tag text-muted-foreground/20">/</span>
            <span className="mono-tag text-primary/70">PORTFÓLIO</span>
          </nav>

          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
            Nosso{' '}
            <span className="text-glow">Portfólio</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl text-balance">
            Na OxBrand, acreditamos que mostrar trabalho sólido é o fundamento da confiança.
            Aqui você encontra logotipos, peças de redes sociais e sites desenvolvidos para nossos clientes, da construção civil ao e-commerce, da saúde ao varejo.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="/diagnostico"
              className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/85 transition-colors"
            >
              Fale com os nossos especialistas
            </Link>
            <span className="text-xs text-muted-foreground/50">
              agende um{' '}
              <span className="text-primary/60">diagnóstico</span>{' '}
              grátis
            </span>
          </div>
        </div>

        <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-between">
          <span className="mono-tag text-primary-foreground/80">OxBrand Portfólio</span>
          <span className="mono-tag text-primary-foreground/50">+{pecasProduzidas} peças produzidas para +450 marcas</span>
        </div>
      </section>

      {/* Grid do portfólio com tabs */}
      <PortfolioGrid />

      <Footer />
    </main>
  )
}
