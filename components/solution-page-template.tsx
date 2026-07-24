'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { Contact } from '@/components/contact'
import { FAQ } from '@/components/faq'
import { serviceSchema, breadcrumbSchema, faqPageSchema, jsonLd } from '@/lib/jsonld'

/* ─── Ícones ─────────────────────────────────────────────── */

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

/* ─── Marquee de clientes ────────────────────────────────── */

const BASE = '/images/wp/clients'

const clientLogos = [
  { src: `${BASE}/aerobrasil.webp`,        alt: 'AeroBrasil' },
  { src: `${BASE}/aquarium.webp`,          alt: 'Aquarium' },
  { src: `${BASE}/bauforte.webp`,          alt: 'Bauforte' },
  { src: `${BASE}/brasil-fibras.webp`,     alt: 'Brasil Fibras' },
  { src: `${BASE}/bravo.webp`,             alt: 'Bravo' },
  { src: `${BASE}/cia-do-caminhao.webp`,   alt: 'CIA do Caminhão' },
  { src: `${BASE}/cia-trucks.webp`,        alt: 'CIA Trucks' },
  { src: `${BASE}/corum.webp`,             alt: 'Corum' },
  { src: `${BASE}/decorplane.webp`,        alt: 'Decorplane' },
  { src: `${BASE}/dna-colchoes.webp`,      alt: 'DNA Colchões' },
  { src: `${BASE}/envolt.webp`,            alt: 'Envolt' },
  { src: `${BASE}/fratelli.webp`,          alt: 'Fratelli' },
  { src: `${BASE}/grupo-thermoprint.webp`, alt: 'Grupo Thermoprint' },
  { src: `${BASE}/injecar.webp`,           alt: 'Injecar' },
  { src: `${BASE}/le-petrin.webp`,         alt: 'Le Petrin' },
  { src: `${BASE}/lbel.webp`,              alt: "L'Bel" },
  { src: `${BASE}/miliveste.webp`,         alt: 'Miliveste' },
  { src: `${BASE}/motel-athos.webp`,       alt: 'Motel Athos' },
  { src: `${BASE}/movfrete.webp`,          alt: 'Movfrete' },
  { src: `${BASE}/ncf-seguros.webp`,       alt: 'NCF Seguros' },
  { src: `${BASE}/new-cia.webp`,           alt: 'New CIA' },
  { src: `${BASE}/pet-company.webp`,       alt: 'Pet Company' },
  { src: `${BASE}/qualisan.webp`,          alt: 'Qualisan' },
  { src: `${BASE}/r2m.webp`,               alt: 'R2M' },
  { src: `${BASE}/sartori.webp`,           alt: 'Sartori' },
  { src: `${BASE}/truckcenter.webp`,       alt: 'Truck Center' },
  { src: `${BASE}/vanguard.webp`,          alt: 'Vanguard' },
  { src: `${BASE}/grupo-supply.webp`,      alt: 'Grupo Supply' },
  { src: `${BASE}/smart-sense.webp`,       alt: 'Smart Sense' },
  { src: `${BASE}/power-bikes.webp`,       alt: 'Power Bikes' },
]

/* ─── Parceiros certificados ─────────────────────────────── */

const partnerLogos = [
  { src: '/images/partners/google.webp',         alt: 'Google Partner' },
  { src: '/images/partners/meta.webp',            alt: 'Meta Business Partner' },
  { src: '/images/partners/linkedin.webp',        alt: 'LinkedIn Marketing Partner' },
  { src: '/images/partners/tiktok.webp',          alt: 'TikTok Marketing Partners' },
  { src: '/images/partners/rd.webp',              alt: 'RD Station' },
  { src: '/images/partners/kommo.webp',           alt: 'Kommo Partner Top 5%' },
  { src: '/images/partners/semrush.webp',         alt: 'SEMrush Certified Agency' },
  { src: '/images/partners/activecampaign.webp',  alt: 'ActiveCampaign Platinum Agency' },
  { src: '/images/partners/adobe.webp',           alt: 'Adobe Solution Partner' },
  { src: '/images/partners/nuvemshop.webp',       alt: 'Nuvemshop Partners' },
  { src: '/images/partners/clickup.webp',         alt: 'ClickUp Partner' },
  { src: '/images/partners/pinterest.webp',       alt: 'Pinterest Marketing Partners' },
  { src: '/images/partners/umbler.webp',          alt: 'Umbler Prime Agência Parceira' },
]



/* ─── Tipos ──────────────────────────────────────────────── */

export interface SolutionStep {
  number: string
  title: string
  description: string
}

export interface SolutionFeature {
  title: string
  description: string
}

export interface SolutionPageProps {
  breadcrumb: string
  slug?: string
  metaDescription?: string
  tag: string
  headline: string
  headlineHighlight?: string
  subheadline: string
  intro: string
  introTitle?: string
  steps?: SolutionStep[]
  stepsImage?: string
  stepsAlt?: string
  features?: SolutionFeature[]
  ctaLabel?: string
  ctaHeading?: string
  audience?: {
    isFor: string[]
    isNotFor: string[]
  }
  faqItems?: { q: string; a: string }[]
}

/* ─── Template principal ─────────────────────────────────── */

export function SolutionPageTemplate({
  breadcrumb,
  slug,
  metaDescription,
  tag,
  headline,
  headlineHighlight,
  subheadline,
  intro,
  introTitle,
  steps,
  stepsImage,
  stepsAlt,
  features,
  ctaLabel = 'Fale com os nossos especialistas',
  ctaHeading,
  audience,
  faqItems,
}: SolutionPageProps) {
  const pageSlug = slug ?? breadcrumb.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const pageUrl = `/solucoes/${pageSlug}`
  const pageDesc = metaDescription ?? `${breadcrumb} · serviço da OxBrand, agência de marketing de performance.`

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(serviceSchema({
            name: breadcrumb,
            description: pageDesc,
            url: pageUrl,
            serviceType: breadcrumb,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'OxBrand', url: '/' },
            { name: 'Soluções', url: '/solucoes' },
            { name: breadcrumb, url: pageUrl },
          ])),
        }}
      />
      {faqItems && faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(faqItems)) }}
        />
      )}
      <Header />

      {/* ── Hero escuro ────────────────────────────────── */}
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
          <div className="absolute -right-32 -top-10 w-[450px] h-[400px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)' }} />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(13,13,13,0.72) 68%)' }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center py-28 px-6">
          <div className="max-w-5xl flex flex-col items-center text-center gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OxBrand</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/solucoes" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">Soluções</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">{breadcrumb}</span>
            </nav>

            <span className="mono-tag text-primary/50 uppercase tracking-widest">{tag}</span>

            <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-foreground text-balance">
              {headline}
              {headlineHighlight && (
                <> <span className="text-glow">{headlineHighlight}</span></>
              )}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              {subheadline}
            </p>

            <div className="flex flex-col items-center gap-3">
              <Link
                href="/diagnostico"
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/85 transition-colors"
              >
                {ctaLabel}
              </Link>
              <span className="text-xs text-muted-foreground/40">
                agende um <span className="text-primary/60">diagnóstico</span> grátis
              </span>
            </div>
          </div>
        </div>

        {/* Faixa inferior roxa com nome da página */}
        <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-center sm:justify-between gap-4">
          <span className="mono-tag text-primary-foreground/80">{breadcrumb}</span>
          <span className="hidden sm:block mono-tag text-primary-foreground/50">OxBrand | {breadcrumb}</span>
        </div>
      </section>

      {/* ── Marquee de clientes ─────────────────────────── */}
      <section className="border-b border-border bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="mono-tag text-white/40">Empresas que confiam na OxBrand</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="overflow-hidden" aria-label="Clientes OxBrand">
            <div className="marquee-track flex items-center gap-20 w-max">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex items-center justify-center w-48 sm:w-60 h-28 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={120}
                    loading="lazy"
                    className="h-20 sm:h-24 w-auto max-w-full object-contain brightness-0 invert"
                    sizes="300px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + (opcional) parceiros certificados ──── */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-start">
            <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
              {introTitle && <span className="mono-tag text-primary/60">{introTitle}</span>}
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight text-balance">
                {ctaHeading ?? 'Transforme sua estratégia em resultados reais e escaláveis, com uma equipe de especialistas dedicada ao seu negócio.'}
              </h2>
              <p className="text-zinc-700 text-base leading-relaxed">{intro}</p>
              <Link
                href="/diagnostico"
                className="w-full sm:w-fit flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/85 transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Parceiros certificados */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <span className="mono-tag text-zinc-400">Parceiros Certificados</span>
              <div
                className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-zinc-200"
                aria-label="Parceiros certificados OxBrand"
              >
                {partnerLogos.map((p) => (
                  <div
                    key={p.alt}
                    className="bg-white flex items-center justify-center p-5 aspect-[3/2]"
                    title={p.alt}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={120}
                      height={60}
                      loading="lazy"
                      className="h-10 w-auto object-contain"
                      sizes="(max-width: 640px) 25vw, 120px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Para quem é / Para quem não é ──────────────── */}
      {audience && (
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2">
              <span className="mono-tag text-zinc-400">Essa solução é para você?</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Antes de falar com a gente, confira se faz sentido.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-zinc-200">
              {/* Para quem É */}
              <div className="bg-white p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-primary" />
                  <span className="mono-tag text-zinc-500">Para quem é</span>
                </div>
                <ul className="flex flex-col gap-5">
                  {audience.isFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
                      <svg className="mt-0.5 w-4 h-4 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
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
                  {audience.isNotFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-500 leading-relaxed">
                      <svg className="mt-0.5 w-4 h-4 shrink-0 text-zinc-400" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
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
      )}

      {/* ── Metodologia / Steps ─────────────────────────── */}
      {steps && steps.length > 0 && (
        <section className="py-20 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-zinc-400">Metodologia</span>
              <h2 className="text-3xl font-bold text-zinc-900 mt-2">Como trabalhamos</h2>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-[380px_1fr] gap-12 lg:items-start">
              {/* Imagem dos 4 passos */}
              {stepsImage ? (
                <div className="relative w-full overflow-hidden rounded-sm">
                  <Image
                    src={stepsImage}
                    alt={stepsAlt ?? 'Método OxBrand · etapas do processo'}
                    width={380}
                    height={420}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
              ) : (
                <div className="lg:sticky lg:top-24 flex flex-col gap-6 bg-white border border-zinc-200 p-8">
                  <span className="mono-tag text-primary/60">Nosso método</span>
                  <p className="text-4xl font-bold text-zinc-900">{steps.length} Passos</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Metodologia que funciona de verdade, com base em diversos cases de sucesso que executamos.
                  </p>
                  <div className="w-8 h-px bg-primary" aria-hidden="true" />
                </div>
              )}

              {/* Lista de steps */}
              <div className="flex flex-col divide-y divide-zinc-200 border-t border-zinc-200">
                {steps.map((step) => (
                  <div key={step.number} className="py-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="shrink-0 flex flex-col gap-1 sm:w-[200px]">
                      <span className="mono-tag text-primary/60">{step.number}</span>
                      <h3 className="text-sm font-semibold text-zinc-900 leading-snug">{step.title}</h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed text-sm flex-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Features grid ───────────────────────────────── */}
      {features && features.length > 0 && (
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-zinc-400">O que entregamos</span>
              <h2 className="text-3xl font-bold text-zinc-900 mt-2">Escopo do serviço</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 flex flex-col gap-3">
                  <span className="mono-tag text-primary/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-semibold text-zinc-900 leading-snug">{feature.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contato + Formulário ─────────────────────────── */}
      <Contact />

      {/* ── FAQ ─────────────────────────────────────────── */}
      <FAQ questions={faqItems} />

      <Footer />
    </main>
  )
}
