'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCountUp } from '@/hooks/use-count-up'
import DotsCanvas from '@/components/dots-canvas'
import { STATS } from '@/src/config/stats'

const metrics = [
  { label: 'marcas atendidas', value: STATS.marcasAtendidas, suffix: '+', sub: 'Brasil e exterior' },
  { label: 'anos de experiência', value: new Date().getFullYear() - STATS.anoFundacao, suffix: '+', sub: 'marketing e tecnologia' },
  { label: 'em faturamento gerado', value: STATS.faturamentoGerado, suffix: 'M+', sub: 'para clientes', prefix: 'R$' },
  { label: 'parceiros e certificações', value: STATS.parceiros, suffix: '+', sub: 'no ecossistema' },
]

// Items duplicados uma única vez — a animação cobre exatamente 50% da largura total,
// criando um loop perfeito sem artefato visual.
const TICKER_ITEMS = ['TRÁFEGO PAGO', 'META ADS', 'GOOGLE ADS', 'SEO', 'CRM', 'ANALYTICS', 'CRIAÇÃO', 'AUTOMAÇÃO', 'LANDING PAGES', 'IDENTIDADE VISUAL']

function TickerLine() {
  return (
    <div
      className="overflow-hidden py-3 relative"
      aria-hidden="true"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgb(92 54 235 / 0.10)',
        borderTop: '1px solid rgb(92 54 235 / 0.22)',
        borderBottom: '1px solid rgb(92 54 235 / 0.22)',
      }}
    >
      <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #1d1d1d, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #1d1d1d, transparent)' }} />

      {/* marquee-track usa a animação 'marquee' já definida em globals.css */}
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="mono-tag flex items-center gap-3"
            style={{ color: '#a08af5' }}>
            {item}
            <span className="w-1 h-1 rounded-full inline-block"
              style={{ background: 'rgb(92 54 235 / 0.7)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const { count, ref } = useCountUp(target)
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{count}{suffix}</span>
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex flex-col pt-14 overflow-hidden grid-bg min-h-[100svh]">


      {/* Grid de pontos interativos */}
      <DotsCanvas
        className="z-[1]"
        color="rgba(255,255,255,0.15)"
        dotRadius={1.2}
        spacing={30}
        repelRadius={110}
        repelStrength={7}
      />

      {/* Nuvens — imagem base */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <Image
          src="/images/hero-clouds.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
        />

        {/* Blobs esquerda — camadas empilhadas como no original */}
        <div className="absolute -left-32 -top-10 w-[450px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)' }} />
        <div className="absolute -left-32 top-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 50%, transparent 75%)' }} />
        <div className="absolute -left-16 top-40 w-96 h-96 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 72%)' }} />
        <div className="absolute left-10 top-64 w-72 h-72 rounded-full blur-xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.09) 0%, transparent 68%)' }} />

        {/* Blobs direita — espelhados */}
        <div className="absolute -right-32 -top-10 w-[450px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)' }} />
        <div className="absolute -right-32 top-24 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 50%, transparent 75%)' }} />
        <div className="absolute -right-16 top-48 w-96 h-96 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 72%)' }} />
        <div className="absolute right-10 top-72 w-72 h-72 rounded-full blur-xl"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.09) 0%, transparent 68%)' }} />

        {/* Vinheta central — preserva o fundo escuro no meio */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(13,13,13,0.72) 68%)' }} />
      </div>

      {/* Ticker no topo */}
      <div className="mt-14 relative z-10">
        <TickerLine />
      </div>

      {/* Conteúdo principal */}
      <div className="relative flex-1 flex items-center z-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 w-full py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

            {/* Coluna esquerda */}
            <div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left">
              {/* Badge de resultado */}
              <div className="inline-flex items-center">
                <Link
                  href="#clientes"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/8 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/14 transition-all duration-200 group"
                  style={{ background: 'rgb(92 54 235 / 0.08)' }}
                >
                  <span className="status-dot shrink-0" aria-hidden="true" />
                  Mais de{' '}
                  <span className="font-bold text-foreground">{STATS.faturamentoGerado} milhões</span>{' '}
                  gerados para{' '}
                  <span className="underline underline-offset-2 decoration-primary/50 font-medium">nossos clientes</span>
                  <span className="text-muted-foreground group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true">›</span>
                </Link>
              </div>

              {/* Título de apoio */}
              <p className="mono-tag text-muted-foreground/60 tracking-[0.2em]">
                Não é presença. É engenharia de resultado.
              </p>

              {/* Headline */}
              <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
                Marketing que<br />
                <span className="text-glow">escala</span> com<br />
                <span className="text-foreground">precisão.</span>
              </h1>

              {/* Descrição */}
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                Aqui não tem achismo. Operamos com método, dados e consistência,
                transformando investimento em demanda qualificada, oportunidades
                reais e crescimento previsível.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/+5511921425351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
                >
                  Iniciar projeto
                  <span aria-hidden>↗</span>
                </a>
                <Link
                  href="/solucoes"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-sm font-bold tracking-widest uppercase text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  Ver soluções
                </Link>
              </div>

            </div>

            {/* Coluna direita — painel de dados falso */}
            <div className="hidden lg:flex flex-col gap-3">

              {/* Card de status */}
              <div className="border border-glow bg-card p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="mono-tag">exemplo</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="mono-tag text-muted-foreground/50">Receita este mês</span>
                  <span className="text-3xl font-bold text-foreground stat-number">
                    R$ <AnimatedCounter target={84} />.<AnimatedCounter target={320} />
                  </span>
                </div>
                {/* Barra de progresso */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span className="mono-tag text-muted-foreground/50">Meta mensal</span>
                    <span className="mono-tag">84%</span>
                  </div>
                  <div className="h-1 bg-muted w-full">
                    <div className="h-full w-[84%] bg-primary" style={{ transition: 'width 1.5s ease' }} />
                  </div>
                </div>
              </div>

              {/* Mini cards de métricas */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'ROAS', value: '4.8x', sub: 'Google Ads' },
                  { label: 'CTR', value: '3.2%', sub: 'Meta Ads' },
                  { label: 'Conversões', value: '1.240', sub: 'este mês' },
                  { label: 'Impressões', value: '2.8M', sub: 'alcance total' },
                ].map((item) => (
                  <div key={item.label} className="border border-border bg-card p-4 flex flex-col gap-1 card-lift">
                    <span className="mono-tag text-muted-foreground/50">{item.label}</span>
                    <span className="text-xl font-bold text-foreground stat-number">{item.value}</span>
                    <span className="mono-tag text-muted-foreground/40">{item.sub}</span>
                  </div>
                ))}
              </div>

              {/* Rodapé do painel */}
              <div className="border border-border p-3 flex items-center gap-2 bg-card">
                <span className="mono-tag text-muted-foreground/50">Exemplo ilustrativo de painel de performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de métricas — full-width, mesmo nível do ticker */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgb(92 54 235 / 0.08)',
          borderTop: '1px solid rgb(92 54 235 / 0.20)',
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="flex flex-col items-center justify-center gap-2 px-10 py-10 text-center"
            style={{
              borderRight: i < metrics.length - 1 ? '1px solid rgb(92 54 235 / 0.15)' : 'none',
            }}
          >
            <span className="text-4xl sm:text-5xl font-bold text-primary stat-number leading-none">
              {m.prefix ?? ''}<AnimatedCounter target={m.value} />{m.suffix}
            </span>
            <span className="text-sm font-semibold text-foreground leading-tight">{m.label}</span>
            <span className="mono-tag text-muted-foreground/50 mt-0.5">{m.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
