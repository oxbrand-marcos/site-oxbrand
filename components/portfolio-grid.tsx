'use client'

import { useState } from 'react'
import Image from 'next/image'
import { YouTubeFacade } from '@/components/youtube-facade'

// Constantes distintas: volume total da operação vs. amostra exposta na galeria
const pecasProduzidas = 1000  // volume total produzido desde a fundação
const PAGE_SIZE = 24          // itens renderizados por vez na grade

const BASE = '/images/wp/portfolio/'

const categoriesData = [
  {
    id: 'logotipos',
    label: 'Logotipos',
    items: [
      { slug: 'oxbrand-portfolio-lgotipo-cia-do-caminhao', alt: 'Cia do Caminhão' },
      { slug: 'oxbrand-portfolio-logotipo-aerobrasil', alt: 'AeroBrasil' },
      { slug: 'oxbrand-portfolio-logotipo-aguarasa', alt: 'Água Rasa' },
      { slug: 'oxbrand-portfolio-logotipo-aquarium', alt: 'Aquarium' },
      { slug: 'oxbrand-portfolio-logotipo-arrumma', alt: 'Arrumma' },
      { slug: 'oxbrand-portfolio-logotipo-bauforte', alt: 'Bauforte' },
      { slug: 'oxbrand-portfolio-logotipo-belas-imagens', alt: 'Belas Imagens' },
      { slug: 'oxbrand-portfolio-logotipo-boteco-sao-rafael', alt: 'Boteco São Rafael' },
      { slug: 'oxbrand-portfolio-logotipo-brasil-fibras', alt: 'Brasil Fibras' },
      { slug: 'oxbrand-portfolio-logotipo-bravo', alt: 'Bravo' },
      { slug: 'oxbrand-portfolio-logotipo-cia-trucks', alt: 'Cia Trucks' },
      { slug: 'oxbrand-portfolio-logotipo-closet-31', alt: 'Closet 31' },
      { slug: 'oxbrand-portfolio-logotipo-comcam', alt: 'Comcam' },
      { slug: 'oxbrand-portfolio-logotipo-comercio-online', alt: 'Comércio Online' },
      { slug: 'oxbrand-portfolio-logotipo-contraste-decoracoes', alt: 'Contraste Decorações' },
      { slug: 'oxbrand-portfolio-logotipo-corum', alt: 'Corum' },
      { slug: 'oxbrand-portfolio-logotipo-cosa-nostra', alt: 'Cosa Nostra' },
      { slug: 'oxbrand-portfolio-logotipo-dobassi', alt: 'Dobassi' },
      { slug: 'oxbrand-portfolio-logotipo-dra-vanuza', alt: 'Dra. Vanuza' },
      { slug: 'oxbrand-portfolio-logotipo-easyfin', alt: 'EasyFin' },
      { slug: 'oxbrand-portfolio-logotipo-eduarda-demazzi', alt: 'Eduarda Demazzi' },
      { slug: 'oxbrand-portfolio-logotipo-emporio-brauna', alt: 'Empório Braúna' },
      { slug: 'oxbrand-portfolio-logotipo-envolt', alt: 'Envolt' },
      { slug: 'oxbrand-portfolio-logotipo-gi-flores', alt: 'Gi Flores' },
      { slug: 'oxbrand-portfolio-logotipo-grupo-thermoprint', alt: 'Grupo Thermoprint' },
      { slug: 'oxbrand-portfolio-logotipo-jardim-supioni', alt: 'Jardim Supioni' },
      { slug: 'oxbrand-portfolio-logotipo-katia-fonseca', alt: 'Kátia Fonseca' },
      { slug: 'oxbrand-portfolio-logotipo-la-capanna', alt: 'La Capanna' },
      { slug: 'oxbrand-portfolio-logotipo-lbel', alt: 'LBel' },
      { slug: 'oxbrand-portfolio-logotipo-le-petrin', alt: 'Le Pétrin' },
      { slug: 'oxbrand-portfolio-logotipo-maciel-novaes', alt: 'Maciel Novaes' },
      { slug: 'oxbrand-portfolio-logotipo-manuelitha', alt: 'Manuelitha' },
      { slug: 'oxbrand-portfolio-logotipo-marcelo-garcia', alt: 'Marcelo Garcia' },
      { slug: 'oxbrand-portfolio-logotipo-mbseg', alt: 'MBSeg' },
      { slug: 'oxbrand-portfolio-logotipo-mia-castana', alt: 'Mia Castana' },
      { slug: 'oxbrand-portfolio-logotipo-motel-athos', alt: 'Motel Athos' },
      { slug: 'oxbrand-portfolio-logotipo-movfrete', alt: 'MovFrete' },
      { slug: 'oxbrand-portfolio-logotipo-newcia', alt: 'NewCia' },
      { slug: 'oxbrand-portfolio-logotipo-novo-suporte', alt: 'Novo Suporte' },
      { slug: 'oxbrand-portfolio-logotipo-oroq', alt: 'Oroq' },
      { slug: 'oxbrand-portfolio-logotipo-ottimi', alt: 'Ottimi' },
      { slug: 'oxbrand-portfolio-logotipo-paranoid', alt: 'Paranoid' },
      { slug: 'oxbrand-portfolio-logotipo-pet-company', alt: 'Pet Company' },
      { slug: 'oxbrand-portfolio-logotipo-pin-ideias', alt: 'Pin Ideias' },
      { slug: 'oxbrand-portfolio-logotipo-r2m', alt: 'R2M' },
      { slug: 'oxbrand-portfolio-logotipo-rafael-monezi', alt: 'Rafael Monezi' },
      { slug: 'oxbrand-portfolio-logotipo-sandre', alt: 'Sandre' },
      { slug: 'oxbrand-portfolio-logotipo-sartori', alt: 'Sartori' },
      { slug: 'oxbrand-portfolio-logotipo-tatuadamente', alt: 'Tatuadamente' },
      { slug: 'oxbrand-portfolio-logotipo-tomperos', alt: 'Tomperos' },
      { slug: 'oxbrand-portfolio-logotipo-tplog', alt: 'TPLog' },
      { slug: 'oxbrand-portfolio-logotipo-vanguard-project', alt: 'Vanguard Project' },
      { slug: 'oxbrand-portfolio-logotipo-vcenario', alt: 'Vcenario' },
      { slug: 'oxbrand-portfolio-logotipo-veste-sky', alt: 'Veste Sky' },
      { slug: 'oxbrand-portfolio-logotipo-vieira', alt: 'Vieira' },
      { slug: 'oxbrand-portfolio-redes-sociais-gaya', alt: 'Gaya' },
    ],
  },
  {
    id: 'redes-sociais',
    label: 'Redes Sociais',
    items: [
      { slug: 'oxbrand-portfolio-redes-sociais-agua-rasa', alt: 'Água Rasa' },
      { slug: 'oxbrand-portfolio-redes-sociais-arrumma', alt: 'Arrumma' },
      { slug: 'oxbrand-portfolio-redes-sociais-auto-escola-fm', alt: 'Auto Escola FM' },
      { slug: 'oxbrand-portfolio-redes-sociais-bauforte', alt: 'Bauforte' },
      { slug: 'oxbrand-portfolio-redes-sociais-cia-do-caminhao', alt: 'Cia do Caminhão' },
      { slug: 'oxbrand-portfolio-redes-sociais-dna-colchoes', alt: 'DNA Colchões' },
      { slug: 'oxbrand-portfolio-redes-sociais-envolt', alt: 'Envolt' },
      { slug: 'oxbrand-portfolio-redes-sociais-formula-tatuador-pro', alt: 'Fórmula Tatuador Pro' },
      { slug: 'oxbrand-portfolio-redes-sociais-fratelli', alt: 'Fratelli' },
      { slug: 'oxbrand-portfolio-redes-sociais-gallo-advocacia', alt: 'Gallo Advocacia' },
      { slug: 'oxbrand-portfolio-redes-sociais-grupo-motobras', alt: 'Grupo Motobras' },
      { slug: 'oxbrand-portfolio-redes-sociais-grupo-thermoprint', alt: 'Grupo Thermoprint' },
      { slug: 'oxbrand-portfolio-redes-sociais-juliano', alt: 'Juliano' },
      { slug: 'oxbrand-portfolio-redes-sociais-kawaii', alt: 'Kawaii' },
      { slug: 'oxbrand-portfolio-redes-sociais-la-capanna', alt: 'La Capanna' },
      { slug: 'oxbrand-portfolio-redes-sociais-lbel', alt: 'LBel' },
      { slug: 'oxbrand-portfolio-redes-sociais-le-petrin', alt: 'Le Pétrin' },
      { slug: 'oxbrand-portfolio-redes-sociais-limpe-ja', alt: 'Limpe Já' },
      { slug: 'oxbrand-portfolio-redes-sociais-miliveste', alt: 'Miliveste' },
      { slug: 'oxbrand-portfolio-redes-sociais-motel-athos', alt: 'Motel Athos' },
      { slug: 'oxbrand-portfolio-redes-sociais-movfrete', alt: 'MovFrete' },
      { slug: 'oxbrand-portfolio-redes-sociais-newcia', alt: 'NewCia' },
      { slug: 'oxbrand-portfolio-redes-sociais-novo-suporte', alt: 'Novo Suporte' },
      { slug: 'oxbrand-portfolio-redes-sociais-nuka-store', alt: 'Nuka Store' },
      { slug: 'oxbrand-portfolio-redes-sociais-pet-company', alt: 'Pet Company' },
      { slug: 'oxbrand-portfolio-redes-sociais-poker-burguer', alt: 'Poker Burguer' },
      { slug: 'oxbrand-portfolio-redes-sociais-qualisan-luana', alt: 'Qualisan Luana' },
      { slug: 'oxbrand-portfolio-redes-sociais-r2m', alt: 'R2M' },
      { slug: 'oxbrand-portfolio-redes-sociais-rafael-fornari', alt: 'Rafael Fornari' },
      { slug: 'oxbrand-portfolio-redes-sociais-sua-carga', alt: 'Sua Carga' },
      { slug: 'oxbrand-portfolio-redes-sociais-supply', alt: 'Supply' },
      { slug: 'oxbrand-portfolio-redes-sociais-thermorpint-balancas', alt: 'Thermoprint Balanças' },
      { slug: 'oxbrand-portfolio-redes-sociais-tireboy', alt: 'Tireboy' },
      { slug: 'oxbrand-portfolio-redes-sociais-uniexcellence', alt: 'UniExcellence' },
      { slug: 'oxbrand-portfolio-redes-sociais-up-eyes', alt: 'Up Eyes' },
      { slug: 'oxbrand-portfolio-redes-sociais-via-calce', alt: 'Via Calce' },
    ],
  },
  {
    id: 'sites',
    label: 'Sites',
    items: [
      { slug: 'oxbrand-desenvolvimento-oxbrand-portfolio-desenvol-brasil-fibras', alt: 'Brasil Fibras', videoId: null },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-eco-maquinas', alt: 'Eco Máquinas', videoId: 'SYhM_vcI0nw' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-almeida-', alt: 'Almeida', videoId: 'jfGr9YY2uL8' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-alphamec', alt: 'Alphamec', videoId: 'FNBQtLhUvhU' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-arrumma', alt: 'Arrumma', videoId: 'YY9r4oUDA4Y' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-braga', alt: 'Braga', videoId: '7od5qN96G7c' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-chris-tatuador', alt: 'Chris Tatuador', videoId: 'bufVodlCqoM' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-cia-do-caminhao', alt: 'Cia do Caminhão', videoId: 'bcTUskDzhiM' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-formula-tatu', alt: 'Fórmula Tatu', videoId: 'gsAXkCFpvj8' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-injecar', alt: 'Injecar', videoId: 'aP7gGdNx36Q' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-la-capanna', alt: 'La Capanna', videoId: 'IXde2_CYJ3g' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-ltforgood', alt: 'LTForGood', videoId: 'H_LOjD2ZVgw' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-manuelitha', alt: 'Manuelitha', videoId: 'NDXBFYTXnW0' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-motel-athos', alt: 'Motel Athos', videoId: 'bRcpCzbvI-4' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-newcia', alt: 'NewCia', videoId: 'vuyMJjltDiY' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-novo-suporte', alt: 'Novo Suporte', videoId: 'FLwRtfBIaio' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-r2m', alt: 'R2M', videoId: '6PG2pp9iesI' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-rm3', alt: 'RM3', videoId: '5bJa6UEkTYw' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-sandre', alt: 'Sandre', videoId: 'R8gz_ZOF2ls' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-truck-center', alt: 'Truck Center', videoId: 'ukyk2ZijKFU' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-vcenario', alt: 'Vcenario', videoId: '_wLriDqvDjQ' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-decorplane', alt: 'Decorplane', videoId: 'ESuJe8P9IQE' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-grupo-thermoprint', alt: 'Grupo Thermoprint', videoId: 'T98Hqul-1ZU' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-motobras', alt: 'Motobras', videoId: 'QOGSguD8MAw' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-lbel', alt: 'LBel', videoId: 'GcLl1xBFDMY' },
      { slug: 'oxbrand-portfolio-desenvolvimento-de-sites-thumbnail-ncfseguros', alt: 'NCF Seguros', videoId: 'Y0uskM3yklQ' },
    ],
  },
]

// Itens tipados com categoryId para o estado Todos
type PortfolioItem = { slug: string; alt: string; videoId?: string | null; categoryId: string }

const categories = categoriesData.map((cat) => ({
  ...cat,
  count: cat.items.length,
  items: cat.items.map((item) => ({ ...item, categoryId: cat.id })),
}))

const allItems: PortfolioItem[] = categories.flatMap((cat) => cat.items)

// projetosNaGaleria: total de itens selecionados e expostos nesta grade
const projetosNaGaleria = allItems.length

const tabs = [
  { id: 'todos', label: `Todos · ${projetosNaGaleria} projetos selecionados`, count: null },
  ...categories.map((cat) => ({ id: cat.id, label: cat.label, count: cat.count })),
]

export function PortfolioGrid() {
  const [active, setActive] = useState('todos')
  const [page, setPage] = useState(1)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const baseItems: PortfolioItem[] =
    active === 'todos'
      ? allItems
      : categories.find((c) => c.id === active)?.items ?? []

  const visibleItems = baseItems.slice(0, page * PAGE_SIZE)
  const hasMore = visibleItems.length < baseItems.length

  // Resetar página ao trocar categoria
  function handleTabChange(id: string) {
    setActive(id)
    setPage(1)
  }

  // Grid cols por categoria ativa
  const gridCols =
    active === 'logotipos'
      ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'
      : active === 'redes-sociais'
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      : active === 'sites'
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'

  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-6 mb-12">
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <span className="mono-tag text-zinc-400">Portfólio</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-zinc-900">
              Resultados em<br />
              <span className="text-glow">Branding & Presença Digital</span>
            </h2>
            <p className="text-sm text-zinc-500 max-w-md leading-relaxed">
              Uma seleção do que produzimos. Nem tudo que entregamos está aqui; estes são os projetos que melhor representam cada frente.
            </p>
          </div>
          {/* Tabs / filtros */}
          <div className="flex flex-wrap items-center gap-px border border-zinc-200 overflow-hidden shrink-0 w-full sm:w-auto" role="tablist" aria-label="Categorias do portfólio">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-zinc-50 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {tab.label}
                {tab.count !== null && (
                  <span className="ml-1.5 opacity-50">{tab.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className={`grid gap-px bg-zinc-200 border border-zinc-200 ${gridCols}`}
          role="tabpanel"
        >
          {visibleItems.map((item) => {
            const src = `${BASE}${item.slug}.webp`
            const isVideo = (item.categoryId === 'sites') && !!item.videoId

            if (isVideo) {
              return (
                <div
                  key={item.slug}
                  className="group relative overflow-hidden bg-white flex flex-col"
                >
                  <YouTubeFacade
                    videoId={item.videoId!}
                    title={item.alt}
                    aspect="landscape"
                  />
                  <div className="px-3 py-2 bg-zinc-50 border-t border-zinc-200">
                    <span className="text-xs font-mono tracking-wide text-zinc-500">{item.alt}</span>
                  </div>
                </div>
              )
            }

            return (
              <button
                key={item.slug}
                className="group relative overflow-hidden bg-white hover:bg-zinc-50 transition-colors aspect-square flex items-center justify-center"
                onClick={() => setLightbox({ src, alt: item.alt })}
                aria-label={`Ver ${item.alt}`}
              >
                <Image
                  src={src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-3">
                  <span className="text-xs font-mono tracking-wide text-white/0 group-hover:text-white/90 transition-colors duration-300 translate-y-2 group-hover:translate-y-0 transform leading-snug">
                    {item.alt}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Botão Carregar mais */}
        {hasMore && (
          <div className="mt-10 flex flex-col items-center gap-2">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 border border-zinc-300 text-sm font-semibold text-zinc-700 hover:border-primary hover:text-primary transition-colors"
            >
              Carregar mais
              <span className="ml-2 text-zinc-400 font-normal">
                ({visibleItems.length} de {baseItems.length})
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-mono text-white/60 py-2">
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
