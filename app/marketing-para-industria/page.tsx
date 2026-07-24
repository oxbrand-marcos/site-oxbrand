import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Agência de marketing para indústria e empresas B2B: geração de demanda qualificada, ciclo de venda longo e ROI. Método validado em +450 marcas. Diagnóstico gratuito.'

export const metadata: Metadata = {
  title: 'Marketing para Indústria e B2B com Método | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing para Indústria e B2B', description: DESC, path: '/marketing-para-industria', subtitle: 'Indústria & B2B' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/marketing-para-industria"
      serviceType="Marketing industrial B2B"
      breadcrumb="Marketing para Indústria"
      metaDescription={DESC}
      tag="Indústria & B2B"
      headline="Marketing para Indústria: demanda qualificada"
      headlineHighlight="para quem vende B2B"
      subheadline="Ticket alto, ciclo longo e comitê de compra pedem método, não postzinho. Estruturamos demanda previsível para quem vende para outras empresas, com dados e integração ao comercial."
      introTitle="Marketing industrial não é marketing de varejo"
      intro="Tratar os dois igual é o erro que faz a maioria das campanhas B2B queimar verba. Na indústria, o ticket é alto, o ciclo de venda é longo e quem decide é um comitê que passa por engenharia, compras e diretoria. Não se vende uma injetora ou um contrato de fornecimento com um anúncio de compre agora. A OxBrand estrutura marketing para indústrias e empresas B2B com a mesma engenharia que aplicamos em mais de 450 marcas: sistema, dados e integração com o comercial. Atendemos indústria de transformação, metalurgia e autopeças, construção civil e incorporadoras, fornecedores e distribuidores B2B, máquinas e equipamentos e serviços industriais de alto ticket."
      steps={[
        { number: '01', title: 'Ciclo longo', description: 'Entre o primeiro contato e o pedido podem passar meses. O marketing precisa nutrir, não só capturar.' },
        { number: '02', title: 'Comitê de compra', description: 'Engenharia avalia especificação, compras avalia preço, diretoria avalia risco. Sua mensagem responde aos três.' },
        { number: '03', title: 'Ticket alto, baixo volume', description: 'Poucos leads, mas cada um vale muito. Perder um lead qualificado dói mais do que no varejo.' },
        { number: '04', title: 'Decisão racional', description: 'Ninguém compra por impulso. Ganha quem reduz o risco percebido com prova técnica, não quem grita mais alto.' },
      ]}
      features={[
        { title: 'Geração de demanda qualificada', description: 'Tráfego pago no Google e LinkedIn segmentado por cargo, setor e porte, para aparecer para quem realmente decide.' },
        { title: 'Conteúdo técnico e autoridade', description: 'Materiais que respondem às objeções de engenharia e compras e posicionam sua empresa como referência.' },
        { title: 'CRM e nutrição de ciclo longo', description: 'Funil estruturado que acompanha o lead pelos meses de decisão, sem deixar nenhuma oportunidade esfriar.' },
        { title: 'Integração com o comercial', description: 'Os representantes recebem leads prontos, com contexto. Marketing e vendas operando como um sistema único.' },
      ]}
      audience={{
        isFor: [
          'Sua empresa vende para outras empresas, com processo de compra complexo.',
          'Você já investe em marketing, mas não tem previsibilidade de demanda.',
          'Tem time comercial e quer leads qualificados, não contatos frios.',
        ],
        isNotFor: [
          'Busca alcance e métrica de vaidade em vez de pedido fechado.',
          'Quer resultado imediato sem respeitar o ciclo de venda B2B.',
          'Não tem processo comercial para receber os leads gerados.',
        ],
      }}
      relatedLinks={[
        { label: 'Gestão de Tráfego Pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'Inbound Marketing', href: '/solucoes/inbound-marketing' },
        { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
        { label: 'Agência em Mogi das Cruzes', href: '/agencia-de-marketing-digital-mogi-das-cruzes' },
      ]}
      ctaHeading="Pronto para gerar demanda previsível na indústria?"
      faqItems={[
        { q: 'Marketing digital funciona para indústria?', a: 'Funciona, desde que respeite o ciclo B2B. Não é sobre volume de leads, é sobre gerar oportunidades qualificadas e nutri-las ao longo da decisão. Feito com método, reduz o custo de aquisição e encurta o ciclo de venda.' },
        { q: 'Qual a diferença entre marketing B2B e B2C?', a: 'No B2C, a compra é rápida e emocional. No B2B, é longa, racional e feita por um comitê. Muda tudo: canais, mensagem, conteúdo e a forma de medir. Aplicar tática de B2C na indústria é o que faz a verba render pouco.' },
        { q: 'Quanto tempo leva para ver resultado?', a: 'O tráfego pago gera sinais nas primeiras semanas, mas o resultado comercial acompanha o seu ciclo de venda, que na indústria costuma ser de meses. Por isso medimos o funil inteiro, não só o topo.' },
        { q: 'Vocês atendem indústrias fora de São Paulo?', a: 'Sim. Somos uma agência de marketing digital em Mogi das Cruzes com atuação nacional e internacional, atendemos indústrias no Brasil inteiro.' },
      ]}
    />
  )
}
