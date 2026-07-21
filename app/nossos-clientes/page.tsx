import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { pageOg } from '@/lib/og'
import { Header } from '@/components/header'
import { Clients } from '@/components/clients'
import { ClientGrid } from '@/components/client-grid'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { breadcrumbSchema, jsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Nossos Clientes | Cases de Sucesso, OxBrand',
  description: 'Conheça as marcas que cresceram com a OxBrand. Mais de 450 marcas de todo o Brasil que confiam na nossa agência de marketing de performance em Mogi das Cruzes.',
  ...pageOg({
    title: 'Nossos Clientes · 450+ marcas que cresceram com a OxBrand',
    description: 'De construção civil a e-commerce, de clínicas a indústria. Empresas reais que estruturaram aquisição e passaram a crescer com previsibilidade.',
    path: '/nossos-clientes',
    subtitle: 'Clientes & Resultados',
  }),
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export default function ClientesPage() {
  return (
    <main>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'OxBrand', url: '/' }, { name: 'Nossos Clientes', url: '/nossos-clientes' }])) }}
      />
      <Header />

      {/* Hero — mesmo efeito visual da Home */}
      <section className="relative flex flex-col pt-14 overflow-hidden grid-bg border-b border-border">

        <DotsCanvas
          className="z-[1]"
          color="rgba(255,255,255,0.15)"
          dotRadius={1.2}
          spacing={30}
          repelRadius={110}
          repelStrength={7}
        />

        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          <Image src="/images/hero-clouds.png" alt="" fill className="object-cover opacity-20" priority />

          <div className="absolute -left-32 -top-10 w-[450px] h-[400px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)' }} />
          <div className="absolute -left-32 top-20 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 50%, transparent 75%)' }} />
          <div className="absolute -right-32 -top-10 w-[450px] h-[400px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)' }} />
          <div className="absolute -right-32 top-24 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 50%, transparent 75%)' }} />

          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(13,13,13,0.72) 68%)' }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center py-28 px-6">
          <div className="max-w-5xl flex flex-col items-center text-center gap-8">

            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                OxBrand
              </Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">Nossos Clientes</span>
            </nav>

            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              O coração do{' '}
              <span className="text-glow">nosso negócio.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl text-balance">
              Estamos aqui, prontos para conversar sobre o futuro do seu negócio, seja você de Mogi das Cruzes
              ou de qualquer lugar do Brasil. Fale com a OxBrand e descubra como o nosso time, através de um
              diagnóstico completo e robusto, vai otimizar, acelerar e potencializar seus resultados.
            </p>

            <div className="flex flex-col items-center gap-3">
              <Link
                href="/diagnostico"
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/85 transition-colors"
              >
                Fale com os nossos especialistas
              </Link>
              <span className="text-xs text-muted-foreground/40">
                agende um{' '}
                <span className="text-primary/60">diagnóstico</span>{' '}
                grátis
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Bloco institucional — O Coração do nosso negócio */}
      <section className="relative py-24 border-b border-border overflow-hidden bg-[#080810]">
        {/* Efeito de fundo: gradiente radial roxo sutil + grid de pontos */}
        <div className="pointer-events-none absolute inset-0">
          {/* brilho roxo vindo do canto inferior esquerdo */}
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          {/* brilho roxo vindo do canto superior direito */}
          <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px]" />
          {/* grid de pontos */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">

            <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-muted-foreground/60">Satisfações e resultados</span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                Marcas que confiam<br />
                <span className="text-glow">na OxBrand.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
              <p className="text-muted-foreground leading-relaxed">
                Empresas reais que estruturaram aquisição, aumentaram conversão e passaram a crescer
                com previsibilidade ao lado da OxBrand. De construção civil a e-commerce, de clínicas a indústria.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos lado a lado com cada parceiro para construir estratégias orientadas por dados,
                comprometidas com o resultado; nunca com entrega avulsa.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 w-full sm:w-auto justify-center lg:justify-start">
                <a
                  href="https://wa.me/+5511921425351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
                >
                  <WhatsAppIcon />
                  Falar com o time Ox
                </a>
                <Link
                  href="/solucoes"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 border border-border text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  Ver nossas soluções ↗
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid de logos dos clientes */}
      <ClientGrid />

      {/* Link para portfólio */}
      <div className="flex justify-center py-10 border-b border-border bg-background">
        <Link
          href="/portfolio"
          className="flex items-center gap-2 px-6 py-3 border border-border text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          Ver o portfólio de projetos ↗
        </Link>
      </div>

      {/* Depoimentos e vídeos */}
      <Clients />

      <Footer />
    </main>
  )
}
