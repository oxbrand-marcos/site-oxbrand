import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Agência de Inbound Marketing e Conteúdo | OxBrand',
  description: 'Sua empresa precisa de Inbound Marketing de verdade. Atraímos o público certo, convertemos visitantes em leads qualificados e nutrimos até a venda com resultados reais e previsíveis.',
  ...pageOg({
    title: 'Inbound Marketing · OxBrand',
    description: 'Atraímos o público certo, convertemos visitantes em leads qualificados e nutrimos até a venda com resultados reais e previsíveis.',
    path: '/solucoes/inbound-marketing',
    subtitle: 'Inbound Marketing',
  }),
}

export default function InboundMarketingPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Inbound Marketing"
      slug="inbound-marketing"
      metaDescription="Estratégia de inbound marketing que atrai o público certo, converte visitantes em leads qualificados e nutre até a venda, reduzindo dependência de mídia paga ao longo do tempo."
      tag="OxBrand · Inbound Marketing"
      headline="Inbound Marketing que"
      headlineHighlight="atrai, converte e vende."
      subheadline="Uma estratégia complexa e poderosa que exige a inteligência de profissionais especializados. Atraímos o público certo, convertemos visitantes em leads qualificados e nutrimos até que estejam prontos para comprar."
      introTitle="O poder da atração"
      intro="Contratar uma ferramenta é fácil, mas gerar resultados consistentes e crescentes com Inbound Marketing é o nosso trabalho. Somos a OxBrand. Oferecemos o conhecimento e a experiência que a sua empresa precisa para transformar essa estratégia em vendas reais e previsíveis. Nossa equipe é formada por profissionais de cada área do marketing digital, experts em mídia paga, criação, conteúdo, SEO, redes sociais e copywriting, garantindo uma abordagem completa e integrada para o seu negócio."
      stepsImage="/images/solucoes/inbound-marketing-metodo.png"
      stepsAlt="Método de inbound marketing da OxBrand em 6 etapas"
      ctaHeading="Tráfego que continua chegando quando você para de pagar."
      faqItems={[
        {
          q: 'Em quanto tempo o inbound começa a dar retorno?',
          a: 'Os primeiros sinais de tráfego orgânico aparecem entre 3 e 6 meses. Resultado em pipeline, ou seja, leads qualificados chegando pelo conteúdo, costuma consolidar entre 6 e 12 meses. Quem espera resultado em 30 dias está no segmento errado: inbound é construção de ativo, não campanha.',
        },
        {
          q: 'Preciso parar com tráfego pago?',
          a: 'Não. Inbound e tráfego pago funcionam melhor juntos: o pago traz volume imediato enquanto o orgânico cresce, e o orgânico reduz o custo de aquisição ao longo do tempo. O objetivo é diminuir a dependência de mídia, não eliminar o canal.',
        },
        {
          q: 'Quantos conteúdos são produzidos por mês?',
          a: 'O volume depende do escopo e da maturidade da estratégia. Começamos com menos peças bem posicionadas e aumentamos o ritmo conforme os dados mostram o que funciona. Volume sem estratégia de palavras-chave e funil é trabalho que não acumula.',
        },
        {
          q: 'Vocês cuidam também da automação de e-mail?',
          a: 'Sim. Nutrição de leads e automação de e-mail fazem parte da operação de inbound. Configuramos fluxos por estágio de funil e segmentação por interesse, integrados ao CRM para que o time comercial receba o lead no momento certo.',
        },
        {
          q: 'Como isso se conecta com o time comercial?',
          a: 'Definimos com o time comercial o perfil de lead qualificado antes de começar a produção. O conteúdo é construído para atrair esse perfil específico, e a entrega ao comercial acontece com contexto: o que o lead consumiu, qual problema ele sinalizou, em que estágio do funil ele está.',
        },
      ]}
      audience={{
        isFor: [
          'Quem quer reduzir a dependência de mídia paga',
          'Quem tem ciclo de venda longo',
          'Quem vende B2B ou alto ticket',
          'Quem tem paciência para resultado em 6 a 12 meses',
        ],
        isNotFor: [
          'Quem precisa de resultado em 30 dias',
          'Quem não tem oferta clara',
          'Quem não vai sustentar a produção de conteúdo',
        ],
      }}
      steps={[
        {
          number: '01',
          title: 'Diagnóstico e Estratégia',
          description:
            'Realizamos um diagnóstico completo do marketing digital da sua empresa. Mapeamos o público-alvo, a persona ideal e os canais mais eficientes para atrair visitantes com real potencial de compra.',
        },
        {
          number: '02',
          title: 'Atração de Tráfego Qualificado',
          description:
            'Criamos conteúdo estratégico com foco em SEO, redes sociais e mídia paga para atrair o público certo. Cada visita tem um propósito e um próximo passo claramente definido.',
        },
        {
          number: '03',
          title: 'Conversão de Visitantes em Leads',
          description:
            'Desenvolvemos landing pages, formulários e ofertas de valor que transformam visitantes anônimos em leads identificados e segmentados no seu funil de vendas.',
        },
        {
          number: '04',
          title: 'Nutrição e Relacionamento',
          description:
            'Fluxos de e-mail marketing e automações inteligentes que nutrem os leads com o conteúdo certo, no momento certo, conduzindo-os naturalmente até a decisão de compra.',
        },
        {
          number: '05',
          title: 'Conversão em Vendas',
          description:
            'Integramos a estratégia de Inbound com o time comercial, garantindo que os leads chegam prontos para a compra. Menos esforço de vendas, maior taxa de fechamento.',
        },
        {
          number: '06',
          title: 'Análise e Otimização Contínua',
          description:
            'Acompanhamento de métricas, testes A/B e otimizações periódicas para aumentar a performance da estratégia ao longo do tempo. A estratégia evolui junto com a sua empresa.',
        },
      ]}
      features={[
        {
          title: 'SEO e Conteúdo Orgânico',
          description: 'Artigos, guias e conteúdos otimizados para atrair visitantes qualificados via Google sem depender exclusivamente de anúncios pagos.',
        },
        {
          title: 'Automação de Marketing',
          description: 'Fluxos inteligentes que nutrem leads automaticamente, entregando o conteúdo certo para cada etapa do funil de vendas.',
        },
        {
          title: 'Landing Pages de Alta Conversão',
          description: 'Páginas criadas com foco total em captura de leads, com copywriting persuasivo, design UX e integração direta com o CRM.',
        },
        {
          title: 'E-mail Marketing Estratégico',
          description: 'Campanhas segmentadas que educam, engajam e convertem a base de contatos em clientes com mensagens personalizadas e relevantes.',
        },
        {
          title: 'Gestão de Redes Sociais',
          description: 'Conteúdo orgânico que posiciona a sua marca como autoridade, constrói audiência e alimenta o topo do funil de Inbound com consistência.',
        },
        {
          title: 'Análise e Relatórios',
          description: 'Dashboards e relatórios completos com as métricas que importam: tráfego, conversão, CAC, LTV e ROI de cada canal.',
        },
      ]}
    />
  )
}
