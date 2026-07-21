import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Assessoria de Marketing e Gestão Estratégica | OxBrand',
  description: 'Com a nossa Assessoria de Marketing, planejamos, executamos e otimizamos campanhas que geram resultados de verdade, com performance digital, inteligência de dados e criatividade.',
  ...pageOg({
    title: 'Assessoria em Marketing · OxBrand',
    description: 'Planejamento, execução e otimização de campanhas com performance digital, inteligência de dados e criatividade. Com responsabilidade sobre o resultado.',
    path: '/solucoes/assessoria-em-marketing',
    subtitle: 'Assessoria de Marketing',
  }),
}

export default function AssessoriaEmMarketingPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Assessoria em Marketing"
      slug="assessoria-em-marketing"
      metaDescription="Com a nossa Assessoria de Marketing, planejamos, executamos e otimizamos campanhas que geram resultados de verdade, com performance digital, inteligência de dados e criatividade."
      tag="Direção, não mais tarefas"
      headline="Assessoria de Marketing que entrega direção,"
      headlineHighlight="não mais tarefas."
      subheadline="Com a nossa Assessoria de Marketing, planejamos, executamos e otimizamos campanhas de marketing que geram resultados de verdade, com performance digital, inteligência de dados e criatividade, fortalecendo o branding da sua marca."
      introTitle="Assessoria completa"
      intro="Você já investiu em marketing, mas não vê o retorno? Tentou estruturar um time interno ou contratou agências que não entregavam o que prometiam? Você não precisa mais tentar sozinho. A OxBrand é a solução definitiva. Nossa assessoria vai além do plano de ação: o time executa, otimiza e gerencia todas as frentes, com metas claras e responsabilidade sobre o resultado."
      stepsImage="/images/wp/assessoria-de-marketing.webp"
      stepsAlt="Método de assessoria em marketing da OxBrand em 4 etapas"
      ctaHeading="Você não precisa de mais tarefas. Precisa de direção."
      faqItems={[
        {
          q: 'Qual a diferença entre assessoria e contratar um serviço avulso?',
          a: 'Serviço avulso entrega uma peça ou campanha. Assessoria entrega direção: diagnóstico do negócio, priorização de canal, integração com o comercial e otimização contínua. A diferença está em quem decide o que fazer, não apenas quem executa.',
        },
        {
          q: 'Vocês executam ou só planejam?',
          a: 'Planejamos e executamos. Não entregamos um documento de estratégia para você correr atrás de quem faça. O time da OxBrand opera junto com você, com responsabilidade sobre os indicadores combinados.',
        },
        {
          q: 'Com que frequência temos reunião?',
          a: 'Reuniões quinzenais de alinhamento estratégico são o padrão, com comunicação assíncrona documentada entre elas. Reuniões semanais são possíveis em projetos com maior volume de decisões. Frequência de reunião não é indicador de qualidade: o que importa é que os dados estejam sempre acessíveis.',
        },
        {
          q: 'Preciso ter time interno de marketing?',
          a: 'Não. A assessoria funciona como extensão do seu time ou como o próprio time, dependendo do momento da empresa. Se você já tiver pessoas internas, trabalhamos em conjunto para capacitar e dar direção.',
        },
        {
          q: 'Qual o prazo mínimo de contrato?',
          a: 'O prazo mínimo é de 6 meses. Marketing estratégico leva tempo para maturar: diagnóstico, ajuste de posicionamento e construção de processo comercial não se provam em 30 dias. As condições ficam claras no contrato, sem amarra além do que faz sentido pro seu ciclo.',
        },
      ]}
      audience={{
        isFor: [
          'Empresas que já investem em marketing mas não sabem dizer o que funciona',
          'Quem tem time interno sem direção estratégica',
          'Quem já trocou de agência mais de uma vez',
          'Quem precisa alinhar marketing e comercial',
          'Quem quer previsibilidade, não campanhas avulsas',
        ],
        isNotFor: [
          'Quem busca só execução pontual',
          'Quem não tem processo comercial mínimo',
          'Quem quer resultado sem participar das decisões',
        ],
      }}
      steps={[
        {
          number: '1.',
          title: 'Análise e Diagnóstico',
          description:
            'Nós mergulhamos no seu negócio para entender o cenário atual. Realizamos uma análise completa do seu mercado, concorrência e dados para identificar as maiores oportunidades de crescimento. É a nossa base para construir uma estratégia sólida.',
        },
        {
          number: '2.',
          title: 'Estratégia e Plano de Ação',
          description:
            'Com os dados em mãos, criamos um plano de marketing 100% personalizado e detalhado. Definimos as metas, os canais de atuação e as ações exatas que o nosso time vai executar para transformar os seus objetivos em resultados reais.',
        },
        {
          number: '3.',
          title: 'Execução e Otimização',
          description:
            'É a hora de colocar a mão na massa. Nossa equipe de especialistas implementa o plano de ação, do zero ao resultado. Monitoramos cada campanha e cada métrica em tempo real, fazendo otimizações constantes para garantir a alta performance do seu investimento.',
        },
        {
          number: '4.',
          title: 'Relatórios e Alinhamento',
          description:
            'Você nunca fica no escuro. Apresentamos relatórios detalhados e transparentes, que mostram o desempenho de cada ação. Mantemos um alinhamento constante, garantindo que o seu negócio esteja sempre no caminho certo para o crescimento.',
        },
      ]}
    />
  )
}
