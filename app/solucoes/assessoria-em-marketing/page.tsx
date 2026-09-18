import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Consultoria e Assessoria de Marketing Digital | OxBrand',
  description: 'Consultoria de marketing digital com execução junto: diagnóstico, estratégia e integração com o comercial. Direção, não só mais tarefas. Diagnóstico gratuito.',
  ...pageOg({
    title: 'Consultoria e Assessoria de Marketing · OxBrand',
    description: 'Consultoria de marketing digital que não para no diagnóstico: planejamento, execução e otimização com responsabilidade sobre o resultado.',
    path: '/solucoes/assessoria-em-marketing',
    subtitle: 'Consultoria de Marketing',
  }),
}

export default function AssessoriaEmMarketingPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Consultoria e Assessoria em Marketing"
      slug="assessoria-em-marketing"
      metaDescription="Consultoria de marketing digital com execução junto: diagnóstico, plano, execução e otimização, com responsabilidade sobre o resultado."
      tag="Direção, não mais tarefas"
      headline="Consultoria de marketing que não para"
      headlineHighlight="no diagnóstico."
      subheadline="Consultoria de marketing digital costuma terminar onde o trabalho começa: um diagnóstico, um plano em slides, e a sua equipe olhando para tudo aquilo sem saber por onde começar. Aqui o diagnóstico é o início. A gente fica para executar junto, com o time comercial dentro da conversa."
      introTitle="Consultoria com execução junto"
      intro="Você já investiu em marketing, mas não vê o retorno? Tentou estruturar um time interno ou contratou agências que não entregavam o que prometiam? Você não precisa mais tentar sozinho. A nossa consultoria vai além do plano de ação: o time executa, otimiza e gerencia todas as frentes, com metas claras e responsabilidade sobre o resultado. É consultoria com mão na massa, e é por isso que a gente chama de assessoria."
      stepsImage="/images/solucoes/assessoria-processo.jpg"
      stepsAlt="Metodologia OxBrand: como trabalhamos em 4 etapas, Análise e Diagnóstico, Estratégia e Plano de Ação, Execução e Otimização, Relatórios e Alinhamento"
      ctaHeading="Você não precisa de mais tarefas. Precisa de direção."
      relatedLinks={[
        { label: 'Gestão de tráfego pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
        { label: 'Inbound marketing', href: '/solucoes/inbound-marketing' },
      ]}
      faqItems={[
        {
          q: 'Quanto custa uma consultoria de marketing digital?',
          a: 'Depende de escopo e de tempo de contrato, e quem responde com um número fixo sem te ouvir está chutando. O que dá para dizer com honestidade: consultoria pura, só diagnóstico e plano, costuma ser um projeto fechado de algumas semanas. Consultoria com execução é mensal e o valor acompanha o tamanho da operação. No diagnóstico gratuito a gente chega no número da sua realidade antes de qualquer proposta.',
        },
        {
          q: 'Qual a diferença entre consultoria de marketing e assessoria?',
          a: 'Consultoria entrega direção e termina no plano. Assessoria continua junto na execução e responde pelo resultado. A OxBrand trabalha no segundo formato, porque plano sem execução vira slide guardado e execução sem direção vira tarefa sem destino.',
        },
        {
          q: 'Vale a pena contratar consultoria de marketing digital para empresa pequena?',
          a: 'Vale quando o problema é de direção, não de volume. Se a empresa já investe em marketing e não sabe dizer o que funciona, a consultoria paga sozinha em poucos meses. Se ainda não existe nenhuma operação rodando, é melhor começar com uma estrutura mínima e trazer a consultoria quando houver dado para analisar.',
        },
        {
          q: 'Em quanto tempo uma consultoria de marketing mostra resultado?',
          a: 'Diagnóstico e plano em duas a três semanas. Os primeiros sinais de operação, como custo por lead e taxa de resposta do comercial, aparecem no primeiro mês. Resultado de receita atribuída depende do ciclo de venda do seu negócio, e é a primeira coisa que a gente mapeia justamente para não prometer prazo que não existe.',
        },
        {
          q: 'O que é uma assessoria de marketing?',
          a: 'É um serviço contínuo de estratégia e acompanhamento: planejamento, rotina de execução e alinhamento entre marketing e comercial. Para quem quer clareza e direção, não apenas mais uma lista de tarefas.',
        },
        {
          q: 'Qual a diferença entre assessoria e gestão de tráfego?',
          a: 'A gestão de tráfego cuida especificamente dos anúncios. A assessoria é o guarda-chuva estratégico: define para onde crescer, integra os canais (tráfego, conteúdo, CRM) e conecta tudo ao comercial. Uma orquestra a outra.',
        },
        {
          q: 'Para quem a assessoria de marketing é indicada?',
          a: 'Para empresas que já investem em marketing mas sentem falta de estrutura e direção, geram tarefas soltas sem clareza de resultado. A assessoria organiza a operação e conecta as ações a metas de negócio.',
        },
        {
          q: 'Como funciona a assessoria da OxBrand?',
          a: 'Seguimos o método OX Growth Engineering (70% estratégia, 30% execução): direção estratégica, estrutura de demanda, decisão e resultado, com reuniões objetivas e otimização semanal. Foco em avanço de negócio, não em relatório.',
        },
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
            'É a hora de colocar a mão na massa. Nosso time de especialistas implementa o plano de ação, do zero ao resultado. Monitoramos cada campanha e cada métrica em tempo real, fazendo otimizações constantes para garantir a alta performance do seu investimento.',
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
