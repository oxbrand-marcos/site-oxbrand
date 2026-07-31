import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { YouTubeFacade } from '@/components/youtube-facade'
import { ClientMarquee } from '@/components/client-marquee'
import { pageOg } from '@/lib/og'
import { jsonLd, breadcrumbSchema } from '@/lib/jsonld'

const VIDEO_ID = 'oFTOtx3dzig'

export const metadata: Metadata = {
  title: 'Case LBEL Telhas: de R$ 0 a R$ 23 mi em 48 meses | OxBrand',
  description:
    'Como a OxBrand levou a LBEL Telhas de R$ 0 a R$ 23 milhões em 48 meses com site, CRM, social e tráfego para WhatsApp. ROAS 54,12.',
  ...pageOg({
    title: 'Case LBEL Telhas: de R$ 0 a R$ 23 milhões em 48 meses',
    description:
      'Site, CRM, social media e tráfego para WhatsApp (ROAS 54,12, ROI 12,27). O case da LBEL Telhas com a OxBrand.',
    path: '/nossos-clientes/lbel-telhas',
    subtitle: 'Case de sucesso',
  }),
  alternates: { canonical: '/nossos-clientes/lbel-telhas' },
}

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Depoimento LBEL Telhas: Case OxBrand',
  description:
    'Bruno Remonti, da LBEL Telhas, conta o case com a OxBrand: de R$ 0 a R$ 23 milhões em 48 meses, com site, CRM, social media e tráfego para WhatsApp (ROAS 54,12, ROI 12,27).',
  thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
  uploadDate: '2026-02-25T09:00:00-03:00',
  duration: 'PT1M32S',
  embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
  contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
}

const bullets = [
  'Marketing administrado do absoluto zero até os 23 milhões de faturamento nos últimos 48 meses contabilizados.',
  'Branding robusto, como se a empresa tivesse muito mais tempo de vida. Comunicação e oferta alinhadas ao objetivo da marca.',
  'ROAS (Retorno sobre os Anúncios) de 54,12 e um ROI (Retorno sobre o investimento) de 12,27 com base nos últimos 24 meses em campanhas de tráfego direto gerados para o WhatsApp.',
  'Treinamento e direcionamento do time comercial com técnicas e automações para acelerar o atendimento, reduzir tempo de resposta e aumentar a conversão, aliado ao uso correto do CRM.',
]

const stats = [
  { value: 'R$ 23 mi', label: 'faturamento em 48 meses (do zero)' },
  { value: '54,12', label: 'ROAS, campanhas p/ WhatsApp (24 meses)' },
  { value: '12,27', label: 'ROI, retorno sobre investimento (24 meses)' },
  { value: '48 meses', label: 'de parceria contínua' },
]

const areas = [
  {
    tag: 'Site',
    img: '/nossos-clientes/lbel/site.png',
    alt: 'Mockup do site da LBEL Telhas desenvolvido pela OxBrand',
    href: '/solucoes/desenvolvimento-de-sites',
    text: 'Plataforma construída para converter autoridade em oportunidades. Arquitetura de informação que educa o visitante sobre o problema e posiciona a solução antes do primeiro contato, reduzindo objeções e aumentando a taxa de conversão orgânica.',
  },
  {
    tag: 'CRM',
    img: '/nossos-clientes/lbel/crm.png',
    alt: 'CRM da LBEL Telhas integrado ao processo comercial',
    href: '/solucoes/crm-kommo',
    text: 'Estrutura de gestão de relacionamento integrada ao processo comercial. Automações que aceleram o atendimento, reduzem o tempo de resposta e garantem que nenhuma oportunidade se perca no funil. Dados organizados para decisão, não só para registro.',
  },
  {
    tag: 'Social Media',
    img: '/nossos-clientes/lbel/social-media.png',
    alt: 'Social media da LBEL Telhas com consistência de branding',
    href: '/solucoes',
    text: 'Presença digital construída com consistência de branding e conteúdo de autoridade. A comunicação visual e textual foi alinhada ao posicionamento da marca, gerando reconhecimento e confiança como se a empresa tivesse muito mais tempo de estrada.',
  },
  {
    tag: 'Campanhas Ads',
    img: '/nossos-clientes/lbel/campanha-ads.png',
    alt: 'Campanhas de tráfego pago da LBEL Telhas para WhatsApp',
    href: '/solucoes/gestao-de-trafego-pago',
    text: 'Tráfego direto para WhatsApp com ROAS de 54,12 e ROI de 12,27 nos últimos 24 meses. Campanhas estruturadas com segmentação precisa, oferta alinhada ao objetivo da marca e otimização contínua baseada em dados reais, não em achismo.',
  },
]

export default function LbelTelhasCase() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(videoSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: 'OxBrand', url: '/' },
              { name: 'Clientes', url: '/nossos-clientes' },
              { name: 'LBEL Telhas', url: '/nossos-clientes/lbel-telhas' },
            ])
          ),
        }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-14 overflow-hidden grid-bg border-b border-border">
        <DotsCanvas className="z-[1]" color="rgba(255,255,255,0.15)" dotRadius={1.2} spacing={30} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <nav className="mono-tag text-muted-foreground/60">
              <Link href="/nossos-clientes" className="hover:text-foreground transition-colors">Clientes</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">LBEL Telhas</span>
            </nav>
            <span className="mono-tag text-primary/70">Case de sucesso · Construção civil</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              LBEL Telhas: de R$ 0 a R$ 23 milhões em 48 meses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              De R$ 0 a R$ 23 milhões de faturamento em 48 meses, com marketing tratado como engenharia, não como arte.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
              <span className="mono-tag text-muted-foreground/50">O cliente:</span>
              <a href="https://lbeltelhas.com.br/" target="_blank" rel="noopener noreferrer" className="mono-tag text-muted-foreground/70 hover:text-primary transition-colors">Site &#8599;</a>
              <a href="https://www.instagram.com/lbeltelhas/" target="_blank" rel="noopener noreferrer" className="mono-tag text-muted-foreground/70 hover:text-primary transition-colors">Instagram &#8599;</a>
              <a href="https://www.facebook.com/LBELTELHAS" target="_blank" rel="noopener noreferrer" className="mono-tag text-muted-foreground/70 hover:text-primary transition-colors">Facebook &#8599;</a>
              <a href="https://www.linkedin.com/company/lbeltelhas/" target="_blank" rel="noopener noreferrer" className="mono-tag text-muted-foreground/70 hover:text-primary transition-colors">LinkedIn &#8599;</a>
            </div>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 items-start">
            <div className="w-full max-w-[340px] mx-auto lg:mx-0">
              <YouTubeFacade
                videoId={VIDEO_ID}
                poster="/images/depoimentos/lbel-telhas.webp"
                title="Bruno Remonti, da LBEL Telhas, em depoimento sobre o case com a OxBrand"
                aspect="portrait"
                priority
                className="rounded-xl border border-border"
              />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground">&ldquo;Vocês fazem parte do nosso time desde o primeiro dia.&rdquo;</span>{' '}
                Bruno Remonti, LBEL Telhas.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 border border-border bg-card/30 p-4">
                  <span className="text-primary mt-0.5 shrink-0">✔</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Faixa inferior roxa */}
        <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-center sm:justify-between gap-4">
          <span className="mono-tag text-primary-foreground/80">Case de sucesso · LBEL Telhas</span>
          <span className="hidden sm:block mono-tag text-primary-foreground/50">OxBrand | Case de sucesso</span>
        </div>
      </section>

      <ClientMarquee />

      {/* Números */}
      <section className="py-16 border-b border-border section-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl sm:text-4xl font-bold text-primary">{s.value}</span>
                <span className="mono-tag text-black/50 leading-relaxed">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-20 border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
            <span className="mono-tag text-black/40">O que fizemos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Áreas que transformamos na LBEL</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((a) => (
              <div key={a.tag} className="flex flex-col border border-zinc-200 overflow-hidden">
                <div className="relative w-full aspect-square bg-zinc-100">
                  <Image src={a.img} alt={a.alt} fill loading="lazy" sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="mono-tag text-primary/70">{a.tag}</span>
                  <p className="text-sm text-black/70 leading-relaxed">{a.text}</p>
                  <Link href={a.href} className="mono-tag text-black/50 hover:text-primary transition-colors w-fit">
                    Ver a solução &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-black/60 leading-relaxed">
            A LBEL Telhas é um case de{' '}
            <Link href="/marketing-para-industria" className="text-primary hover:underline">marketing para construção civil</Link>: nichos técnicos, ticket alto e ciclo de decisão longo, onde estrutura e dado valem mais que criatividade solta.
          </p>
        </div>
      </section>

      {/* Resumo do depoimento (para SEO) */}
      <section className="py-16 border-b border-border section-light">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
          <span className="mono-tag text-black/40">Resumo do depoimento</span>
          <p className="text-black/70 leading-relaxed">
            No vídeo, Bruno Remonti, da LBEL Telhas, resume a parceria com a OxBrand: um marketing construído do zero que levou a empresa a R$ 23 milhões de faturamento em 48 meses. Ele destaca o site como base de autoridade, o CRM organizando o comercial, o social media dando peso de marca e as campanhas de tráfego para o WhatsApp entregando ROAS de 54,12 e ROI de 12,27 nos últimos 24 meses. A frase que resume a relação: &ldquo;Vocês fazem parte do nosso time desde o primeiro dia.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-b border-border section-light">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6 items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Quer um resultado como este?</h2>
          <p className="text-black/60 leading-relaxed">
            A OxBrand estrutura aquisição com previsibilidade para marcas de todo o Brasil. Comece por um diagnóstico gratuito.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/diagnostico" className="px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">
              Diagnóstico gratuito
            </Link>
            <Link href="/nossos-clientes" className="px-6 py-3 border border-black/20 text-black text-xs font-bold tracking-widest uppercase hover:bg-black/5 transition-colors">
              Ver todos os cases
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/nossos-clientes" className="mono-tag text-muted-foreground/60 hover:text-primary transition-colors">
          &larr; Ver todos os cases
        </Link>
      </div>

      <Footer />
    </main>
  )
}
