import Link from 'next/link'
import Image from 'next/image'
import { YouTubeFacade } from '@/components/youtube-facade'

const stats = [
  { value: 'R$ 23 mi', label: 'faturamento em 48 meses, do zero' },
  { value: '54,12', label: 'ROAS em campanhas para WhatsApp' },
  { value: '12,27', label: 'ROI nos últimos 24 meses' },
]

export function FeaturedCase() {
  return (
    <section className="py-24 border-b border-border bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="mono-tag text-white/40">Case em destaque</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-px bg-border items-stretch">
          {/* Conteúdo */}
          <div className="bg-background p-8 sm:p-12 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-28 h-12 shrink-0">
                  <Image
                    src="/images/clients/lbel.webp"
                    alt="L'Bel Telhas"
                    width={200}
                    height={80}
                    unoptimized
                    className="h-10 w-auto max-w-full object-contain brightness-0 invert"
                  />
                </div>
                <span className="mono-tag text-muted-foreground/50">Construção civil</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                De R$ 0 a R$ 23 milhões
                <br />
                em 48 meses.
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                Marketing administrado do absoluto zero: site, CRM, social media e tráfego
                direto para o WhatsApp. Não é presença. É engenharia de resultado.
              </p>
            </div>

            {/* Números */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background sm:pr-6 py-4 flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-bold stat-number text-primary">
                    {s.value}
                  </span>
                  <span className="text-xs text-muted-foreground leading-snug">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Depoimento + CTA */}
            <div className="flex flex-col gap-6 pt-2">
              <blockquote className="text-lg text-foreground/90 leading-relaxed border-l-2 border-primary pl-4">
                &ldquo;Vocês fazem parte do nosso time desde o primeiro dia.&rdquo;
                <span className="block mt-2 mono-tag text-muted-foreground/50">
                  Bruno Remonti, LBEL Telhas
                </span>
              </blockquote>

              <Link
                href="/nossos-clientes/lbel-telhas"
                className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
              >
                Ver o case completo
                <span aria-hidden="true">&#8599;</span>
              </Link>
            </div>
          </div>

          {/* Vídeo de depoimento */}
          <div className="bg-background relative min-h-[420px]">
            <YouTubeFacade
              videoId="oFTOtx3dzig"
              poster="/images/depoimentos/lbel-telhas.webp"
              title="Bruno Remonti, da LBEL Telhas, em depoimento sobre o case com a OxBrand"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
