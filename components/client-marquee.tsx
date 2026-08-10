import Image from 'next/image'
import { CLIENT_LOGOS } from '@/src/config/clients'

export function ClientMarquee() {
  return (
    <section className="border-b border-border bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="mono-tag text-white/40">Empresas que confiam na OxBrand</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="overflow-hidden" aria-label="Clientes OxBrand">
          <div className="marquee-track flex items-center gap-20 w-max">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-48 sm:w-60 h-28 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={120}
                  loading="lazy"
                  unoptimized
                  className="h-20 sm:h-24 w-auto max-w-full object-contain"
                  sizes="300px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
