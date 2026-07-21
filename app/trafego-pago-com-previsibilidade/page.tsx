import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LpContactForm } from './lp-contact-form'
import { testimonials } from '@/src/config/testimonials'

export const metadata: Metadata = {
  title: 'Tráfego Pago com Previsibilidade Financeira | OxBrand',
  description: 'Pare de torcer e comece a lucrar. Na OxBrand, validamos os 5 pilares fundamentais antes de colocar qualquer campanha no ar. Escalamos o seu negócio com base em dados reais.',
  robots: { index: false, follow: false },
}

const WA_LINK = 'https://wa.me/5511942191351?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito'

const diferenciais = [
  { title: 'Metodologia Baseada em Dados', desc: 'Chega de "tentativa e erro". Analisamos o seu cenário antes de investir cada centavo do seu orçamento.' },
  { title: 'Foco Total em ROI e LTV', desc: 'Otimizamos suas campanhas para o lucro real no bolso, não apenas para curtidas ou visualizações de anúncios.' },
  { title: 'Previsibilidade de Escala', desc: 'Saiba exatamente quanto custa o seu lead e o quanto você precisa investir para bater suas metas de faturamento.' },
  { title: 'Transparência e Relatórios Claros', desc: 'Acompanhe o desempenho de forma simples e direta, sem termos técnicos que escondem a falta de resultado.' },
  { title: 'Parceiro Top 5% Brasil', desc: 'Você terá a expertise de uma das agências mais bem avaliadas do país na implementação de processos comerciais.' },
  { title: 'Gestão Consultiva de Negócios', desc: 'Atuamos como um braço estratégico da sua empresa, focando na viabilidade financeira do projeto.' },
  { title: 'Validação Antecipada de Pilares', desc: 'Validamos público, oferta e criativo antes de buscar escala, garantindo segurança ao seu investimento.' },
]

const pilares = [
  { sigla: 'ICP', nome: 'Ideal Customer Profile', desc: 'Sabemos exatamente com quem estamos falando. Sem segmentação precisa, não há conversão.' },
  { sigla: 'ROI', nome: 'Meta de ROI', desc: 'Definimos qual é o retorno mínimo necessário para a conta fechar e o seu lucro aparecer.' },
  { sigla: 'CVR', nome: 'Taxa de Conversão', desc: 'Analisamos se a sua página e o seu time de vendas estão realmente prontos para converter leads em clientes.' },
  { sigla: 'CPL', nome: 'Custo por Lead', desc: 'Monitoramos o custo máximo que podemos pagar sem comprometer a sua margem de lucro.' },
  { sigla: 'COM', nome: 'Comercial', desc: 'Garantimos que sua estrutura comercial suporte o volume de leads que vamos gerar.' },
]

const parceiros = [
  { nome: 'ActiveCampaign Platinum', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/ActiveCampaign_Logo.svg/320px-ActiveCampaign_Logo.svg.png' },
  { nome: 'Adobe Solution Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/320px-Adobe_Corporate_Logo.png' },
  { nome: 'Bing Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bing_logo_2016.svg/320px-Bing_logo_2016.svg.png' },
  { nome: 'ClickUp Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Clickup_logo.svg/320px-Clickup_logo.svg.png' },
  { nome: 'Google Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png' },
  { nome: 'Kommo Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/240px-Instagram_icon.png' },
]

const paraQuem = [
  'Empresas que já investem mas não veem clareza no retorno.',
  'Negócios que precisam de um braço estratégico e tecnológico (CTO e Direção Estratégica).',
  'Empresários que cansaram de "testar" e querem começar a lucrar de verdade.',
]

export default function TrafegoPrevisibilidadePage() {
  return (
    <main className="min-h-screen bg-background font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative grid-bg overflow-hidden">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgb(92 54 235 / 0.12), transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Esquerda — copy */}
            <div className="flex flex-col gap-8">
              {/* logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative shrink-0">
                  <Image src="/icon.svg" alt="OxBrand" fill className="object-contain" />
                </div>
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">OxBrand</span>
              </div>

              <div className="flex flex-col gap-5">
                <span className="mono-tag text-primary/70">Tráfego Pago com Previsibilidade Financeira</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground text-balance">
                  Pare de torcer e comece a{' '}
                  <span className="text-glow">lucrar.</span>
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                  Na OxBrand, não trabalhamos com a sorte. Validamos os <strong className="text-foreground">5 pilares fundamentais</strong> antes de colocar qualquer campanha no ar. Escalamos o seu negócio com base em dados reais e retorno sobre investimento.
                </p>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-6 py-4 w-fit"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Agendar Diagnóstico Gratuito
              </a>

              <p className="text-xs text-muted-foreground/50 font-mono">é grátis mesmo, só clicar e pedir.</p>

              {/* breadcrumb */}
              <div className="hidden lg:flex items-center gap-2 border-t border-border pt-5">
                <span className="mono-tag text-muted-foreground/40">OxBrand</span>
                <span className="text-border">·</span>
                <span className="mono-tag text-muted-foreground/40">Tráfego Pago com Previsibilidade Financeira</span>
              </div>
            </div>

            {/* Direita — formulário */}
            <div className="bg-card border border-border p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="mono-tag text-primary/60">Formulário de contato</span>
                <p className="text-sm text-muted-foreground">Preencha e entraremos em contato em até 1 hora útil.</p>
              </div>

              <LpContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ──────────────────────────────────────────────── */}
      <section className="section-light grid-bg py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-3 mb-12 text-center">
            <span className="mono-tag">Parceiros estratégicos para o seu negócio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-balance">
              O que nos diferencia de quem apenas{' '}
              <span className="text-primary">&ldquo;vende cliques&rdquo;</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed">
              Muitos prometem volume, nós entregamos uma base sólida para a sua escala financeira.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-zinc-200">
            {diferenciais.map((d, i) => (
              <div key={d.title} className="flex items-start gap-5 py-5 group">
                <span className="mono-tag text-zinc-400 w-6 shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-zinc-900">{d.title}:</span>{' '}
                  <span className="text-sm text-zinc-600">{d.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ──────────────────────────────────────────────────── */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '200+', label: 'empresas atendidas ao redor do mundo' },
              { num: '8+ anos', label: 'de experiência em marketing digital' },
              { num: 'R$ 50M+', label: 'de faturamento gerado aos nossos clientes' },
              { num: '150+', label: 'parceiros estratégicos para nossos clientes' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span className="text-3xl sm:text-4xl font-bold stat-number">{m.num}</span>
                <span className="text-xs text-white/70 font-mono uppercase tracking-wider leading-relaxed">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 PILARES ─────────────────────────────────────────────────── */}
      <section className="py-20 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-3 mb-12 text-center">
            <span className="mono-tag text-primary/60">A Metodologia: Os 5 Pilares da OxBrand</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Antes de ir para a tela,{' '}
              <span className="text-glow">os números precisam bater no papel.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Para garantir que o seu investimento não seja &ldquo;torcida&rdquo;, nossa estratégia é fundamentada em:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pilares.map((p, i) => (
              <div
                key={p.sigla}
                className={`bg-card border border-border p-7 flex flex-col gap-4 card-lift ${i === 3 ? 'lg:col-span-1' : ''} ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-12 h-12 border border-primary/30 bg-primary/10 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-primary">{p.sigla}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-foreground">{p.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCEIROS ─────────────────────────────────────────────────── */}
      <section className="section-light border-y border-zinc-200 py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="mono-tag text-primary/70">Parceiros estratégicos</span>
          <h2 className="text-2xl font-bold text-zinc-900 mt-2">Rede de parceiros, tecnologias e certificações</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-16 marquee-track w-max">
            {[...parceiros, ...parceiros].map((p, i) => (
              <div key={i} className="flex items-center gap-3 px-4 shrink-0">
                <div className="h-8 w-28 relative opacity-60 hover:opacity-100 transition-opacity">
                  <Image src={p.logo} alt={p.nome} fill className="object-contain" unoptimized />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ─────────────────────────────────────────── */}
      <section className="py-20 grid-bg border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Muitos vendem cliques. Nós entregamos{' '}
                <span className="text-glow">previsibilidade financeira.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Se os números não batem no papel, a campanha não vai para a tela.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-6 py-5"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Agendar Diagnóstico Gratuito
              </a>
              <p className="text-xs text-muted-foreground/40 font-mono text-center">via whatsapp mesmo, fácil e prático</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ───────────────────────────────────────────────── */}
      <section className="section-light py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-3 mb-12 text-center">
            <span className="mono-tag text-primary/70">Nossos clientes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-balance">O coração da nossa estratégia</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Na OxBrand, nossos clientes são o coração do nosso negócio. Trabalhamos lado a lado para construir estratégias de marketing personalizadas que atendem às suas necessidades e superam suas expectativas.
            </p>
          </div>

          {/* Depoimentos longos — consumidos de src/config/testimonials.ts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {testimonials.map((d) => (
              <div key={d.author} className="bg-white border border-zinc-200 p-7 flex flex-col gap-5">
                <span className="mono-tag text-primary/70">{d.segment}</span>
                <p className="text-sm text-zinc-600 leading-relaxed flex-1">{d.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center shrink-0">
                    <span className="font-bold text-white text-xs">{d.author[0]}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-zinc-900 text-sm">{d.author}</span>
                    <span className="mono-tag text-zinc-400">{d.company.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cards de resultado — 3 últimos (estilo das imagens) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                resultado: '#1 no segmento',
                texto: 'Nossa presença digital saiu do zero para referência no segmento. O time tem visão de produto, não só de campanha. Parceria de verdade.',
                cliente: 'Roberto Alves',
                empresa: 'GAMMATECH · TECNOLOGIA',
              },
              {
                resultado: '+3x leads',
                texto: 'A OxBrand triplicou nossos leads em menos de 90 dias. O acompanhamento semanal faz toda a diferença, você sente que o time está comprometido com o seu crescimento.',
                cliente: 'Marcos Lima',
                empresa: 'ALPHASTORE · E-COMMERCE',
              },
              {
                resultado: '1º mês positivo',
                texto: 'Contratei esperando mais uma agência comum. Encontrei um time que entende de negócio. ROI positivo já no primeiro mês e escalando desde então.',
                cliente: 'Juliana Costa',
                empresa: 'BETACLINIC · SAÚDE',
              },
            ].map((d) => (
              <div key={d.cliente} className="bg-white border border-zinc-200 p-7 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="w-8 border-t-2 border-zinc-200 mb-3" />
                  <span className="text-2xl font-bold text-primary">{d.resultado}</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed italic flex-1">&ldquo;{d.texto}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <div className="w-8 h-8 bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="font-bold text-zinc-600 text-xs">{d.cliente[0]}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-zinc-900 text-sm">{d.cliente}</span>
                    <span className="mono-tag text-zinc-400">{d.empresa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-8 py-4"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Agendar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ───────────────────────────────────────────────── */}
      <section className="py-20 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Esquerda — visual */}
            <div className="hidden lg:flex flex-col gap-6">
              <div className="border border-border bg-card p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="status-dot" />
                  <span className="mono-tag text-primary/60">Sistema ativo</span>
                </div>
                <div className="font-mono text-xs text-muted-foreground/50 leading-6">
                  <span className="text-primary/60">{'>'}</span> validando ICP...<br />
                  <span className="text-primary/60">{'>'}</span> calculando meta ROI...<br />
                  <span className="text-primary/60">{'>'}</span> analisando taxa de conversão...<br />
                  <span className="text-primary/60">{'>'}</span> definindo CPL máximo...<br />
                  <span className="text-primary/60">{'>'}</span> estruturando comercial...<br />
                  <span className="text-green-400">{'>'}</span> <span className="text-green-400">pilares validados. prontos para escalar.</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Meta Ads', 'Google Ads', 'LinkedIn Ads'].map((p) => (
                  <div key={p} className="border border-border bg-card px-4 py-3 text-center">
                    <span className="mono-tag text-muted-foreground/50">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direita — lista */}
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <span className="mono-tag text-primary/60">Ideal para empresas que buscam escala real.</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  Para quem é a OxBrand?
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {paraQuem.map((item) => (
                  <div key={item} className="flex items-start gap-4 border-b border-border pb-4">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                Quer parar de testar e começar a escalar? Agende um diagnóstico com o nosso time técnico. Vamos estruturar a sua base antes de apertar o botão de escala.
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-6 py-4"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Agendar Diagnóstico Gratuito
              </a>
              <p className="text-xs text-muted-foreground/40 font-mono text-center">
                Junte-se a mais de 450 marcas atendidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RODAPÉ MÍNIMO ─────────────────────────────────────────────── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 relative shrink-0">
              <Image src="/icon.svg" alt="OxBrand" fill className="object-contain" />
            </div>
            <span className="mono-tag text-muted-foreground/50">OxBrand Marketing de Performance</span>
          </div>
          <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-primary transition-colors">
            Conhecer o site completo ↗
          </Link>
        </div>
      </footer>

    </main>
  )
}
