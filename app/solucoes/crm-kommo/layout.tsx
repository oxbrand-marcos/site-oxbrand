import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { serviceSchema, breadcrumbSchema, faqPageSchema, jsonLd } from '@/lib/jsonld'
import { CRM_KOMMO_NAME, CRM_KOMMO_DESCRIPTION, faqItems } from './data'

export const metadata: Metadata = {
  title: 'CRM Kommo: implementação em 15 dias | OxBrand, Top 5% Brasil',
  description: 'Implementação completa do CRM Kommo em 15 dias por parceiro certificado Top 5% no Brasil: funil, integração de canais, automações e treinamento.',
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
