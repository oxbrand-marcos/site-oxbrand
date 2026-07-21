import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-book Comunicação Raiz: A Fórmula Revelada | OxBrand',
  description:
    'Baixe gratuitamente o e-book Comunicação Raiz da OxBrand. Aprenda o método exclusivo 5Q\'s + 3PQ\'s = CP para construir mensagens sólidas, quebrar objeções e converter mais.',
}

export default function EbookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
