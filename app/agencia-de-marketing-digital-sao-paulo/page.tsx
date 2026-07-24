import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Agência de marketing digital em São Paulo e Grande SP: tráfego pago, CRM e performance com método. +R$ 258 mi gerados para clientes. Diagnóstico gratuito.'

export const metadata: Metadata = {
  title: 'Agência de Marketing Digital em São Paulo | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Agência de Marketing Digital em São Paulo e Grande SP', description: DESC, path: '/agencia-de-marketing-digital-sao-paulo', subtitle: 'São Paulo & Grande SP' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/agencia-de-marketing-digital-sao-paulo"
      serviceType="Marketing digital em São Paulo"
      breadcrumb="Agência em São Paulo"
      metaDescription={DESC}
      tag="São Paulo & Grande SP"
      headline="Agência de Marketing Digital em"
      headlineHighlight="São Paulo e Grande SP"
      subheadline="São Paulo é o mercado mais competitivo do país e o mais caro para errar. O que separa quem cresce de quem só gasta com marketing não é quem grita mais alto, é quem tem estrutura."
      introTitle="Por que estrutura importa mais em São Paulo"
      intro="Somos uma agência de marketing digital que atende São Paulo e toda a Grande SP com a mesma engenharia que já gerou mais de R$ 258 milhões em faturamento para clientes. Não vendemos presença digital nem métrica de vaidade, construímos crescimento previsível com tráfego, tecnologia e integração com o comercial. A OxBrand fica na Grande São Paulo, em Mogi das Cruzes, e atende a capital e toda a região metropolitana, presencialmente quando faz sentido e digitalmente com a mesma proximidade, além de atuação nacional e internacional."
      steps={[
        { number: '01', title: 'Concorrência alta', description: 'Em SP, o seu cliente vê dezenas de anúncios por dia. Ganha quem tem oferta clara e conversão afiada, não quem tem o maior orçamento.' },
        { number: '02', title: 'Mídia mais cara', description: 'O custo por clique em mercados saturados é maior. Sem otimização e boa página de conversão, a verba evapora rápido.' },
        { number: '03', title: 'Cliente exigente', description: 'O consumidor paulistano compara, pesquisa e cobra. A jornada precisa ser bem construída do anúncio ao atendimento.' },
        { number: '04', title: 'Volume e velocidade', description: 'Muita demanda, decisão rápida. Quem responde melhor e mais rápido, com CRM organizado, larga na frente.' },
      ]}
      features={[
        { title: 'Gestão de tráfego pago', description: 'Campanhas no Google e Meta segmentadas para o público certo em SP e região, otimizadas para custo por resultado, não por clique.' },
        { title: 'CRM e organização comercial', description: 'Funil estruturado no Kommo para não perder lead num mercado de alto volume, com atendimento rápido e mensurável.' },
        { title: 'Sites e landing pages que convertem', description: 'Páginas rápidas (90+ no PageSpeed) feitas para transformar o tráfego caro de SP em cliente, não em visita perdida.' },
        { title: 'Estratégia e integração', description: 'Marketing e comercial operando como um sistema, com análise e otimização semanais. Direção, não só execução.' },
      ]}
      audience={{
        isFor: [
          'Empresas de São Paulo e Grande SP que querem crescer com método',
          'Quem investe em mídia cara e precisa de eficiência de verba',
          'Operações com volume que precisam de CRM e resposta rápida',
          'Quem quer proximidade da Grande SP sem custo de agência na capital',
        ],
        isNotFor: [
          'Quem busca métrica de vaidade, não venda',
          'Quem não tem estrutura para atender a demanda gerada',
          'Quem quer o mais barato, não o que dá resultado',
        ],
      }}
      relatedLinks={[
        { label: 'Gestão de tráfego pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
        { label: 'Agência em Mogi das Cruzes', href: '/agencia-de-marketing-digital-mogi-das-cruzes' },
        { label: 'Todas as soluções', href: '/solucoes' },
      ]}
      ctaHeading="Pronto para crescer com estrutura em São Paulo?"
      faqItems={[
        { q: 'A OxBrand atende empresas na cidade de São Paulo?', a: 'Sim. Ficamos na Grande São Paulo (Mogi das Cruzes) e atendemos a capital e toda a região metropolitana, presencial e digitalmente. Também temos clientes no Brasil inteiro e no exterior.' },
        { q: 'Qual a vantagem de contratar uma agência da Grande SP em vez da capital?', a: 'Você tem a mesma proximidade e conhecimento do mercado paulista, sem pagar pela estrutura inflada de uma agência na capital. Isso costuma se traduzir em mais eficiência da verba para você.' },
        { q: 'Quanto preciso investir para começar?', a: 'Depende do seu objetivo e ticket. Mais importante que o valor da mídia é a estrutura por trás: uma verba coerente com boa gestão rende mais que muito dinheiro sem estratégia. Definimos isso juntos no diagnóstico.' },
        { q: 'Vocês atendem qual tipo de empresa?', a: 'Trabalhamos bem com construção civil e imobiliário, saúde e clínicas, indústria e B2B, educação, serviços de alto ticket e e-commerce. Se a sua empresa quer crescer com previsibilidade em SP, o método se aplica.' },
      ]}
    />
  )
}
