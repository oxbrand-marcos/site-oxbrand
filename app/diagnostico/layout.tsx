import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { breadcrumbSchema, jsonLd } from '@/lib/jsonld'

const TITLE = 'Diagnóstico Digital Gratuito · OxBrand'
const DESCRIPTION =
  'Análise da sua operação digital sem custo: funil, canais, desperdícios e recomendações práticas. Retorno em até 2 horas em dias úteis.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageOg({
    title: TITLE,
    description: DESCRIPTION,
    path: '/diagnostico',
    subtitle: 'Sem custo, sem compromisso',
  }),
}

export default function DiagnosticoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: 'OxBrand', url: '/' }, { name: 'Diagnóstico', url: '/diagnostico' }])),
        }}
      />
      {children}
    </>
  )
}
