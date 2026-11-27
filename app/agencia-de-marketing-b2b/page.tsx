import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Agência de marketing B2B para empresas com ticket alto e ciclo longo: geração de demanda, inbound, tráfego pago, CRM e integração com o comercial, medidos em pipeline.'

export const metadata: Metadata = {
  title: 'Agência de Marketing B2B: demanda e pipeline previsíveis | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Agência de Marketing B2B', description: DESC, path: '/agencia-de-marketing-b2b', subtitle: 'Marketing B2B' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/agencia-de-marketing-b2b"
      serviceType="Marketing B2B"
      breadcrumb="Agência de Marketing B2B"
      metaDescription={DESC}
      tag="Marketing B2B"
      headline="Agência de Marketing B2B que gera"
      headlineHighlight="pipeline, não só lead."
      subheadline="Quem vende para empresas não precisa de mais seguidores. Precisa de reuniões com quem decide, oportunidades que avançam e um funil que o comercial consegue prever. É isso que estruturamos."
      introTitle="B2B se mede em oportunidade, não em clique"
      intro="Em vendas B2B, poucas oportunidades valem muito, o ciclo leva meses e a decisão passa por várias pessoas. Por isso o marketing B2B que funciona não é o que gera mais cadastros, é o que gera conversas com as empresas certas e acompanha essas conversas até o contrato. A OxBrand é uma agência de marketing B2B que junta geração de demanda, inbound marketing, tráfego pago segmentado por cargo e setor, conteúdo técnico e CRM em um sistema único, integrado ao time comercial. Atendemos indústrias, distribuidores, empresas de tecnologia, consultorias e prestadores de serviço de alto ticket em todo o Brasil, com o método OX Growth Engineering, aplicado em mais de 450 marcas."
      steps={[
        { number: '01', title: 'Perfil de cliente ideal', description: 'Definimos com o comercial quais empresas, setores, portes e cargos são o alvo. Tudo o que vem depois mira esse perfil.' },
        { number: '02', title: 'Mensagem por decisor', description: 'Quem usa, quem aprova e quem paga têm objeções diferentes. Cada um recebe a mensagem que reduz o risco percebido dele.' },
        { number: '03', title: 'Geração de demanda', description: 'Google Ads para quem já procura a solução, LinkedIn e Meta para alcançar decisores por cargo e setor, e conteúdo para quem ainda está pesquisando.' },
        { number: '04', title: 'Nutrição do ciclo longo', description: 'Conteúdo e automação que mantêm a empresa presente durante os meses de decisão, sem deixar a oportunidade esfriar.' },
        { number: '05', title: 'Passagem para vendas', description: 'Critério claro de lead qualificado, entrega ao vendedor com contexto e acompanhamento no CRM até o contrato.' },
        { number: '06', title: 'Medição de pipeline', description: 'Oportunidades geradas, taxa de avanço por etapa, custo por oportunidade e receita influenciada pelo marketing.' },
      ]}
      features={[
        { title: 'Inbound marketing B2B', description: 'Conteúdo e SEO que atraem empresas no momento da pesquisa e as levam até a conversa com o comercial.' },
        { title: 'Tráfego pago B2B', description: 'Google, LinkedIn e Meta com segmentação por cargo, setor e porte, e verba concentrada em quem decide.' },
        { title: 'CRM e automação comercial', description: 'Funil desenhado para o seu processo de venda, com cadências, tarefas e histórico de cada conta.' },
        { title: 'Páginas e materiais de decisão', description: 'Landing pages, estudos de caso e apresentações que respondem às objeções técnicas e financeiras.' },
      ]}
      audience={{
        isFor: [
          'Sua empresa vende para outras empresas, com ticket alto e ciclo de venda de semanas ou meses.',
          'Você tem time comercial e quer oportunidades qualificadas, não listas de contatos frios.',
          'Hoje a empresa cresce por indicação e precisa de um canal de aquisição previsível.',
        ],
        isNotFor: [
          'Busca volume de leads baratos sem critério de qualificação.',
          'Espera fechar contratos complexos em 30 dias a partir do primeiro anúncio.',
          'Não tem ninguém para atender e acompanhar as oportunidades geradas.',
        ],
      }}
      relatedLinks={[
        { label: 'Inbound Marketing B2B', href: '/solucoes/inbound-marketing' },
        { label: 'Marketing para Indústria', href: '/marketing-para-industria' },
        { label: 'Gestão de Tráfego Pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
      ]}
      ctaHeading="Quer um funil B2B que o comercial consegue prever?"
      faqItems={[
        { q: 'O que faz uma agência de marketing B2B?', a: 'Gera e acompanha oportunidades de venda para empresas que vendem para outras empresas. Na prática: define o perfil de cliente ideal com o comercial, cria demanda com conteúdo e anúncios segmentados, nutre o ciclo longo de decisão e entrega ao vendedor oportunidades qualificadas, medindo tudo em pipeline e receita.' },
        { q: 'Qual a diferença entre marketing B2B e B2C?', a: 'No B2C, a compra é rápida, individual e muitas vezes emocional. No B2B, é longa, racional e feita por várias pessoas. Muda o canal, a mensagem, o conteúdo e a métrica: em B2B, o que importa é quantas oportunidades avançam, não quantos cadastros entram.' },
        { q: 'LinkedIn Ads funciona para B2B?', a: 'Funciona para alcançar decisores por cargo, setor e porte, com custo por clique mais alto que outras redes. Costuma render melhor combinado com Google Ads, que capta quem já procura a solução, e com conteúdo que sustenta a decisão.' },
        { q: 'Em quanto tempo o marketing B2B traz resultado?', a: 'Anúncios geram as primeiras oportunidades em semanas. O resultado em contratos acompanha o seu ciclo de venda, que em B2B costuma ser de meses. Por isso acompanhamos indicadores por etapa desde o primeiro mês.' },
        { q: 'Vocês atendem empresas B2B de qualquer cidade?', a: 'Sim. A OxBrand tem sede em Mogi das Cruzes (SP) e atende empresas B2B em todo o Brasil e em outros países.' },
      ]}
    />
  )
}
