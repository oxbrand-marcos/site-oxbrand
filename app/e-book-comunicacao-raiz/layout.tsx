import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { breadcrumbSchema, jsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'E-book Comunicação Raiz: A Fórmula Revelada | OxBrand',
  description:
    "Baixe grátis o e-book Comunicação Raiz da OxBrand: o método 5Q's + 3PQ's = CP para criar mensagens sólidas, quebrar objeções e converter mais.",
  ...pageOg({
    title: 'E-book Comunicação Raiz · OxBrand',
    description: "Método 5Q's + 3PQ's = CP para mensagens sólidas, quebrar objeções e converter mais.",
    path: '/e-book-comunicacao-raiz',
    subtitle: 'Material Gratuito',
  }),
}

export default function EbookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'OxBrand', url: '/' },
            { name: 'Materiais Gratuitos', url: '/materiais-gratuitos' },
            { name: 'E-book Comunicação Raiz', url: '/e-book-comunicacao-raiz' },
          ])),
        }}
      />
      {children}
    </>
  )
}
