import Image from 'next/image'

const BASE = '/images/wp/clients'

const clientLogos = [
  { src: `${BASE}/aerobrasil.webp`, alt: 'AeroBrasil' },
  { src: `${BASE}/aquarium.webp`, alt: 'Aquarium' },
  { src: `${BASE}/bauforte.webp`, alt: 'Bauforte' },
  { src: `${BASE}/brasil-fibras.webp`, alt: 'Brasil Fibras' },
  { src: `${BASE}/bravo.webp`, alt: 'Bravo' },
  { src: `${BASE}/cia-do-caminhao.webp`, alt: 'CIA do Caminhão' },
  { src: `${BASE}/cia-trucks.webp`, alt: 'CIA Trucks' },
  { src: `${BASE}/corum.webp`, alt: 'Corum' },
  { src: `${BASE}/decorplane.webp`, alt: 'Decorplane' },
  { src: `${BASE}/dna-colchoes.webp`, alt: 'DNA Colchões' },
  { src: `${BASE}/envolt.webp`, alt: 'Envolt' },
  { src: `${BASE}/fratelli.webp`, alt: 'Fratelli' },
  { src: `${BASE}/grupo-thermoprint.webp`, alt: 'Grupo Thermoprint' },
  { src: `${BASE}/injecar.webp`, alt: 'Injecar' },
  { src: `${BASE}/le-petrin.webp`, alt: 'Le Petrin' },
  { src: `${BASE}/lbel.webp`, alt: "L'Bel" },
  { src: `${BASE}/miliveste.webp`, alt: 'Miliveste' },
  { src: `${BASE}/motel-athos.webp`, alt: 'Motel Athos' },
  { src: `${BASE}/movfrete.webp`, alt: 'Movfrete' },
  { src: `${BASE}/ncf-seguros.webp`, alt: 'NCF Seguros' },
  { src: `${BASE}/new-cia.webp`, alt: 'New CIA' },
  { src: `${BASE}/pet-company.webp`, alt: 'Pet Company' },
  { src: `${BASE}/qualisan.webp`, alt: 'Qualisan' },
  { src: `${BASE}/r2m.webp`, alt: 'R2M' },
  { src: `${BASE}/sartori.webp`, alt: 'Sartori' },
  { src: `${BASE}/truckcenter.webp`, alt: 'Truck Center' },
  { src: `${BASE}/vanguard.webp`, alt: 'Vanguard' },
  { src: `${BASE}/grupo-supply.webp`, alt: 'Grupo Supply' },
  { src: `${BASE}/smart-sense.webp`, alt: 'Smart Sense' },
  { src: `${BASE}/power-bikes.webp`, alt: 'Power Bikes' },
]

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
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-48 sm:w-60 h-28 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={120}
                  loading="lazy"
                  unoptimized
                  className="h-20 sm:h-24 w-auto max-w-full object-contain brightness-0 invert"
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
