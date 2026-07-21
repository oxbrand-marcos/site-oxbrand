'use client'

import { useState } from 'react'
import { useCountUp } from '@/hooks/use-count-up'
import { testimonials } from '@/src/config/testimonials'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { faqItems } from './data'

/* ─── Counter animado ──────────────────────────────────────── */
function Counter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const { count, ref } = useCountUp(to)
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{prefix}{count}{suffix}</span>
}

/* ─── Ícones inline ─────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.076-1.118l-.292-.174-3.037.796.811-2.967-.19-.304A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 text-primary" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd"/>
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 text-muted-foreground/40" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
    </svg>
  )
}

/* ─── Logos de clientes ──────────────────────────────────────── */
const clientLogos = [
  { src: '/images/clients/truckcenter.webp', alt: 'Truck Center' },
  { src: '/images/clients/eco-maquinas.webp', alt: 'Eco Máquinas' },
  { src: '/images/clients/bravo.webp', alt: 'Bravo' },
  { src: '/images/clients/r2m.webp', alt: 'R2M' },
  { src: '/images/clients/nanotech.webp', alt: 'Nanotech' },
  { src: '/images/clients/grupo-supply.webp', alt: 'Grupo Supply' },
  { src: '/images/clients/movfrete.webp', alt: 'Movfrete' },
  { src: '/images/clients/power-bikes.webp', alt: 'Power Bikes' },
  { src: '/images/clients/smart-sense.webp', alt: 'Smart Sense' },
  { src: '/images/clients/vanguard.webp', alt: 'Vanguard' },
  { src: '/images/clients/injecar.webp', alt: 'Injecar' },
  { src: '/images/clients/ncf-seguros.webp', alt: 'NCF Seguros' },
]

/* ─── CTA flutuante ─────────────────────────────────────────── */
function CTAButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="https://wa.me/+5511921425351?text=Quero%20saber%20mais%20sobre%20o%20CRM%20Kommo"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 active:scale-[0.98] transition-all ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  )
}

/* ─── Depoimentos — consumidos de src/config/testimonials.ts ── */
// Os depoimentos de Jennifer e Chris vêm do arquivo central.
// Mary Festa é exclusiva desta página (contexto Kommo).
const kommoExtraTestimonial = {
  quote: 'Conhecemos a Ox através dos parceiros Kommo. Além da implementação comercial, tivemos a ajuda deles para colocar o nosso marketing no caminho certo da clareza.',
  name: 'Mary Festa',
  role: 'CEO · Eco Máquinas',
  logo: '/images/clients/eco-maquinas.webp',
}
const kommoTestimonials = [
  ...testimonials
    .filter((t) => t.author === 'Jennifer Soares' || t.author === 'Chris Richard')
    .map((t) => ({ quote: t.quote, name: t.author, role: t.role, logo: t.logo ?? null })),
  kommoExtraTestimonial,
]

/* ─── FAQ items — importados de ./data.ts (também usados no layout.tsx
       para gerar o schema FAQPage sem depender do bundle cliente) ──── */

/* ═══════════════════════════════════════════════════════════ */
export default function CrmKommoLP() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main>

        {/* ── 1. HERO ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-14">
          <DotsCanvas />

          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px]"
              style={{ background: 'rgb(92 54 235 / 0.12)' }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:text-left lg:items-center gap-16">

              {/* Esquerda */}
              <div className="flex flex-col items-center lg:items-start gap-8 w-full">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-primary/30 bg-primary/5">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="mono-tag">OxBrand · Parceiro Certificado Kommo · Top 5% Brasil</span>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="mono-tag text-muted-foreground/50 tracking-[0.2em]">Para quem usa WhatsApp como CRM</p>
                  <h1 className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-[0.92] tracking-tight text-balance">
                    Pare de perder{' '}
                    <span className="text-glow">vendas</span>{' '}
                    no{' '}
                    <span className="text-glow">WhatsApp.</span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Seu funil de vendas é um caos. Leads somem em conversas soltas, sua equipe alterna entre dezenas de apps e, a cada dia, oportunidades escorrem por entre os dedos.{' '}
                  <strong className="text-foreground">Em 15 dias, resolvemos isso.</strong>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 active:scale-[0.98] transition-all w-full sm:w-auto">Agendar diagnóstico grátis</Link>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-sm font-bold tracking-widest uppercase text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors w-full sm:w-auto"
                  >
                    Ver como funciona
                  </a>
                </div>

                <p className="mono-tag text-muted-foreground/40">
                  Sem compromisso. Retorno em até 2 horas em dias úteis.
                </p>
              </div>

              {/* Direita — mockup de funil (só desktop) */}
              <div className="hidden lg:flex flex-col gap-3">
                <div className="border border-border bg-card px-5 py-3 flex items-center justify-between">
                  <span className="mono-tag text-muted-foreground/50">funil de vendas · exemplo</span>
                </div>

                {[
                  { label: 'Novos Leads', count: 47, pct: 100, color: '#5c36eb' },
                  { label: 'Primeiro Contato', count: 38, pct: 81, color: 'rgb(92 54 235 / 0.85)' },
                  { label: 'Proposta Enviada', count: 22, pct: 47, color: 'rgb(92 54 235 / 0.65)' },
                  { label: 'Negociação', count: 14, pct: 30, color: 'rgb(92 54 235 / 0.5)' },
                  { label: 'Fechado', count: 9, pct: 19, color: 'rgb(92 54 235 / 0.35)' },
                ].map((stage) => (
                  <div key={stage.label} className="border border-border bg-card px-5 py-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground">{stage.label}</span>
                      <span className="mono-tag">{stage.count} leads</span>
                    </div>
                    <div className="h-1.5 bg-muted w-full">
                      <div className="h-full transition-all duration-1000" style={{ width: `${stage.pct}%`, background: stage.color }} />
                    </div>
                  </div>
                ))}

                <div className="border border-border bg-card px-5 py-3 flex items-center justify-between">
                  <span className="mono-tag text-muted-foreground/40">Taxa de conversão</span>
                  <span className="text-2xl font-bold text-primary">19.1%</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ── 2. MARQUEE DE CLIENTES ──────────────────────────── */}
          <section className="py-0 bg-background border-y border-border overflow-hidden" aria-label="Clientes que confiam na OxBrand">
          <div className="py-4 flex items-center gap-6 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #1d1d1d, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #1d1d1d, transparent)' }} />
            <div className="marquee-track flex gap-10 items-center">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="relative h-8 w-24 shrink-0 opacity-50 hover:opacity-100 transition-opacity">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. PARA QUEM É / NÃO É ──────────────────────────── */}
        <section className="py-24 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col gap-3">
              <span className="mono-tag text-zinc-400">qualificação</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                Essa solução é{' '}
                <span className="text-glow">para você?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-zinc-200">
              {/* Para quem É */}
              <div className="bg-white p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-primary" />
                  <span className="mono-tag text-zinc-500">Para quem é</span>
                </div>
                <ul className="flex flex-col gap-5">
                  {[
                    'Quem não consegue ter controle dos leads no WhatsApp',
                    'Quem tem equipe de vendas e usa planilhas ou anotações soltas',
                    'Quem não sabe quais oportunidades estão paradas no funil',
                    'Quem precisa de respostas rápidas e automáticas',
                    'Quem busca um CRM fácil de usar e implantar rapidamente',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Para quem NÃO é */}
              <div className="bg-zinc-50 p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-zinc-300" />
                  <span className="mono-tag text-zinc-400">Para quem não é</span>
                </div>
                <ul className="flex flex-col gap-5">
                  {[
                    'Empresas sem equipe comercial estruturada',
                    'Quem ainda não tem fluxo de vendas ou geração de leads',
                    'Negócios que não pretendem investir em automação',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-500 leading-relaxed">
                      <CrossIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-zinc-200">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Se você se identificou com &quot;para quem é&quot;, temos uma conversa importante a ter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. STATS ─────────────────────────────────────────── */}
        <section className="py-0 border-b border-border bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
              {[
                { label: 'implementações realizadas', to: 150, suffix: '+' },
                { label: 'Dias para operação funcionar', to: 15, suffix: '*' },
                { label: 'Empresas no Brasil com Kommo', to: 12000, suffix: '+' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2 py-10 px-4 text-center">
                  <span className="text-4xl sm:text-5xl font-bold text-primary stat-number">
                    <Counter to={s.to} suffix={s.suffix} />
                  </span>
                  <span className="text-xs text-muted-foreground/60 leading-snug">{s.label}</span>
                </div>
              ))}
              {/* Badge estático — certificação Top 5% */}
              <div className="flex flex-col items-center justify-center gap-2 py-10 px-4 text-center">
                <span className="text-lg font-bold text-primary leading-tight">Top 5%</span>
                <span className="text-xs text-muted-foreground/60 leading-snug">Parceiros certificados no Brasil</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROBLEMA ─────────────────────────────────────── */}
        <section className="py-24 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
                <span className="mono-tag text-zinc-400">a dor que você conhece</span>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-zinc-900">
                  Seu funil de vendas{' '}
                  <span className="text-glow">é um caos.</span>
                </h2>
                <div className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
                  <p>
                    Leads se perdem em conversas soltas no WhatsApp. Sua equipe gasta tempo alternando entre dezenas de aplicativos. A cada dia que passa, oportunidades de negócio escorrem por entre os dedos.
                  </p>
                  <p>
                    Sua equipe de vendas está lutando no escuro, sem clareza e sem um plano de ação real. <strong className="text-zinc-900">Isso não é um problema de equipe, é de estratégia.</strong>
                  </p>
                  <p>E é exatamente isso que resolvemos.</p>
                </div>
                <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 active:scale-[0.98] transition-all w-full sm:w-auto">Resolver agora · diagnóstico grátis</Link>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { problem: '"Vi a mensagem mas esqueci de responder"', impact: 'Lead perdido. Você nunca mais ouviu falar dele.' },
                  { problem: '"Não sei quantos leads estão parados"', impact: 'Oportunidades morrem sem que ninguém perceba.' },
                  { problem: '"Cada vendedor usa o próprio celular"', impact: 'Histórico zerado quando o vendedor sai da empresa.' },
                  { problem: '"Não temos tempo para follow-up"', impact: 'O concorrente que responde rápido fecha antes de você.' },
                ].map((item) => (
                  <div key={item.problem} className="border border-zinc-200 bg-zinc-50 p-5 flex items-start gap-4">
                    <div className="w-1 self-stretch bg-primary/30 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-zinc-800 italic">{item.problem}</p>
                      <p className="text-xs text-zinc-500">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CAIXA DE ENTRADA ─────────────────────────────── */}
        <section id="como-funciona" className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                <div className="flex flex-col gap-3">
                  <span className="mono-tag text-muted-foreground/50">oxbrand + kommo</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Todos os contatos{' '}
                    <span className="text-glow">em um só lugar.</span>
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Você deve passar por isso: contato do cliente em um celular, fornecedor em outro aparelho, contatos não salvos que sempre se perdem. Imagine todos num banco de dados seguro, confiável e centralizado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  WhatsApp, Instagram, Facebook, Telegram e LinkedIn em um único painel. Nenhuma conversa se perde, nenhum lead fica sem resposta.
                </p>
                <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                  {['WhatsApp', 'Instagram', 'Facebook', 'Telegram', 'LinkedIn', '+500 apps'].map((p) => (
                    <span key={p} className="px-3 py-1.5 border border-border bg-card text-xs font-mono text-muted-foreground/60">{p}</span>
                  ))}
                </div>
                <CTAButton className="w-full sm:w-auto">Unificar meu atendimento</CTAButton>
              </div>
              <div className="relative w-full overflow-hidden border border-border rounded-sm shadow-2xl">
                <Image
                  src="/images/solucoes/kommo-inbox-real.webp"
                  alt="Caixa de entrada unificada do Kommo CRM com atendimento por IA via WhatsApp"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6B. FUNIL PERSONALIZADO ─────────────────────────── */}
        <section className="py-24 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">
              {/* Imagem primeiro no mobile, segundo no desktop */}
              <div className="relative w-full overflow-hidden border border-zinc-200 rounded-sm shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/solucoes/kommo-funil-kanban.webp"
                  alt="Funil de vendas Kanban personalizado no Kommo CRM com cards de leads"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 order-1 lg:order-2">
                <div className="flex flex-col gap-3">
                  <span className="mono-tag text-zinc-400">funil personalizado</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                    O funil de vendas{' '}
                    <span className="text-glow">da sua empresa.</span>
                  </h2>
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  Quem é o topo do funil? Em qual etapa o seu lead está? Já mandaram o orçamento? Sem clareza sobre em qual etapa cada um está, você não consegue definir um processo robusto e escalável para suas vendas.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Chega de Kanban genérico. Nós montamos o seu funil de vendas personalizado de acordo com a sua necessidade, com as melhores práticas comerciais do mercado.
                </p>
                <CTAButton className="w-full sm:w-auto">Montar meu funil</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6C. AUTOMAÇÃO ───────────────────────────────────── */}
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                <div className="flex flex-col gap-3">
                  <span className="mono-tag text-muted-foreground/50">trabalhe no automático</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Automação{' '}
                    <span className="text-glow">sem complicação.</span>
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A Kommo tem a melhor integração do mercado.                   Não se limite a uma IA básica: configure condições inteligentes com rotinas e rotas que economizam o tempo do seu time e o mantêm focado em vender.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com as automações, tarefas repetitivas são executadas pela IA: triagem inicial, follow-ups, distribuição de leads para o consultor certo, tudo rodando enquanto sua equipe fecha negócios.
                </p>
                <CTAButton className="w-full sm:w-auto">Quero automatizar minhas vendas</CTAButton>
              </div>
              <div className="relative w-full overflow-hidden border border-border rounded-sm shadow-2xl">
                <Image
                  src="/images/solucoes/kommo-bot-builder.webp"
                  alt="Builder visual de automação no Kommo com fluxo de bot de primeiro contato"
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. METODOLOGIA ──────────────────────────────────── */}
        <section className="py-24 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:items-start">

              {/* Coluna esquerda */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:sticky lg:top-24">
                <div className="flex flex-col gap-2">
                  <span className="mono-tag text-zinc-400">nossa metodologia</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                    Em{' '}
                    <span className="text-glow">15 dias</span>
                    , sua operação funcionando.
                  </h2>
                  <p className="text-zinc-600 leading-relaxed text-sm mt-2">
                    Não &quot;instalamos&quot; um software. Entregamos uma solução comercial completa, configurada para o seu negócio, com sua equipe treinada e suas automações rodando.
                  </p>
                </div>
                <div className="relative w-full max-w-sm overflow-hidden">
                  <Image
                    src="/images/solucoes/oxbrand-kommo-partner.webp"
                    alt="Equipe OxBrand recebendo a placa de parceiro certificado Kommo"
                    width={768}
                    height={960}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CTAButton className="w-full sm:w-auto">Iniciar minha implementação</CTAButton>
              </div>

              {/* Coluna direita — steps */}
              <div className="flex flex-col">
                {[
                  { n: '01', title: 'Diagnóstico Comercial', desc: 'Analisamos o seu processo de vendas atual, o fluxo de atendimento e os pontos de perda de leads. Mapeamos onde o dinheiro está sendo deixado na mesa antes de configurar qualquer coisa.' },
                  { n: '02', title: 'Montagem do Funil Personalizado', desc: 'Nada de funil genérico. Montamos o seu pipeline de vendas de acordo com o seu processo comercial real. Etapas, nomenclaturas e fluxos desenhados especificamente para o seu negócio.' },
                  { n: '03', title: 'Integração de Canais', desc: 'Conectamos o Kommo ao seu WhatsApp Business, Instagram, Facebook e demais canais. Todos os contatos unificados em uma única caixa de entrada, sem perder nenhuma conversa.' },
                  { n: '04', title: 'Automações Inteligentes', desc: 'Configuramos bots e automações que fazem a triagem inicial, respondem dúvidas frequentes e distribuem leads para o consultor certo, sem robotizar o atendimento, economizando tempo do time.' },
                  { n: '05', title: 'Treinamento da Equipe', desc: 'Treinamos o seu time comercial para usar o Kommo com alta performance. Metodologias de comunicação, boas práticas e os atalhos que fazem diferença real no dia a dia de vendas.' },
                  { n: '06', title: 'Acompanhamento e Evolução', desc: 'Monitoramos os resultados após a implementação, ajustamos automações, criamos novos fluxos e garantimos que o sistema evolua junto com o crescimento da sua operação comercial.' },
                ].map((step, i) => (
                  <div key={step.n} className={`flex gap-6 py-8 ${i < 5 ? 'border-b border-zinc-200' : ''}`}>
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="w-9 h-9 border border-primary/40 flex items-center justify-center mono-tag text-primary shrink-0">{step.n}</span>
                      {i < 5 && <div className="w-px flex-1 bg-zinc-200 min-h-[2rem]" />}
                    </div>
                    <div className="flex flex-col gap-2 pb-2">
                      <h3 className="text-base font-bold text-zinc-900">{step.title}</h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. DEPOIMENTOS ──────────────────────────────────── */}
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-16 text-center">
              <span className="mono-tag text-muted-foreground/50">resultados reais</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Quem já{' '}
                <span className="text-glow">parou de perder vendas.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border">
              {kommoTestimonials.map((t) => (
                <div key={t.name} className="bg-background p-8 flex flex-col gap-6 card-lift">
                  <span className="text-4xl text-primary/30 font-serif leading-none" aria-hidden="true">&ldquo;</span>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.quote}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {/* Avatar com inicial — padrão único para todos os depoimentos */}
                    <div className="w-10 h-10 shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm font-bold">{t.name[0]}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        {/* Logotipo da empresa como elemento secundário, quando disponível */}
                        {t.logo && (
                          <div className="relative h-4 w-auto shrink-0">
                            <Image
                              src={t.logo}
                              alt=""
                              height={16}
                              width={48}
                              className="h-4 w-auto object-contain opacity-60"
                              unoptimized
                            />
                          </div>
                        )}
                      </div>
                      <p className="mono-tag text-muted-foreground/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. VANTAGENS ────────────────────────────────────── */}
        <section className="py-24 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">

            {/* Selo parceiro */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-10 mb-16 pb-16 border-b border-zinc-200">
              <div className="relative shrink-0 w-48">
                <Image
                  src="/images/solucoes/kommo-partner.webp"
                  alt="Kommo Partner · OxBrand é parceira certificada Kommo"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="mono-tag text-zinc-400">certificação oficial</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                    Somos parceiros{' '}
                    <span className="text-glow">certificados Kommo.</span>
                  </h2>
                </div>
                <p className="text-zinc-600 leading-relaxed max-w-2xl">
                  A OxBrand é um dos poucos parceiros certificados Kommo no Brasil, no top 5% de implementadores. Isso garante que você recebe não só o software, mas toda a estratégia comercial aplicada por quem domina a plataforma.
                </p>
                <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
                  {['Implementação Certificada', 'Suporte Especializado', '28 Dias de Cortesia', 'Top 5% Brasil'].map((badge) => (
                    <span key={badge} className="px-3 py-1.5 border border-primary/30 bg-primary/5 mono-tag text-primary/80">{badge}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-12 text-center lg:text-left">
              <span className="mono-tag text-zinc-400">com a ox, sempre entregamos mais</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                As vantagens{' '}
                <span className="text-glow">ainda não terminaram.</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-zinc-200">
              {[
                { tag: '28 dias de cortesia', title: '28 Dias de Cortesia', desc: 'Como parceiros certificados, temos um período adicional que podemos oferecer aos nossos clientes ao fazer ou renovar a assinatura conosco.' },
                { tag: 'time especialista', title: 'Time de Especialistas', desc: 'Somos certificados pela Kommo. O time que te acompanha é altamente qualificado, com treinamentos e atualizações constantes para sempre aplicar as melhores práticas.' },
                { tag: 'pagamento facilitado', title: 'Pagamento Facilitado', desc: 'Conseguimos facilitar o pagamento da sua assinatura para uma melhor comodidade e acessibilidade, para você iniciar com um passo à frente.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 flex flex-col gap-4 text-center md:text-left">
                  <span className="mono-tag text-primary/70">{item.tag}</span>
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─�� 10. CTA FINAL ───────────────────────────────────── */}
        <section className="relative py-32 overflow-hidden bg-background border-b border-border">
          <DotsCanvas color="rgba(139,92,246,0.1)" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px]"
              style={{ background: 'oklch(0.55 0.22 293 / 0.15)' }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
            <span className="mono-tag text-muted-foreground/50">próximo passo</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-balance">
              Chega de perder{' '}
              <span className="text-glow">vendas</span>{' '}
              por falta de organização.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Agende agora um diagnóstico gratuito. Em 30 minutos mostramos exatamente onde o seu funil está sangrando dinheiro e como o Kommo resolve isso em 15 dias.
            </p>
            <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-primary text-primary-foreground text-base font-bold tracking-widest uppercase hover:bg-primary/85 active:scale-[0.98] transition-all">Agendar diagnóstico gratuito</Link>
            <p className="mono-tag text-muted-foreground/40">Sem compromisso · Retorno em até 2 horas em dias úteis · +150 implementações realizadas</p>
          </div>
        </section>

        {/* ── 11. FORMULÁRIO ──────────────────────────────────── */}
        <Contact />

        {/* ── 12. FAQ ─────────────────────────────────────────── */}
        <section className="bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[360px_1fr]">

              {/* Coluna esquerda */}
              <div className="border-b lg:border-b-0 lg:border-r border-zinc-200 p-8 lg:p-14 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-col gap-1">
                  <span className="mono-tag text-zinc-400">FAQ</span>
                  <h2 className="text-3xl font-bold text-zinc-900 leading-tight">
                    Dúvidas<br />
                    <span className="text-glow">comuns.</span>
                  </h2>
                </div>

                <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col gap-4 w-full max-w-sm lg:max-w-none">
                  <div className="w-10 h-10 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center mx-auto lg:mx-0">
                    <span className="text-[#25D366]"><WhatsAppIcon /></span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Quer falar com o comercial e tirar dúvidas?</p>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                      A gente responde, orienta e mostra o melhor caminho para a sua operação crescer no digital com clareza e previsibilidade.
                    </p>
                  </div>
                  <CTAButton className="w-full">Falar com especialistas</CTAButton>
                  <p className="mono-tag text-primary/60">Chame no WhatsApp e resolva em poucos minutos</p>
                </div>
              </div>

              {/* Accordion */}
              <div className="flex flex-col divide-y divide-zinc-200 py-8 lg:py-14 px-6 lg:px-14">
                {faqItems.map((item, i) => (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                      aria-expanded={openFaq === i}
                    >
                      <div className="flex items-start gap-4">
                        <span className="mono-tag text-primary/50 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                        <span className={`text-sm font-semibold leading-snug transition-colors ${openFaq === i ? 'text-primary' : 'text-zinc-800 group-hover:text-primary'}`}>
                          {item.q}
                        </span>
                      </div>
                      <span className="text-primary shrink-0 text-lg leading-none ml-2" aria-hidden="true">
                        {openFaq === i ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="pb-6 pl-9 text-zinc-600 leading-relaxed text-sm">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
