import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Gestão de Tráfego Pago e Performance | OxBrand Agência',
  description: 'Gestão de Performance e Tráfego Pago: Resultados Mensuráveis para o seu Negócio em Google ADS, Meta ADS, TikTok ADS, LinkedIn ADS e outras plataformas.',
  ...pageOg({
    title: 'Gestão de Tráfego Pago · OxBrand',
    description: 'Google Ads, Meta Ads, TikTok Ads e LinkedIn Ads. Da estratégia ao resultado: rastreio, mensuração e otimização contínua.',
    path: '/solucoes/gestao-de-trafego-pago',
    subtitle: 'Tráfego Pago & Performance',
  }),
}

export default function GestaoDeTrafegoPagoPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Gestão de Tráfego Pago"
      slug="gestao-de-trafego-pago"
      metaDescription="Gestão de Performance e Tráfego Pago em Google ADS, Meta ADS, TikTok ADS e LinkedIn ADS. Da estratégia ao resultado final, com rastreio, mensuração e otimização contínua."
      tag="Aquisição com método"
      headline="Tráfego Pago com"
      headlineHighlight="Resultados Mensuráveis."
      subheadline="Gestão de Performance e Tráfego Pago em Google ADS, Meta ADS, TikTok ADS e LinkedIn ADS. Da estratégia ao resultado final. Tráfego Pago é sobre pessoas."
      introTitle="Equipe dedicada ao seu resultado"
      intro="Atingir o público certo, na hora certa, é o segredo para o sucesso no ambiente digital. Nossa Gestão de Performance vai além de gerenciar campanhas: ela transforma o seu investimento em resultados concretos. Entregamos uma estratégia completa para gerar mais leads, vendas e visibilidade, com foco total em ROI e crescimento previsível. Não se trata apenas de aparecer, mas de aparecer para as pessoas certas, no momento certo, com a mensagem mais persuasiva."
      stepsImage="/images/solucoes/trafego-pago-metodo.png"
      stepsAlt="Método de gestão de tráfego pago da OxBrand em 7 etapas"
      ctaHeading="Verba não é estratégia. Sem processo, tráfego pago é aposta."
      faqItems={[
        {
          q: 'Qual o investimento mínimo em mídia?',
          a: 'Depende do seu segmento, ticket médio e objetivo. Como regra, o valor precisa ser suficiente para gerar dados de decisão; abaixo disso, a campanha vira aposta. Definimos o piso no diagnóstico, com base no que faz sentido pro seu caso, não num pacote genérico.',
        },
        {
          q: 'Em quanto tempo vejo resultado?',
          a: 'Sinais de tráfego aparecem nas primeiras semanas. Resultado de negócio, ou seja, venda e não clique, depende de oferta validada, rastreio correto e alinhamento com o comercial. Trabalhamos com ciclos de otimização semanais: cada semana o dado corrige a rota.',
        },
        {
          q: 'Vocês criam os criativos ou eu envio?',
          a: 'Fazemos os dois, dependendo do escopo contratado. Criamos copy e criativos alinhados ao posicionamento e ao funil, não apenas peças bonitas. Se você tiver material próprio, analisamos o que aproveitar e o que adaptar antes de veicular.',
        },
        {
          q: 'Como sei que o resultado veio do tráfego e não de outra coisa?',
          a: 'Configuramos rastreio completo desde o início: pixels, conversões offline, UTMs e integração com o CRM. Você acompanha custo por lead, custo por venda e ROAS por canal, não métricas de vaidade. A atribuição fica clara, auditável e ligada à receita real.',
        },
        {
          q: 'O que acontece se eu pausar as campanhas?',
          a: 'O tráfego para imediatamente e o histórico de aprendizado da plataforma começa a deteriorar. Pausas longas exigem novo período de aprendizado quando as campanhas voltam. Por isso, planejamos a verba e o calendário junto com você para evitar interrupções que desperdicem o que foi construído.',
        },
      ]}
      audience={{
        isFor: [
          'Empresas com oferta validada que querem escalar',
          'Quem já investe e não sabe qual canal traz retorno',
          'Quem precisa de rastreio e mensuração real',
          'Quem tem time comercial pronto para atender o volume',
        ],
        isNotFor: [
          'Quem ainda não validou a oferta',
          'Quem não tem estrutura para atender os leads gerados',
          'Quem espera retorno na primeira semana',
        ],
      }}
      steps={[
        {
          number: '01',
          title: 'Análise e Planejamento',
          description:
            'Entendemos seus objetivos e público, definindo os canais e a verba de forma estratégica. Estudo completo de concorrência, sazonalidade e oportunidades antes de investir um centavo.',
        },
        {
          number: '02',
          title: 'Criação de Anúncios',
          description:
            'Desenvolvemos criativos e copies persuasivas focados em performance e conversão. Cada peça tem função dentro do funil, seja no topo, meio ou fundo, com mensagem alinhada ao momento do lead.',
        },
        {
          number: '03',
          title: 'Execução e Lançamento',
          description:
            'Colocamos as campanhas no ar garantindo que todas as configurações de pixel, rastreio, segmentação e lances estejam perfeitas para maximizar os resultados desde o primeiro dia.',
        },
        {
          number: '04',
          title: 'Otimização Contínua',
          description:
            'Monitoramos cada campanha em tempo real, realizando ajustes diários para melhorar os resultados. Testes A/B constantes de criativos, públicos e lances para extrair o máximo ROI.',
        },
        {
          number: '05',
          title: 'Mensuração Avançada',
          description:
            'Utilizamos ferramentas avançadas de análise para medir o ROI e o desempenho de cada canal. Rastreamento preciso de conversões para decisões baseadas em dados, não em intuição.',
        },
        {
          number: '06',
          title: 'Relatórios e Apresentação',
          description:
            'Relatórios claros e objetivos mostrando o que foi feito, os resultados obtidos e a direção da próxima semana. Você nunca fica no escuro sobre onde o seu dinheiro está.',
        },
        {
          number: '07',
          title: 'Sinergia com Vendas',
          description:
            'Trabalhamos em conjunto com o time de vendas para garantir que os leads gerados se transformem em clientes fechados. Integração completa com CRM e automações comerciais.',
        },
      ]}
      features={[
        {
          title: 'Google Ads',
          description: 'Campanhas na rede de pesquisa, display e YouTube para capturar a intenção de quem já está procurando seu serviço ou produto.',
        },
        {
          title: 'Meta Ads',
          description: 'Anúncios segmentados no Facebook e Instagram para construir marca, gerar leads e impulsionar vendas com precisão cirúrgica.',
        },
        {
          title: 'TikTok Ads',
          description: 'Aproveitamos a força da maior plataforma de vídeos para alcançar novas audiências e criar campanhas de alto impacto e engajamento.',
        },
        {
          title: 'LinkedIn Ads',
          description: 'Campanhas estratégicas para o público B2B, gerando leads qualificados e posicionando sua empresa para decisores e executivos.',
        },
        {
          title: 'Gestão de Mídias Sociais',
          description: 'Gerenciamos a presença da sua marca nas principais plataformas com conteúdo orgânico e campanhas pagas integradas para maximizar o alcance.',
        },
        {
          title: 'Tráfego Multi-Canais',
          description: 'Uma estratégia integrada que garante que sua marca alcance potenciais clientes em todos os estágios da jornada de compra, em todos os canais.',
        },
      ]}
    />
  )
}
