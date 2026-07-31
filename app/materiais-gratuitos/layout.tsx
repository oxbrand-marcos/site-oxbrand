import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { breadcrumbSchema, jsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Materiais Gratuitos de Marketing Digital | OxBrand',
  description: 'E-books e guias práticos gratuitos da OxBrand. Conteúdo estratégico para empreendedores que querem crescer com método e dados.',
  ...pageOg({
    title: 'Materiais Gratuitos de Marketing Digital',
    description: 'Guias, checklists e templates que usamos na nossa própria operação. Sem cadastro longo, sem enrolação.',
    path: '/materiais-gratuitos',
    subtitle: 'Downloads gratuitos',
  }),
}

export default function MateriaisLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: 'OxBrand', url: '/' }, { name: 'Materiais Gratuitos', url: '/materiais-gratuitos' }])),
        }}
      />
      {children}
    </>
  )
}
