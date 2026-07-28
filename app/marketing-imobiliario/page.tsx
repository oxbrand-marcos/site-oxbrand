import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Agência de marketing imobiliário: gere leads qualificados para lançamentos, imóveis e construtoras com método e CRM. Experiência real no setor. Diagnóstico gratuito.'

export const metadata: Metadata = {
  title: 'Agência de Marketing Imobiliário e Construtoras | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing Imobiliário e para Construtoras', description: DESC, path: '/marketing-imobiliario', subtitle: 'Imobiliário & Construtoras' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/marketing-imobiliario"
      serviceType="Marketing imobiliário"
      breadcrumb="Marketing Imobiliário"
      metaDescription={DESC}
      tag="Imobiliário & Construtoras"
      headline="Marketing Imobiliário: leads qualificados"
      headlineHighlight="para imobiliárias e construtoras"
      subheadline="Vender imóvel não é vender um produto qualquer. Ticket alto, decisão longa e o mesmo lead disputado por dezenas de anúncios. Gerar o contato certo, que visita e fecha, é o que separa quem escala de quem só queima verba em portal."
      introTitle="Experiência real no setor, não teoria de agência"
      intro="A OxBrand estrutura marketing imobiliário com engenharia de resultado e com experiência real: nossa COO, Walquiria Blaustein, atua há mais de dez anos no mercado imobiliário. Não vendemos anúncio bonito de fachada. Construímos um fluxo previsível de leads qualificados para imobiliárias, corretores e construtoras, integrado ao comercial que fecha. Atendemos imobiliárias, construtoras e incorporadoras, corretores autônomos de alto ticket, loteadoras e lançamentos residenciais e comerciais. Se o seu negócio depende de leads que visitam e fecham, e não de curiosos que somem, o método se aplica."
      steps={[
        { number: '01', title: 'Lead barato é lead ruim', description: 'Portal e campanha mal segmentada entregam volume de curioso. O corretor gasta o dia com quem nunca ia comprar.' },
        { number: '02', title: 'Ciclo longo', description: 'Entre o primeiro clique e a assinatura passam semanas ou meses. Sem nutrição, o lead esquece a sua marca e fecha com quem apareceu depois.' },
        { number: '03', title: 'Concorrência acirrada', description: 'O mesmo comprador vê o seu imóvel e o de mais dez. Ganha quem responde rápido e conduz melhor, não quem anuncia mais.' },
        { number: '04', title: 'Comercial desconectado', description: 'Sem CRM, ninguém sabe de onde o lead veio, quem atendeu e por que não avançou. Cada oportunidade vira uma caixa-preta.' },
      ]}
      features={[
        { title: 'Geração de leads qualificados', description: 'Tráfego pago no Meta e Google segmentado por região, perfil e estágio de compra, para atrair quem tem intenção real, não só quem clica por curiosidade.' },
        { title: 'Landing pages de lançamento e portfólio', description: 'Páginas rápidas por empreendimento, com formulário e WhatsApp integrados, feitas para capturar o lead no momento do interesse.' },
        { title: 'CRM e resposta imediata', description: 'Funil que registra cada lead e dispara o atendimento na hora, porque no imobiliário o primeiro que responde bem larga na frente.' },
        { title: 'Integração com corretores', description: 'Os leads chegam ao time com contexto e origem, e o funil mostra onde cada negócio parou. Marketing e comercial no mesmo sistema.' },
      ]}
      audience={{
        isFor: [
          'Imobiliárias e construtoras que querem leads que fecham',
          'Corretores de alto ticket que dependem de visita qualificada',
          'Lançamentos que precisam de captação previsível',
          'Quem quer marketing e comercial no mesmo funil',
        ],
        isNotFor: [
          'Quem quer volume de formulário, não venda',
          'Quem não tem time para responder o lead rápido',
          'Quem depende só do portal e não quer canal próprio',
        ],
      }}
      relatedLinks={[
        { label: 'Marketing para incorporadoras', href: '/marketing-para-incorporadoras' },
        { label: 'Gestão de tráfego pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo para corretores', href: '/solucoes/crm-kommo' },
        { label: 'Landing pages e sites', href: '/solucoes/desenvolvimento-de-sites' },
        { label: 'Agência em Mogi das Cruzes', href: '/agencia-de-marketing-digital-mogi-das-cruzes' },
      ]}
      ctaHeading="Pronto para gerar leads imobiliários que visitam e fecham?"
      faqItems={[
        { q: 'Marketing digital funciona para vender imóvel?', a: 'Funciona quando é feito para gerar o lead certo, não volume. No imobiliário, o segredo está na segmentação e na velocidade de resposta: atrair quem tem intenção real e atender antes da concorrência. É isso que transforma clique em visita e visita em venda.' },
        { q: 'Qual a diferença de anunciar em portal e ter uma agência?', a: 'O portal entrega tráfego passivo e disputado por todos os anunciantes ao mesmo tempo. A agência constrói um canal próprio de aquisição, com campanha segmentada, página de conversão e CRM, que você controla e otimiza. Um complementa o outro; depender só do portal é terceirizar o seu crescimento.' },
        { q: 'Vocês entendem do mercado imobiliário?', a: 'Sim, e essa é uma diferença real: nossa COO atua há mais de dez anos no setor imobiliário. Conhecemos o ciclo de venda, o comportamento do comprador e a rotina do corretor, e estruturamos o marketing com base nisso, não em teoria genérica de agência.' },
        { q: 'Vocês atendem construtoras fora de São Paulo?', a: 'Sim. Somos uma agência de marketing digital em Mogi das Cruzes com atuação nacional, atendemos imobiliárias e construtoras no Brasil inteiro.' },
      ]}
    />
  )
}
