/**
 * Fonte única de verdade para todos os depoimentos do site.
 * Importe daqui em qualquer componente ou página.
 */

export type Testimonial = {
  /** Nome completo do cliente */
  author: string
  /** Empresa ou marca do cliente */
  company: string
  /** Tag/segmento exibida no card */
  segment: string
  /** Métrica de destaque */
  metric: string
  /** Texto completo do depoimento (cards de listagem) */
  text: string
  /** Citação curta para uso em pullquotes */
  quote: string
  /** Cargo/papel para formatos alternativos */
  role: string
  /** Caminho do logotipo (opcional) */
  logo?: string
}

export const testimonials: Testimonial[] = [
  {
    author: 'Bruno Remonti',
    company: 'LBEL Telhas',
    segment: 'Parceria de 4 anos',
    metric: '+4 anos juntos',
    text: 'Vocês fazem parte do nosso time desde o primeiro dia.',
    quote: 'Vocês fazem parte do nosso time desde o primeiro dia.',
    role: 'Sócio · LBEL Telhas',
    logo: '/images/clients/lbel.webp',
  },
  {
    author: 'Jennifer Soares',
    company: 'Truck Center',
    segment: 'Crescimento acelerado',
    metric: 'Crescimento acelerado',
    text: 'Eu estava totalmente deslocada e não sabia o que fazer com o marketing da minha empresa. A Ox foi o norte que o negócio precisava.',
    quote: 'Eu estava totalmente deslocada e não sabia o que fazer com o marketing da minha empresa. A Ox foi o norte que o negócio precisava.',
    role: 'CEO · Truck Center',
    logo: '/images/clients/truckcenter.webp',
  },
  {
    author: 'Chris Richard',
    company: 'Chris Tattoo',
    segment: 'Posicionamento de marca',
    metric: 'Parceria contínua',
    text: 'Não vejo mais a minha trajetória sem a parceria com a OxBrand.',
    quote: 'Não vejo mais a minha trajetória sem a parceria com a OxBrand.',
    role: 'Tatuador · Chris Tattoo',
    logo: undefined,
  },
]

/** Depoimento específico por author (busca parcial, case-insensitive) */
export function getTestimonial(authorFragment: string): Testimonial | undefined {
  return testimonials.find((t) =>
    t.author.toLowerCase().includes(authorFragment.toLowerCase())
  )
}
