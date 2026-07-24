import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { testimonials } from '@/src/config/testimonials'
import { LpMogiForm } from './lp-mogi-form'

export const metadata: Metadata = {
  title: 'Agência de Marketing Digital em Mogi das Cruzes | OxBrand',
  description:
    'Agência de marketing digital em Mogi das Cruzes com método próprio: tráfego pago, CRM e sites que convertem. +450 marcas atendidas. Diagnóstico gratuito.',
  alternates: {
    canonical: 'https://www.oxbrand.com.br/agencia-de-marketing-digital-mogi-das-cruzes',
  },
  openGraph: {
    title: 'Agência de Marketing Digital em Mogi das Cruzes | OxBrand',
    description:
      'Agência de marketing digital em Mogi das Cruzes com método próprio: tráfego pago, CRM e sites que convertem. +450 marcas atendidas. Diagnóstico gratuito.',
    url: 'https://www.oxbrand.com.br/agencia-de-marketing-digital-mogi-das-cruzes',
    type: 'website',
  },
}

const WA_LINK =
  'https://wa.me/5511921425351?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20da%20OxBrand%20em%20Mogi%20das%20Cruzes.'

const servicos = [
  {
    titulo: 'Gestão de Tráfego Pago',
    desc: 'Campanhas no Google Ads e Meta Ads por intenção, para sua empresa aparecer para quem já está procurando em Mogi e região.',
    href: '/solucoes/gestao-de-trafego-pago',
  },
  {
    titulo: 'CRM de Vendas (Kommo)',
    desc: 'Funil estruturado e WhatsApp integrado, para nenhum lead da região se perder no caminho. Somos Top 5% dos parceiros Kommo no Brasil.',
    href: '/solucoes/crm-kommo',
  },
  {
    titulo: 'Assessoria de Marketing',
    desc: 'Direção estratégica e rotina de execução para quem quer clareza, não mais tarefas.',
    href: '/solucoes/assessoria-em-marketing',
  },
  {
    titulo: 'Sites e Landing Pages',
    desc: 'Rápidos, com rastreio desde o primeiro acesso. Site que não converte é despesa.',
    href: '/solucoes/desenvolvimento-de-sites',
  },
  {
    titulo: 'Conteúdo e SEO',
    desc: 'Para sua empresa ser encontrada em Mogi das Cruzes sem depender só de verba de anúncio.',
    href: '/blog',
  },
]

const etapas = [
  { num: '01', titulo: 'Direção Estratégica', desc: 'Diagnóstico do negócio, do público e do mercado local.' },
  { num: '02', titulo: 'Estrutura de Demanda', desc: 'Como sua empresa gera interesse qualificado na região.' },
  { num: '03', titulo: 'Estrutura de Decisão', desc: 'Mensagem, prova e confiança para transformar interesse em oportunidade.' },
  { num: '04', titulo: 'Estrutura de Resultado', desc: 'Campanhas, funis e CRM conectados ao seu comercial.' },
  { num: '05', titulo: 'Otimização Contínua', desc: 'Análise semanal, com indicadores e metas claras.' },
]

const faqs = [
  {
    q: 'Quanto custa uma agência de marketing digital em Mogi das Cruzes?',
    a: 'Depende do escopo e do estágio do negócio. Por isso a porta de entrada é um diagnóstico gratuito: analisamos sua operação e devolvemos um plano com investimento recomendado — sem compromisso e sem pressão comercial.',
  },
  {
    q: 'A OxBrand atende só Mogi das Cruzes?',
    a: 'Não. A sede é em Mogi, mas atendemos todo o Alto Tietê, o Brasil e clientes em 6 países. A vantagem para empresas da região é a proximidade: reuniões presenciais quando fizer sentido.',
  },
  {
    q: 'Posso visitar o escritório?',
    a: 'Sim. Estamos na Av. Ver. Narciso Yague Guimarães, 1.145 — Sala 1303, Edifício Helbor Concept (Torre Office), Mogi das Cruzes. Agende pelo WhatsApp.',
  },
  {
    q: 'Em quanto tempo vejo resultado?',
    a: 'Tráfego pago tende a gerar sinais nas primeiras semanas; SEO e conteúdo, de 3 a 6 meses. O que garante o resultado não é promessa — é estrutura, mensuração e otimização semanal.',
  },
  {
    q: 'Que tipo de empresa vocês atendem na região?',
    a: 'Construção civil e imobiliário, clínicas e saúde, indústria e B2B, educação, serviços de alto ticket e e-commerce — os segmentos onde nosso método já foi validado.',
  },
  {
    q: 'Qual a diferença entre a OxBrand e outras agências de marketing em Mogi?',
    a: 'Método e integração. Enquanto vendem execução, entregamos direção: estratégia, tráfego, CRM e comercial funcionando como um sistema único, com reuniões objetivas e indicadores claros.',
  },
]

// Schema JSON-LD — LocalBusiness + FAQPage
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OxBrand - Tecnologia e Marketing',
  description:
    'Agência de marketing digital em Mogi das Cruzes: tráfego pago, CRM Kommo, assessoria de marketing, sites e SEO.',
  url: 'https://www.oxbrand.com.br/agencia-de-marketing-digital-mogi-das-cruzes',
  telephone: '+5511921425351',
  email: 'gestao@oxbrand.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Ver. Narciso Yague Guimarães, 1145, Sala 1303',
    addressLocality: 'Mogi das Cruzes',
    addressRegion: 'SP',
    postalCode: '08780-500',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5208,
    longitude: -46.1854,
  },
  areaServed: [
    'Mogi das Cruzes',
    'Suzano',
    'Itaquaquecetuba',
    'Poá',
    'Ferraz de Vasconcelos',
    'Arujá',
    'Guararema',
    'Alto Tietê',
  ],
  sameAs: ['https://www.instagram.com/oxbrand.br'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function LpMogiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-background font-sans">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative grid-bg overflow-hidden pt-14">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 20% 50%, rgb(92 54 235 / 0.13), transparent)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Esquerda — copy */}
              <div className="flex flex-col gap-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                  <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                    OxBrand
                  </Link>
                  <span className="mono-tag text-muted-foreground/20" aria-hidden="true">/</span>
                  <span className="mono-tag text-primary/70">Mogi das Cruzes</span>
                </nav>

                <div className="flex flex-col gap-5">
                  <span className="mono-tag text-primary/70">Agência de Marketing Digital · Mogi das Cruzes</span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground text-balance">
                    Agência de Marketing Digital em{' '}
                    <span className="text-glow">Mogi das Cruzes</span>
                  </h1>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                    Marketing não é presença. É estrutura de crescimento. A OxBrand nasceu em Mogi das Cruzes, atende o Brasil e o exterior — e opera a poucos minutos da sua empresa, com método, dados e um time de especialistas por frente.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/diagnostico"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-6 py-4"
                  >
                    Agendar Diagnóstico Gratuito
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-primary/60 hover:text-primary transition-colors font-bold tracking-wider uppercase text-sm px-6 py-4"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Direita — formulário */}
              <div className="bg-card border border-border p-8 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="mono-tag text-primary/60">Diagnóstico gratuito</span>
                  <h2 className="text-base font-bold text-foreground leading-snug">
                    Preencha e nossos especialistas preparam uma análise 360 da sua empresa.
                  </h2>
                  <p className="text-sm text-muted-foreground">Resposta em até 1 hora útil.</p>
                </div>
                <LpMogiForm />
              </div>

            </div>
          </div>
        </section>

        {/* ── BARRA DE NÚMEROS ─────────────────────────────────────── */}
        <section className="bg-primary py-12" aria-label="Resultados da OxBrand">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
                { num: '+R$ 258M', label: 'em faturamento gerado para clientes' },
                { num: '+450', label: 'marcas atendidas no Brasil e em 6 países' },
                { num: '+16 anos', label: 'de experiência — sede em Mogi das Cruzes' },
                { num: 'Top 5%', label: 'parceiros Kommo no Brasil' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col gap-2">
                  <span className="text-3xl sm:text-4xl font-bold stat-number">{m.num}</span>
                  <span className="text-xs text-white/70 font-mono uppercase tracking-wider leading-relaxed">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE ────────────────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <span className="mono-tag text-primary/70">Uma agência de Mogi das Cruzes</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  Com padrão de mercado{' '}
                  <span className="text-glow">nacional</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A maioria das empresas de Mogi das Cruzes e do Alto Tietê enfrenta o mesmo dilema: a agência local que não tem método, ou a agência de São Paulo que não tem tempo para você. A OxBrand existe para eliminar essa escolha.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nossa sede fica na Av. Ver. Narciso Yague Guimarães, no Helbor Concept — dá para tomar um café e olhar a operação de perto. Mas o método é o mesmo que aplicamos em projetos nos Estados Unidos e na Europa: o OX Growth Engineering, validado em mais de 450 marcas.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Atendemos <strong className="text-foreground">Mogi das Cruzes, Suzano, Itaquaquecetuba, Poá, Ferraz de Vasconcelos, Arujá, Guararema, Santa Isabel</strong> e toda a região — além de projetos nacionais e internacionais.
                </p>
              </div>

              {/* Partners */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Google Partner', icon: 'G' },
                  { label: 'Meta Business Partner', icon: 'M' },
                  { label: 'Kommo Top 5% Brasil', icon: 'K' },
                  { label: 'ActiveCampaign Platinum', icon: 'AC' },
                ].map((p) => (
                  <div key={p.label} className="bg-card border border-border p-5 flex flex-col gap-3">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-primary">{p.icon}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS ─────────────────────────────────────────────── */}
        <section className="section-light grid-bg py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <span className="mono-tag">O que fazemos por empresas da região</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-balance">
                Soluções integradas para{' '}
                <span className="text-primary">crescer com direção</span>
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-zinc-200">
              {servicos.map((s, i) => (
                <Link
                  key={s.titulo}
                  href={s.href}
                  className="flex items-start gap-5 py-6 group hover:bg-white/50 transition-colors px-2 -mx-2"
                >
                  <span className="mono-tag text-zinc-400 w-6 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#5c36eb] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-zinc-900 group-hover:text-[#5c36eb] transition-colors">
                      {s.titulo}
                    </span>
                    <span className="text-sm text-zinc-500 ml-2">{s.desc}</span>
                  </div>
                  <span className="text-zinc-300 group-hover:text-[#5c36eb] transition-colors text-lg shrink-0" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── METODOLOGIA ──────────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <span className="mono-tag text-primary/60">OX Growth Engineering</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Como trabalhamos:{' '}
                <span className="text-glow">70% estratégia, 30% execução de elite.</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                Não vendemos pacote. Operamos um sistema.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {etapas.map((e, i) => (
                <div
                  key={e.num}
                  className={`bg-card border border-border p-7 flex flex-col gap-4 card-lift ${
                    i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="w-12 h-12 border border-primary/30 bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-primary">{e.num}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-foreground">{e.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ──────────────────────────────────────────── */}
        <section className="section-light py-20 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <span className="mono-tag text-primary/70">Quem cresceu com a OxBrand</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-balance">
                Resultados reais de parceiros reais
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((t) => (
                <div key={t.author} className="bg-white border border-zinc-200 p-7 flex flex-col gap-5">
                  <span className="mono-tag text-[#5c36eb]/80">{t.segment}</span>
                  <p className="text-sm text-zinc-600 leading-relaxed flex-1 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                    <div className="w-8 h-8 bg-[#5c36eb] flex items-center justify-center shrink-0">
                      <span className="font-bold text-white text-xs">{t.author[0]}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-zinc-900 text-sm">{t.author}</span>
                      <span className="mono-tag text-zinc-400">{t.company.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUEM É ──────────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground">Essa página é para você se:</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Sua empresa está em Mogi ou região e já investe em marketing sem retorno claro.',
                    'Depende de indicação e quer previsibilidade.',
                    'Já performa e quer escalar com controle.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary font-bold mt-0.5 shrink-0" aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-800 border border-border flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground">Não é para você se:</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Ainda não validou sua oferta.',
                    'Não tem estrutura para atender os leads.',
                    'Espera resultado na primeira semana. Preferimos dizer isso agora a te decepcionar depois.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-muted-foreground/40 font-bold mt-0.5 shrink-0" aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-light py-20 border-b border-zinc-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <span className="mono-tag">Perguntas frequentes</span>
              <h2 className="text-3xl font-bold text-zinc-900 text-balance">
                Dúvidas sobre agência de marketing em Mogi das Cruzes
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-zinc-200">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="font-bold text-zinc-900 mb-3 text-balance">{f.q}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAPA + ENDEREÇO ──────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border" aria-label="Localização">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <span className="mono-tag text-primary/70">Nossa sede em Mogi das Cruzes</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
                  Vizinhos da sua empresa — e de todas as oportunidades da região.
                </h2>
                <address className="not-italic flex flex-col gap-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">OxBrand — Tecnologia e Marketing</p>
                  <p>Av. Ver. Narciso Yague Guimarães, 1.145, Sala 1303</p>
                  <p>Edifício Helbor Concept (Torre Office)</p>
                  <p>Mogi das Cruzes/SP · CEP 08780-500</p>
                </address>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="tel:+5511921425351" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (11) 9 2142-5351
                  </a>
                  <a href="mailto:gestao@oxbrand.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    gestao@oxbrand.com.br
                  </a>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="aspect-video border border-border overflow-hidden">
                <iframe
                  title="Localização OxBrand — Mogi das Cruzes"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3!2d-46.1854!3d-23.5208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzE0LjkiUyA0NsKwMTEnMDcuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────────── */}
        <section className="py-24 grid-bg">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
            <span className="mono-tag text-primary/60">Diagnóstico gratuito</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight">
              Pronto para crescer com direção?
              <br />
              <span className="text-glow">Agende agora — é gratuito.</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
              Nossos especialistas analisam sua operação digital e devolvem um diagnóstico completo de como aumentar sua visibilidade no digital. Sem compromisso, sem pressão.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/diagnostico"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-8 py-5"
              >
                Agendar Diagnóstico Gratuito
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground hover:border-primary/60 hover:text-primary transition-colors font-bold tracking-wider uppercase text-sm px-8 py-5"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp
              </a>
            </div>
            <p className="text-xs text-muted-foreground/40 font-mono">
              (11) 9 2142-5351 · gestao@oxbrand.com.br
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
