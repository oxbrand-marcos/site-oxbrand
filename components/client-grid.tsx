'use client'

import Image from 'next/image'

const BASE = '/images/wp/clients'

const logos = [
  { src: `${BASE}/aerobrasil.webp`,           alt: 'AeroBrasil' },
  { src: `${BASE}/agua-rasa.webp`,            alt: 'Água Rasa' },
  { src: `${BASE}/almeida-carvalho.webp`,     alt: 'Almeida Carvalho' },
  { src: `${BASE}/alphamec.webp`,             alt: 'Alphamec' },
  { src: `${BASE}/aquarium.webp`,             alt: 'Aquarium' },
  { src: `${BASE}/arrumma.webp`,              alt: 'Arrumma' },
  { src: `${BASE}/auto-escola-fm.webp`,       alt: 'Auto Escola FM' },
  { src: `${BASE}/bauforte.webp`,             alt: 'Bauforte' },
  { src: `${BASE}/belas-imagens.webp`,        alt: 'Belas Imagens' },
  { src: `${BASE}/boteco-sao-rafael.webp`,    alt: 'Boteco São Rafael' },
  { src: `${BASE}/brasil-fibras.webp`,        alt: 'Brasil Fibras' },
  { src: `${BASE}/bravo.webp`,                alt: 'Bravo' },
  { src: `${BASE}/cia-do-caminhao.webp`,      alt: 'CIA do Caminhão' },
  { src: `${BASE}/cia-trucks.webp`,           alt: 'CIA Trucks' },
  { src: `${BASE}/contraste-decoracao.webp`,  alt: 'Contraste Decoração' },
  { src: `${BASE}/corum.webp`,                alt: 'Corum' },
  { src: `${BASE}/cosa-nostra.webp`,          alt: 'Cosa Nostra' },
  { src: `${BASE}/decorplane.webp`,           alt: 'Decorplane' },
  { src: `${BASE}/desafio-pocus.webp`,        alt: 'Desafio Pocus' },
  { src: `${BASE}/dna-colchoes.webp`,         alt: 'DNA Colchões' },
  { src: `${BASE}/dra-vanuza.webp`,           alt: 'Dra. Vanuza' },
  { src: `${BASE}/easyfin.webp`,              alt: 'Easyfin' },
  { src: `${BASE}/eduarda-demazzi.webp`,      alt: 'Eduarda Demazzi' },
  { src: `${BASE}/emporio-brauna.webp`,       alt: 'Empório Braúna' },
  { src: `${BASE}/envolt.webp`,               alt: 'Envolt' },
  { src: `${BASE}/formula-tatuador-pro.webp`, alt: 'Fórmula Tatuador Pro' },
  { src: `${BASE}/fratelli.webp`,             alt: 'Fratelli' },
  { src: `${BASE}/gallo-advocacia.webp`,      alt: 'Gallo Advocacia' },
  { src: `${BASE}/gaya.webp`,                 alt: 'Gaya' },
  { src: `${BASE}/gi-flores.webp`,            alt: 'Gi Flores' },
  { src: `${BASE}/grupo-thermoprint.webp`,    alt: 'Grupo Thermoprint' },
  { src: `${BASE}/injecar.webp`,              alt: 'Injecar' },
  { src: `${BASE}/katia-fonseca.webp`,        alt: 'Kátia Fonseca' },
  { src: `${BASE}/kawaii.webp`,               alt: 'Kawaii' },
  { src: `${BASE}/laboratorio-vieira.webp`,   alt: 'Laboratório Vieira' },
  { src: `${BASE}/la-capanna.webp`,           alt: 'La Capanna' },
  { src: `${BASE}/lbel.webp`,                 alt: "L'Bel" },
  { src: `${BASE}/le-petrin.webp`,            alt: 'Le Petrin' },
  { src: `${BASE}/ltforgood.webp`,            alt: 'LT For Good' },
  { src: `${BASE}/maciel-novaes.webp`,        alt: 'Maciel Novaes' },
  { src: `${BASE}/manuelitha.webp`,           alt: 'Manuelitha' },
  { src: `${BASE}/marcelo-garcia.webp`,       alt: 'Marcelo Garcia' },
  { src: `${BASE}/mbseg.webp`,                alt: 'MBSeg' },
  { src: `${BASE}/mia-castana.webp`,          alt: 'Mia Castana' },
  { src: `${BASE}/miliveste.webp`,            alt: 'Miliveste' },
  { src: `${BASE}/motel-athos.webp`,          alt: 'Motel Athos' },
  { src: `${BASE}/motobras.webp`,             alt: 'Motobras Premium' },
  { src: `${BASE}/movfrete.webp`,             alt: 'Movfrete' },
  { src: `${BASE}/ncf-seguros.webp`,          alt: 'NCF Seguros' },
  { src: `${BASE}/new-cia.webp`,              alt: 'New CIA' },
  { src: `${BASE}/novo-suporte.webp`,         alt: 'Novo Suporte' },
  { src: `${BASE}/nuka-store.webp`,           alt: 'Nuka Store' },
  { src: `${BASE}/oroq.webp`,                 alt: 'Oroq' },
  { src: `${BASE}/ottimi-sapori.webp`,        alt: 'Ottimi Sapori' },
  { src: `${BASE}/paranoid.webp`,             alt: 'Paranoid' },
  { src: `${BASE}/pet-company.webp`,          alt: 'Pet Company' },
  { src: `${BASE}/poker-burguer.webp`,        alt: 'Poker Burger' },
  { src: `${BASE}/qualisan.webp`,             alt: 'Qualisan' },
  { src: `${BASE}/r2m.webp`,                  alt: 'R2M Equipamentos' },
  { src: `${BASE}/rafael-monezi.webp`,        alt: 'Rafael Monezi' },
  { src: `${BASE}/rm3.webp`,                  alt: 'RM3' },
  { src: `${BASE}/sartori.webp`,              alt: 'Sartori' },
  { src: `${BASE}/sua-carga.webp`,            alt: 'Sua Carga' },
  { src: `${BASE}/supply.webp`,               alt: 'Supply' },
  { src: `${BASE}/tplog.webp`,                alt: 'TP Log' },
  { src: `${BASE}/truckcenter.webp`,          alt: 'Truck Center' },
  { src: `${BASE}/uniexcellence.webp`,        alt: 'UniExcellence' },
  { src: `${BASE}/up-eyes.webp`,              alt: 'Up Eyes' },
  { src: `${BASE}/vanguard.webp`,             alt: 'Vanguard' },
  { src: `${BASE}/vcenario.webp`,             alt: 'vCenario' },
  { src: `${BASE}/veste-sky.webp`,            alt: 'Veste Sky' },
  { src: `${BASE}/via-calce.webp`,            alt: 'Via Calce' },
  { src: `${BASE}/bioagencia.webp`,           alt: 'BioAgência' },
  { src: `${BASE}/eco-maquinas.webp`,         alt: 'Eco Máquinas' },
  { src: `${BASE}/grupo-supply.webp`,         alt: 'Grupo Supply' },
  { src: `${BASE}/jaboke.webp`,               alt: 'Jaboke' },
  { src: `${BASE}/madu.webp`,                 alt: 'Madu' },
  { src: `${BASE}/oab.webp`,                  alt: 'OAB' },
  { src: `${BASE}/power-bikes.webp`,          alt: 'Power Bikes' },
  { src: `${BASE}/smart-sense.webp`,          alt: 'Smart Sense' },
]

export function ClientGrid() {
  return (
    <section className="py-24 border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-black/8"
          aria-label="Clientes OxBrand"
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="group relative border-b border-r border-black/8 flex items-center justify-center p-8 aspect-[3/2] bg-white hover:bg-gray-50 transition-colors duration-200 overflow-hidden"
              title={logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-14 w-auto object-contain brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
