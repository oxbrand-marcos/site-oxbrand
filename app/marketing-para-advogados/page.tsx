import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Marketing jurídico para advogados e escritórios, dentro do Provimento 205/2021 da OAB: autoridade, conteúdo e captação ética de clientes. Diagnóstico gratuito.'

export const metadata: Metadata = {
  title: 'Marketing para Advogados: ético e eficaz | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing para Advogados', description: DESC, path: '/marketing-para-advogados', subtitle: 'Marketing Jurídico' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/marketing-para-advogados"
      serviceType="Marketing jurídico"
      breadcrumb="Marketing para Advogados"
      metaDescription={DESC}
      tag="Marketing Jurídico"
      headline="Marketing para Advogados: autoridade e clientes,"
      headlineHighlight="dentro das regras da OAB"
      subheadline="Nem tímido a ponto de não gerar cliente, nem agressivo a ponto de expor o escritório. Marketing jurídico com autoridade e segurança ética, dentro do Provimento 205/2021 da OAB."
      introTitle="Autoridade, não mercantilização"
      intro="Todo advogado sabe que precisa ser encontrado, e todo advogado tem medo de cruzar a linha da OAB. É aí que a maioria das agências erra: ou faz um marketing tímido demais, que não gera cliente, ou agressivo demais, que expõe o escritório a um processo ético. A OxBrand respeita o Provimento 205/2021: nada de mercantilização, sensacionalismo ou promessa de resultado. A régua é simples: construímos autoridade, não vendemos ações. Todo conteúdo passa por essa lente antes de ir ao ar, e a estratégia é revisada com você para que o escritório fique protegido."
      steps={[
        { number: '01', title: 'Conteúdo de autoridade', description: 'Artigos e materiais que respondem às dúvidas reais de quem tem um problema jurídico. Quem esclarece, é procurado.' },
        { number: '02', title: 'SEO jurídico', description: 'Sua página encontrada por quem busca a área do seu escritório, sem depender de anúncio agressivo.' },
        { number: '03', title: 'Copy sóbria e técnica', description: 'Textos que informam e transmitem competência, sem promessa nem apelo emocional barato.' },
        { number: '04', title: 'CRM e atendimento', description: 'O contato que chega não se perde: funil organizado, resposta rápida e acompanhamento profissional.' },
      ]}
      features={[
        { title: 'Direito Trabalhista', description: 'Conteúdo e presença para escritórios trabalhistas, no tom técnico e ético que a área exige.' },
        { title: 'Direito Empresarial', description: 'Autoridade para quem assessora empresas, societário e contencioso estratégico.' },
        { title: 'Direito Tributário', description: 'Posicionamento para uma área técnica, com conteúdo que educa e gera confiança.' },
        { title: 'Direito de Família', description: 'Comunicação sensível e sóbria para um público que decide pela confiança.' },
        { title: 'Previdenciário e Imobiliário', description: 'Captação por relevância nas áreas de maior busca do público final.' },
        { title: 'Escritórios full-service', description: 'Estratégia integrada para bancas com múltiplas áreas de atuação.' },
      ]}
      audience={{
        isFor: [
          'Você quer ser encontrado pelos clientes certos, com autoridade.',
          'Faz questão de crescer respeitando o Código de Ética da OAB.',
          'Entende que, no Direito, reputação é o ativo mais valioso.',
        ],
        isNotFor: [
          'Procura captação agressiva ou promessa de ganho de causa.',
          'Quer comparar-se a colegas ou tratar o serviço como mercadoria.',
          'Espera resultado sem construção de autoridade ao longo do tempo.',
        ],
      }}
      relatedLinks={[
        { label: 'Inbound Marketing', href: '/solucoes/inbound-marketing' },
        { label: 'Copywriting e Redação', href: '/solucoes/copywriting-e-redacao' },
        { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
        { label: 'Agência em Mogi das Cruzes', href: '/agencia-de-marketing-digital-mogi-das-cruzes' },
      ]}
      ctaHeading="Pronto para ser encontrado pelos clientes certos?"
      faqItems={[
        { q: 'Advogado pode fazer marketing digital?', a: 'Pode, sim, desde que dentro do Provimento 205/2021 da OAB. É permitido marketing de conteúdo informativo, presença digital sóbria e publicidade com moderação. O que é vedado é a captação mercantilizada, a promessa de resultado e o sensacionalismo.' },
        { q: 'O que não pode no marketing jurídico?', a: 'Promessa de ganho de causa, comparação com colegas, sensacionalismo, tratar o serviço como mercadoria e captação agressiva de clientela. Todo o nosso trabalho é desenhado para ficar do lado seguro dessa linha.' },
        { q: 'Como um escritório consegue clientes pela internet, então?', a: 'Construindo autoridade. Conteúdo que educa sobre direitos faz com que quem tem um problema jurídico encontre e confie no seu escritório, de forma ética e sustentável.' },
        { q: 'Vocês atendem escritórios de fora de Mogi das Cruzes?', a: 'Sim. Somos uma agência de marketing digital em Mogi das Cruzes com atuação nacional, atendemos advogados e escritórios em todo o Brasil.' },
      ]}
    />
  )
}
