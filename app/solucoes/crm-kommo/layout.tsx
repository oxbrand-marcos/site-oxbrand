import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { serviceSchema, breadcrumbSchema, faqPageSchema, jsonLd } from '@/lib/jsonld'
import { CRM_KOMMO_NAME, CRM_KOMMO_DESCRIPTION, faqItems } from './data'

export const metadata: Metadata = {
  title: 'Parceiro Kommo Top 5% no Brasil: implantação em 15 dias | OxBrand',
  description: 'Agência parceira oficial Kommo, Top 5% no Brasil. Implantação do Kommo CRM em 15 dias: funil, WhatsApp, automações, Salesbot e treinamento do time.',
  ...pageOg({
    title: 'CRM Kommo · Implementação em 15 dias',
    description: 'Pare de perder vendas no WhatsApp. Parceiro Kommo certificado Top 5% no Brasil.',
    path: '/solucoes/crm-kommo',
    subtitle: 'CRM & Automação Comercial',
  }),
}

export default function CrmKommoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(serviceSchema({
            name: CRM_KOMMO_NAME,
            description: CRM_KOMMO_DESCRIPTION,
            url: '/solucoes/crm-kommo',
            serviceType: 'CRM Kommo',
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'OxBrand', url: '/' },
            { name: 'Soluções', url: '/solucoes' },
            { name: 'CRM Kommo', url: '/solucoes/crm-kommo' },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(faqItems)) }}
      />
      {children}
    </>
  )
}
