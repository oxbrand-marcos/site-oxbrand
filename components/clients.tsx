'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { testimonials } from '@/src/config/testimonials'
import { YouTubeFacade } from '@/components/youtube-facade'

// 24 logos únicos — duplicados no marquee = 48 nós no DOM (antes: 106)
// Seleção baseada em reconhecimento de marca e diversidade de segmentos
const clientLogos = [
  { src: '/images/clients/bravo.webp',        alt: 'Bravo' },
  { src: '/images/clients/cia-trucks.webp',   alt: 'CIA Trucks' },
  { src: '/images/clients/brasil-fibras.webp',alt: 'Brasil Fibras' },
  { src: '/images/clients/aquarium.webp',     alt: 'Aquarium' },
  { src: '/images/clients/grupo-supply.webp', alt: 'Grupo Supply' },
  { src: '/images/clients/bauforte.webp',     alt: 'Bauforte' },
  { src: '/images/clients/oab.webp',          alt: 'OAB' },
  { src: '/images/clients/le-petrin.webp',    alt: 'Le Petrin Menswear' },
  { src: '/images/clients/injecar.webp',      alt: 'Injecar' },
  { src: '/images/clients/corum.webp',        alt: 'Corum' },
  { src: '/images/clients/decorplane.webp',   alt: 'Decorplane' },
  { src: '/images/clients/miliveste.webp',    alt: 'Miliveste' },
  { src: '/images/clients/lbel.webp',         alt: "L'Bel" },
  { src: '/images/clients/fratelli.webp',     alt: 'Fratelli' },
  { src: '/images/clients/movfrete.webp',     alt: 'Movfrete' },
  { src: '/images/clients/thermoprint.webp',  alt: 'Grupo Thermoprint' },
  { src: '/images/clients/motel-athos.webp',  alt: 'Motel Athos' },
  { src: '/images/clients/envolt.webp',       alt: 'Envolt' },
  { src: '/images/clients/pet-company.webp',  alt: 'Pet Company' },
  { src: '/images/clients/truckcenter.webp',  alt: 'Truck Center' },
  { src: '/images/clients/ncf-seguros.webp',  alt: 'NCF Seguros' },
  { src: '/images/clients/sartori.webp',      alt: 'Sartori' },
  { src: '/images/clients/power-bikes.webp',  alt: 'Power Bikes' },
  { src: '/images/clients/vanguard.webp',     alt: 'Vanguard' },
]

const clientVideos = [
  { id: 'oFTOtx3dzig', title: 'Depoimento cliente OxBrand 1', short: true },
  { id: 'gNHf86huuYs', title: 'Depoimento cliente OxBrand 2', short: true },
  { id: 'tODEyWH6HvM', title: 'Depoimento cliente OxBrand 3', short: true },
  { id: 'EbfFj4KttlY', title: 'Depoimento cliente OxBrand 4', short: true },
  { id: 'sAnFkmpsakY', title: 'Depoimento cliente OxBrand 5', short: false },
]


export function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  function scrollTo(idx: number) {
    const clamped = Math.max(0, Math.min(idx, clientVideos.length - 1))
    setActiveIdx(clamped)
    const container = scrollRef.current
    if (!container) return
    const card = container.children[clamped] as HTMLElement
    if (card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: 'smooth' })
    }
  }

  return (
    <>
    <section id="clientes" className="border-b border-border bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">

        {/* Logos */}
        <div className="flex flex-col gap-10 py-20">
          <div className="flex items-center gap-4">
            <span className="mono-tag text-white/40">
              Empresas que confiam na OxBrand
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Marquee — logos brancos sobre fundo preto */}
          <div className="overflow-hidden" aria-label="Clientes OxBrand">
            <div className="marquee-track flex items-center gap-24 w-max">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-52 sm:w-64 h-28 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
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

      </div>
    </section>

    {/* ---- Depoimentos (fundo padrão) ---- */}
    <section className="py-24 border-b border-border section-light">
      <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left">
          <div className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
            <span className="mono-tag text-muted-foreground/60">Resultados</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Quem cresceu com<br />
              a <span className="text-glow">OxBrand.</span>
            </h2>
          </div>

          {/* Vídeos verticais dos clientes com setas de navegação */}
          <div className="flex flex-col gap-4 w-full">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide"
            >
              {clientVideos.map((v) => (
                <div
                  key={v.id}
                  className="flex-none w-[220px] snap-start rounded-sm border border-border overflow-hidden"
                >
                  <YouTubeFacade
                    videoId={v.id}
                    title={v.title}
                    aspect="portrait"
                    className="rounded-sm"
                  />
                </div>
              ))}
            </div>

            {/* Controles de navegação */}
            <div className="flex items-center justify-center gap-4 sm:hidden">
              <button
                onClick={() => scrollTo(activeIdx - 1)}
                disabled={activeIdx === 0}
                aria-label="Vídeo anterior"
                className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <div className="flex items-center gap-1.5">
                {clientVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    aria-label={`Ir para vídeo ${i + 1}`}
                    aria-current={i === activeIdx ? 'true' : undefined}
                    className="group/dot grid place-items-center w-6 h-6 rounded-full transition-all"
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        i === activeIdx
                          ? 'w-4 h-1.5 bg-primary'
                          : 'w-1.5 h-1.5 bg-border group-hover/dot:bg-primary/40'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTo(activeIdx + 1)}
                disabled={activeIdx === clientVideos.length - 1}
                aria-label="Próximo vídeo"
                className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>

          {/* Depoimentos em cards */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-px bg-border w-full">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-7 flex flex-col justify-between gap-6 card-lift group items-center text-center lg:items-start lg:text-left">

                {/* Métrica em destaque */}
                <div className="flex items-center justify-center lg:justify-between w-full">
                  <div className="hidden lg:block w-5 h-px bg-border group-hover:bg-primary transition-colors mt-3" aria-hidden="true" />
                  <span className="text-2xl font-bold stat-number text-primary text-center lg:text-right">
                    {t.metric}
                  </span>
                </div>

                {/* Texto */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 text-center lg:text-left">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-border justify-center lg:justify-start w-full">
                  <div
                    className="w-8 h-8 flex items-center justify-center border border-border text-xs font-bold text-muted-foreground shrink-0"
                    aria-hidden="true"
                  >
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

        </div>
      </div>
    </section>
    </>
  )
}
