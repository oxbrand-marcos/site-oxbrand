import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { testimonials } from '@/src/config/testimonials'
import { LpTrafegoMogiForm } from './lp-trafego-mogi-form'

const URL = 'https://www.oxbrand.com.br/trafego-pago-mogi-das-cruzes'
const TITLE = 'Agência de Tráfego Pago em Mogi das Cruzes | OxBrand'
const DESC =
  'Agência de tráfego pago em Mogi das Cruzes: Google Ads e Meta Ads ligados ao CRM, com custo por lead e receita na mesma tela. +R$ 258M gerados. Análise gratuita.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'OxBrand',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: 'https://www.oxbrand.com.br/og-home.jpg', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://www.oxbrand.com.br/og-home.jpg'],
    site: '@oxbrand_br',
  },
}

const WA_LINK =
  'https://wa.me/5511921425351?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20tr%C3%A1fego%20pago%20em%20Mogi%20das%20Cruzes%20e%20quero%20uma%20an%C3%A1lise%20das%20minhas%20campanhas.'

const plataformas = [
  {
    titulo: 'Google Ads',
    desc: 'Pesquisa, Performance Max, Display e YouTube. Aparecer no momento em que alguém de Mogi ou região digita exatamente o que você vende.',
  },
  {
    titulo: 'Meta Ads',
    desc: 'Instagram e Facebook para gerar demanda onde ela ainda não existe, com público, criativo e oferta testados em ciclo curto.',
  },
  {
    titulo: 'Rastreio ponta a ponta',
    desc: 'GTM, GA4, Conversões API e CRM conectados. Cada lead carrega a campanha que o gerou até a venda fechada.',
  },
  {
    titulo: 'CRM Kommo integrado',
    desc: 'O lead cai no funil com origem marcada e o comercial responde no WhatsApp. Somos Top 5% dos parceiros Kommo no Brasil.',
  },
]

const etapas = [
  {
    num: '01',
    titulo: 'Leitura da conta',
    desc: 'Auditoria do que já roda: estrutura, termos de pesquisa, criativos, conversões duplicadas e verba queimada em busca de marca.',
  },
  {
    num: '02',
    titulo: 'Rastreio antes de verba',
    desc: 'Nenhum real novo entra antes de a medição estar de pé. Sem isso, otimizar é chute com nome bonito.',
  },
  {
    num: '03',
    titulo: 'Estrutura por intenção',
    desc: 'Campanhas separadas por estágio de decisão, não por plataforma. Quem busca "orçamento" não recebe a mesma mensagem de quem busca "o que é".',
  },
  {
    num: '04',
    titulo: 'Ciclo semanal',
    desc: 'Leitura toda semana, com corte do que não paga e realocação para o que paga. Relatório mostra receita, não impressão.',
  },
  {
    num: '05',
    titulo: 'Ligação com o comercial',
    desc: 'Tempo de resposta, taxa de contato e motivo de perda voltam para dentro da campanha. Mídia sem comercial é vazamento.',
  },
]

const faqs = [
  {
    q: 'Qual a melhor agência de tráfego pago em Mogi das Cruzes?',
    a: 'Não existe melhor no absoluto, existe melhor para o seu estágio. O critério honesto é simples: peça para a agência mostrar como ela liga o anúncio à venda fechada. Se o relatório termina em cliques, impressões e custo por clique, ela mede o próprio trabalho, não o seu resultado. A OxBrand entrega custo por lead, taxa de conversão do comercial e receita atribuída na mesma tela, e a análise inicial é gratuita para você comparar com quem quiser.',
  },
  {
    q: 'Quanto custa contratar gestão de tráfego pago em Mogi das Cruzes?',
    a: 'São dois valores separados e é importante não confundir: a verba de mídia, que vai direto para o Google e a Meta, e o honorário da gestão. A verba depende do seu ticket e do volume de busca do seu segmento na região. O honorário acompanha o tamanho da operação. Quem responde com um número fixo antes de olhar a sua conta está chutando. Na análise gratuita a gente chega no número da sua realidade.',
  },
  {
    q: 'Qual é o custo por 1.000 pessoas alcançadas?',
    a: 'Esse é o CPM, e no Brasil ele varia muito por segmento, formato e disputa: é comum ficar entre poucos reais e algumas dezenas de reais por mil impressões. Mas CPM barato não significa campanha boa. Dá para comprar alcance baratíssimo de gente que nunca vai comprar. O que importa é o custo por lead qualificado e o custo de aquisição de cliente, e é por isso que a gente não vende otimização de CPM.',
  },
  {
    q: 'Qual o melhor lugar para fazer tráfego pago?',
    a: 'Depende de a demanda já existir ou não. Se as pessoas já procuram o que você vende, Google Ads na pesquisa costuma trazer o lead mais barato e mais pronto. Se a demanda precisa ser criada, Meta Ads no Instagram e no Facebook faz melhor esse trabalho. A maioria das empresas da região precisa dos dois, com pesos diferentes. Definir esse peso é a primeira decisão da estratégia, não um detalhe de execução.',
  },
  {
    q: 'Qual o investimento mínimo em mídia para começar?',
    a: 'Abaixo de um certo volume o algoritmo não sai da fase de aprendizado e a conta nunca estabiliza. Na prática, campanha com verba muito curta gera dado insuficiente para decidir qualquer coisa. Preferimos dizer na análise se o seu momento comporta mídia paga ou se o dinheiro rende mais em outra frente, mesmo quando isso significa não fechar contrato agora.',
  },
  {
    q: 'Em quanto tempo o tráfego pago começa a dar resultado?',
    a: 'Os primeiros leads costumam aparecer na primeira ou segunda semana. Estabilidade de custo por lead leva de 30 a 60 dias, porque é o tempo de sair do aprendizado e de acumular dado suficiente. Receita atribuída depende do seu ciclo de venda, e mapear esse ciclo é a primeira coisa que fazemos, justamente para não prometer prazo que não existe.',
  },
  {
    q: 'Vocês atendem só Mogi das Cruzes?',
    a: 'A sede é em Mogi das Cruzes, no Helbor Concept, e atendemos todo o Alto Tietê: Suzano, Itaquaquecetuba, Poá, Ferraz de Vasconcelos, Arujá, Guararema e Santa Isabel. Também operamos contas nacionais e em 6 países. A vantagem para a empresa da região é reunião presencial quando fizer diferença.',
  },
  {
    q: 'Preciso trocar meu site para anunciar?',
    a: 'Nem sempre, mas vale saber a verdade: site lento ou sem rastreio faz você pagar caro por um lead que se perde no caminho. Na leitura da conta a gente mede a página de destino e diz se ela sustenta a verba. Se não sustentar, o ajuste de página vem antes de aumentar investimento, não depois.',
  },
]

const servicoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#servico`,
  name: 'Gestão de tráfego pago em Mogi das Cruzes',
  alternateName: ['Agência de tráfego pago em Mogi das Cruzes', 'Gestor de tráfego em Mogi das Cruzes'],
  serviceType: 'Gestão de tráfego pago',
  description:
    'Gestão de campanhas no Google Ads e no Meta Ads para empresas de Mogi das Cruzes e do Alto Tietê, com rastreio ponta a ponta e integração com o CRM.',
  url: URL,
  provider: {
    '@type': 'ProfessionalService',
    name: 'OxBrand, Tecnologia e Marketing',
    url: 'https://www.oxbrand.com.br/',
    telephone: '+5511921425351',
    email: 'contato@oxbrand.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Ver. Narciso Yague Guimarães, 1145, Sala 1303',
      addressLocality: 'Mogi das Cruzes',
      addressRegion: 'SP',
      postalCode: '08780-500',
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: -23.5208, longitude: -46.1854 },
    sameAs: ['https://www.instagram.com/oxbrand.br'],
  },
  areaServed: [
    { '@type': 'City', name: 'Mogi das Cruzes' },
    { '@type': 'City', name: 'Suzano' },
    { '@type': 'City', name: 'Itaquaquecetuba' },
    { '@type': 'City', name: 'Poá' },
    { '@type': 'City', name: 'Ferraz de Vasconcelos' },
    { '@type': 'City', name: 'Arujá' },
    { '@type': 'City', name: 'Guararema' },
    { '@type': 'City', name: 'Santa Isabel' },
  ],
  offers: {
    '@type': 'Offer',
    description: 'Análise gratuita das campanhas de tráfego pago',
    price: '0',
    priceCurrency: 'BRL',
    url: 'https://www.oxbrand.com.br/diagnostico',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.oxbrand.com.br/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Agência de Marketing Digital em Mogi das Cruzes',
      item: 'https://www.oxbrand.com.br/agencia-de-marketing-digital-mogi-das-cruzes',
    },
    { '@type': 'ListItem', position: 3, name: 'Tráfego Pago em Mogi das Cruzes', item: URL },
  ],
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

export default function TrafegoPagoMogiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      <main className="min-h-screen bg-background font-sans">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative grid-bg overflow-hidden pt-14">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgb(92 54 235 / 0.13), transparent)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <div className="flex flex-col gap-8">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                  <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                    OxBrand
                  </Link>
                  <span className="mono-tag text-muted-foreground/20" aria-hidden="true">/</span>
                  <Link
                    href="/agencia-de-marketing-digital-mogi-das-cruzes"
                    className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors"
                  >
                    Mogi das Cruzes
                  </Link>
                  <span className="mono-tag text-muted-foreground/20" aria-hidden="true">/</span>
                  <span className="mono-tag text-primary/70">Tráfego Pago</span>
                </nav>

                <div className="flex flex-col gap-5">
                  <span className="mono-tag text-primary/70">Google Ads e Meta Ads · Mogi das Cruzes</span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground text-balance">
                    Agência de Tráfego Pago em{' '}
                    <span className="text-glow">Mogi das Cruzes</span>
                  </h1>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                    A maioria das contas da região não tem problema de verba, tem problema de leitura. Roda anúncio, gera clique, e ninguém sabe dizer qual campanha virou venda. A gente liga a mídia ao CRM e ao seu comercial, para você decidir com número em vez de achismo.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/diagnostico"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-6 py-4"
                  >
                    Analisar minhas campanhas
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

              <div className="bg-card border border-border p-8 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="mono-tag text-primary/60">Análise gratuita</span>
                  <h2 className="text-base font-bold text-foreground leading-snug">
                    Nosso time de mídia abre sua conta e mostra onde a verba está vazando.
                  </h2>
                  <p className="text-sm text-muted-foreground">Resposta em até 1 hora útil.</p>
                </div>
                <LpTrafegoMogiForm />
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
                { num: '+16 anos', label: 'de experiência, sede em Mogi das Cruzes' },
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

        {/* ── O PROBLEMA ───────────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <span className="mono-tag text-primary/70">Por que a conta não anda</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  Tráfego pago não morre por{' '}
                  <span className="text-glow">falta de verba.</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Morre por falta de ligação. O anúncio roda em um lugar, o lead cai em outro, o comercial responde em um terceiro, e no fim do mês ninguém consegue dizer qual campanha pagou a conta. Aí a decisão vira opinião, e opinião custa caro quando o clique é pago.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quando a OxBrand entra numa conta de Mogi das Cruzes, a primeira coisa que fazemos não é subir campanha nova. É abrir o que já existe e medir: quanto da verba foi para busca de marca que você já ganharia de graça, quantas conversões estão contadas duas vezes, quanto tempo o comercial leva para responder o lead. Só depois disso é que mexer no anúncio faz diferença.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Atendemos <strong className="text-foreground">Mogi das Cruzes, Suzano, Itaquaquecetuba, Poá, Ferraz de Vasconcelos, Arujá, Guararema, Santa Isabel</strong> e toda a região do Alto Tietê.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Google Partner', src: '/images/partners/google.webp' },
                  { label: 'Meta Business Partner', src: '/images/partners/meta.webp' },
                  { label: 'Kommo Top 5% Brasil', src: '/images/partners/kommo.webp' },
                  { label: 'ActiveCampaign Platinum', src: '/images/partners/activecampaign.webp' },
                ].map((p) => (
                  <div key={p.label} className="bg-card border border-border p-5 flex flex-col gap-3">
                    <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center p-1.5 shrink-0">
                      <Image src={p.src} alt={p.label} width={40} height={40} unoptimized className="w-full h-full object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── O QUE ENTRA ──────────────────────────────────────────── */}
        <section className="section-light grid-bg py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <span className="mono-tag">O que entra na gestão</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-balance">
                Mídia, rastreio e CRM{' '}
                <span className="text-primary">como um sistema só</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {plataformas.map((p, i) => (
                <div key={p.titulo} className="bg-white border border-zinc-200 p-7 flex flex-col gap-4">
                  <span className="mono-tag text-zinc-400">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold text-zinc-900">{p.titulo}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                href="/solucoes/gestao-de-trafego-pago"
                className="text-sm text-zinc-600 hover:text-primary transition-colors underline underline-offset-4"
              >
                Ver a metodologia completa de gestão de tráfego
              </Link>
              <span className="text-zinc-300" aria-hidden="true">·</span>
              <Link
                href="/solucoes/crm-kommo"
                className="text-sm text-zinc-600 hover:text-primary transition-colors underline underline-offset-4"
              >
                Como funciona a integração com o CRM Kommo
              </Link>
            </div>
          </div>
        </section>

        {/* ── COMO TRABALHAMOS ─────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-3 mb-12 text-center">
              <span className="mono-tag text-primary/60">OX Growth Engineering</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Cinco etapas, na ordem que{' '}
                <span className="text-glow">evita desperdício.</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                A ordem importa mais que a lista. Quase toda conta que recebemos tinha as etapas certas na sequência errada.
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

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-px bg-border w-full">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-background p-7 flex flex-col justify-between gap-6 card-lift group items-center text-center lg:items-start lg:text-left">
                  <div className="flex items-center justify-center lg:justify-between w-full">
                    <div className="hidden lg:block w-5 h-px bg-border group-hover:bg-primary transition-colors mt-3" aria-hidden="true" />
                    <span className="text-2xl font-bold stat-number text-primary text-center lg:text-right">
                      {t.metric}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 text-center lg:text-left">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border justify-center lg:justify-start w-full">
                    <div className="w-8 h-8 flex items-center justify-center border border-border text-xs font-bold text-muted-foreground shrink-0" aria-hidden="true">
                      {t.author.charAt(0)}
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-xs font-semibold text-foreground">{t.author}</p>
                      <p className="mono-tag text-muted-foreground/50">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/nossos-clientes"
                className="text-sm text-zinc-600 hover:text-primary transition-colors underline underline-offset-4"
              >
                Ver os cases com os números completos
              </Link>
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
                  <h3 className="font-bold text-foreground">Faz sentido para você se:</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Já investe em Google Ads ou Meta Ads e não sabe dizer qual campanha virou venda.',
                    'O custo por lead subiu e ninguém soube explicar por quê.',
                    'Tem volume de lead, mas o comercial reclama da qualidade.',
                    'Quer escalar a verba com controle, não no escuro.',
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
                  <h3 className="font-bold text-foreground">Não faz sentido se:</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Ainda não validou a oferta e quer usar mídia para descobrir o que vender.',
                    'Não tem quem responda o lead no mesmo dia.',
                    'Espera retorno na primeira semana. Preferimos dizer isso agora a te decepcionar depois.',
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
                Dúvidas sobre tráfego pago em Mogi das Cruzes
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

        {/* ── ENDEREÇO ─────────────────────────────────────────────── */}
        <section className="py-20 grid-bg border-b border-border" aria-label="Localização">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <span className="mono-tag text-primary/70">Nossa sede em Mogi das Cruzes</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
                  Agência daqui, com padrão de conta nacional.
                </h2>
                <address className="not-italic flex flex-col gap-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">OxBrand, Tecnologia e Marketing</p>
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
                  <Link
                    href="/agencia-de-marketing-digital-mogi-das-cruzes"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Conhecer a agência de marketing digital em Mogi das Cruzes
                  </Link>
                </div>
              </div>

              <div className="aspect-video border border-border overflow-hidden">
                <iframe
                  title="Localização OxBrand, Mogi das Cruzes"
                  src="https://maps.google.com/maps?q=Av.%20Ver.%20Narciso%20Yague%20Guimar%C3%A3es%2C%201145%20-%20Socorro%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008780-500&output=embed"
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
            <span className="mono-tag text-primary/60">Análise gratuita</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight">
              Quer saber onde sua verba está vazando?
              <br />
              <span className="text-glow">A gente abre a conta com você.</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
              Nosso time de mídia analisa suas campanhas de Google Ads e Meta Ads e devolve o que está pagando, o que está queimando verba e o que fazer primeiro. Sem compromisso, sem pressão.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/diagnostico"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-wider uppercase text-sm px-8 py-5"
              >
                Analisar minhas campanhas
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
              <a href="tel:+5511921425351" className="hover:text-foreground transition-colors">(11) 9 2142-5351</a>
              {' · '}
              <a href="mailto:contato@oxbrand.com.br" className="hover:text-foreground transition-colors">contato@oxbrand.com.br</a>
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
