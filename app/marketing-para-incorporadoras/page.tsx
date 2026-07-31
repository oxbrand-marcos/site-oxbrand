import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Marketing para incorporadoras: demanda para lançamentos, leads qualificados e CRM integrado ao comercial. Previsibilidade de VGV.'

export const metadata: Metadata = {
  title: 'Marketing para incorporadoras: venda mais VGV | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing para Incorporadoras', description: DESC, path: '/marketing-para-incorporadoras', subtitle: 'Incorporadoras & Lançamentos' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/marketing-para-incorporadoras"
      serviceType="Marketing para incorporadoras"
      breadcrumb="Marketing para Incorporadoras"
      metaDescription={DESC}
      tag="Venda de lançamentos com método"
      headline="Marketing para incorporadoras: estrutura para vender"
      headlineHighlight="lançamentos com previsibilidade"
      subheadline="Geração de demanda qualificada para os seus empreendimentos, CRM integrado ao comercial e mensuração real de VGV. Marketing para incorporadora não é gerar lead, é abastecer a venda de unidades com previsibilidade."
      introTitle="Foco em venda de unidade, não em volume de lead"
      intro="A OxBrand estrutura o marketing de incorporadoras como engenharia de resultado: direção estratégica (leitura do empreendimento, público real do ticket e meta de VGV), geração de demanda com tráfego pago de precisão, landing pages de empreendimento que convertem, CRM integrado ao comercial e otimização semanal focada em venda de unidade. Diferente do nosso trabalho com imobiliárias e corretores em geral, aqui o foco é a incorporadora e o lançamento: abastecer a venda de unidades com previsibilidade, não só gerar contato."
      steps={[
        { number: '01', title: 'Lançamento sem demanda própria', description: 'A venda depende só de plantão e corretor, sem geração ativa de demanda qualificada para o empreendimento.' },
        { number: '02', title: 'Muito lead desqualificado', description: 'Curioso, investidor do perfil errado e quem não tem renda para o ticket entopem o funil e consomem o time comercial.' },
        { number: '03', title: 'CAC alto e sem clareza', description: 'Custo por unidade elevado e nenhuma medição da real influência do marketing na venda. Decisão no escuro.' },
        { number: '04', title: 'Marketing e comercial desalinhados', description: 'Entre o marketing e a equipe de vendas (própria ou imobiliária parceira), o lead chega e esfria sem processo.' },
        { number: '05', title: 'Ciclo longo sem nutrição', description: 'A decisão de compra é longa e cara. Sem nutrição, o interessado de hoje é esquecido antes de decidir.' },
      ]}
      features={[
        { title: 'Tráfego pago para lançamentos', description: 'Campanhas de precisão no Meta e Google para lançamentos e estoque, segmentadas por perfil de comprador do ticket e por etapa do funil.' },
        { title: 'Landing pages de empreendimento', description: 'Páginas rápidas por empreendimento, com oferta clara (tour, tabela, condições), formulário que qualifica e WhatsApp integrado.' },
        { title: 'CRM comercial integrado', description: 'Kommo (parceiro Top 5% do Brasil) com qualificação e distribuição de leads, integrado ao comercial e aos canais de atendimento.' },
        { title: 'Automação de follow-up e nutrição', description: 'Fluxos que mantêm o interessado aquecido durante o ciclo longo de decisão, sem depender da memória do time.' },
        { title: 'Conteúdo e social de autoridade', description: 'Presença que constrói a autoridade da incorporadora e sustenta a confiança na hora da decisão de compra.' },
        { title: 'Mensuração e dashboards de VGV', description: 'Rastreio e relatórios que mostram custo por lead qualificado, conversão em visita e proposta e a influência do marketing na venda de unidades.' },
      ]}
      audience={{
        isFor: [
          'Incorporadoras que lançam e querem demanda própria previsível',
          'Quem precisa medir a influência do marketing no VGV',
          'Operações que integram marketing ao comercial',
          'Lançamentos que dependem de captação qualificada',
        ],
        isNotFor: [
          'Quem quer volume de lead, não venda de unidade',
          'Quem não tem estrutura comercial para atender o volume',
          'Quem espera resultado sem processo e sem verba de mídia',
        ],
      }}
      relatedLinks={[
        { label: 'Marketing imobiliário', href: '/marketing-imobiliario' },
        { label: 'Gestão de tráfego pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
        { label: 'Geração de leads qualificados', href: '/blog/geracao-de-leads-qualificados' },
      ]}
      ctaHeading="Estruture o marketing dos seus lançamentos com método."
      faqItems={[
        { q: 'O que é marketing para incorporadoras?', a: 'É a estrutura de marketing voltada a gerar demanda qualificada para empreendimentos e lançamentos imobiliários, do tráfego pago à landing page e ao CRM integrado ao comercial, com foco em vender unidades e VGV, não apenas em captar leads.' },
        { q: 'Como gerar leads qualificados para uma incorporadora?', a: 'Com oferta e segmentação alinhadas ao perfil de comprador do ticket, landing pages de empreendimento que qualificam, tráfego pago de precisão e um CRM que filtra e distribui os leads para o comercial. Qualidade de lead se define na entrada da campanha.' },
        { q: 'Marketing para incorporadora substitui a imobiliária e os corretores?', a: 'Não. Ele abastece e potencializa a venda: gera e qualifica a demanda e integra-se ao comercial (equipe própria ou imobiliária parceira) para que o lead chegue quente e seja bem trabalhado. Marketing e vendas operam como um sistema.' },
        { q: 'Dá para medir o retorno do marketing em um lançamento?', a: 'Sim. Com rastreio e CRM integrados, é possível acompanhar custo por lead qualificado, conversão em visita e proposta e a influência do marketing na venda de unidades, trazendo previsibilidade de VGV em vez de achismo.' },
      ]}
    />
  )
}
