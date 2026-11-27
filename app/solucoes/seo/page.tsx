import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

const DESC = 'Agência de SEO e GEO em Mogi das Cruzes com atuação nacional: SEO técnico, conteúdo, SEO local no Google Maps e presença nas respostas de IA, medidos em contato e venda.'

export const metadata: Metadata = {
  title: 'Agência de SEO e GEO em Mogi das Cruzes | OxBrand',
  description: DESC,
  ...pageOg({
    title: 'Agência de SEO e GEO · OxBrand',
    description: DESC,
    path: '/solucoes/seo',
    subtitle: 'SEO, SEO local e GEO',
  }),
}

export default function SeoPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Agência de SEO e GEO"
      slug="seo"
      serviceType="Otimização para mecanismos de busca (SEO) e para respostas de IA (GEO)"
      metaDescription={DESC}
      tag="SEO, SEO local e GEO"
      headline="Agência de SEO e GEO para ser encontrado"
      headlineHighlight="no Google e nas respostas de IA."
      subheadline="Seu cliente pesquisa no Google, no Maps e, cada vez mais, pergunta ao ChatGPT. Estruturamos o site, o conteúdo e a ficha do Google para que a sua empresa apareça nos três lugares, e medimos o resultado em contato, não em posição."
      introTitle="Encontrabilidade é estrutura, não sorte"
      intro="SEO não é colocar palavra-chave no texto. É fazer o Google e as ferramentas de IA entenderem, sem esforço, quem você é, o que você vende, onde você atende e por que confiar em você. A OxBrand faz isso com o mesmo método que aplicamos no nosso próprio site: auditoria técnica, arquitetura de páginas por intenção de busca, conteúdo escrito por quem opera o assunto, SEO local no Google Maps e preparação para buscadores com IA (GEO), com llms.txt, dados estruturados e respostas diretas que os modelos conseguem citar. Somos agência certificada SEMrush, temos sede em Mogi das Cruzes e atendemos empresas de todo o Brasil. Cada mês fecha com um relatório que mostra o que subiu, o que caiu, por quê, e quantos contatos vieram da busca orgânica."
      steps={[
        { number: '01', title: 'Auditoria técnica', description: 'Rastreamento, indexação, velocidade, canonical, sitemap, dados estruturados e erros que impedem o Google de entender o site. Corrigimos antes de produzir qualquer conteúdo.' },
        { number: '02', title: 'Mapa de intenção de busca', description: 'Levantamos o que o seu cliente pesquisa, com volume e dificuldade reais, e definimos qual página responde a cada busca. Uma página por intenção, sem uma competir com a outra.' },
        { number: '03', title: 'Páginas de serviço e conteúdo', description: 'Páginas comerciais para quem quer contratar e artigos para quem ainda está pesquisando, escritos com experiência de operação real, que é o que o Google premia.' },
        { number: '04', title: 'SEO local e Google Maps', description: 'Ficha do Google completa, categorias certas, fotos, posts e rotina de avaliações. É o que coloca a empresa no pacote de mapas da sua cidade.' },
        { number: '05', title: 'GEO: presença em IA', description: 'Estrutura que os buscadores com IA leem e citam: llms.txt, perguntas frequentes com schema, respostas diretas e menções em fontes que os modelos consultam.' },
        { number: '06', title: 'Medição e ajuste mensal', description: 'Posições diárias por cidade e dispositivo, cliques e impressões do Search Console, presença em respostas de IA e, principalmente, contatos gerados pela busca orgânica.' },
      ]}
      features={[
        { title: 'SEO técnico', description: 'Site rápido, indexável e sem erros. Corrigimos o que impede o crescimento antes de investir em conteúdo.' },
        { title: 'SEO local', description: 'Para quem atende uma cidade ou região: ficha do Google, páginas por cidade e estratégia de avaliações.' },
        { title: 'Conteúdo que ranqueia e vende', description: 'Artigos e páginas guiados por dados de busca, com chamada para a página comercial certa.' },
        { title: 'GEO e AI Overviews', description: 'Preparação do site para ser citado no ChatGPT, no Gemini, no Perplexity e nas visões gerais de IA do Google.' },
        { title: 'Monitoramento de posições', description: 'Rastreamento diário das palavras que importam, por cidade e por dispositivo, com alerta de queda.' },
        { title: 'Relatório que liga busca a venda', description: 'Contatos e vendas vindos da busca orgânica, integrados ao CRM, para saber quanto o SEO devolve.' },
      ]}
      audience={{
        isFor: [
          'Empresas que dependem de anúncio e querem um canal que não para quando a verba acaba.',
          'Negócios locais, como clínicas, escritórios e prestadores de serviço, que precisam aparecer na própria cidade.',
          'Empresas B2B com ticket alto, em que um contato orgânico por mês já paga o investimento.',
          'Quem quer ser citado pelas ferramentas de IA quando o cliente pergunta quem contratar.',
        ],
        isNotFor: [
          'Quem precisa de resultado em 30 dias. SEO consistente leva de 6 a 12 meses.',
          'Quem quer volume de artigos genéricos gerados em massa, que hoje o Google pune.',
          'Quem não tem uma oferta clara para a página comercial vender.',
        ],
      }}
      relatedLinks={[
        { label: 'Inbound Marketing', href: '/solucoes/inbound-marketing' },
        { label: 'Desenvolvimento de Sites', href: '/solucoes/desenvolvimento-de-sites' },
        { label: 'Marketing para Clínicas de Estética', href: '/marketing-para-clinicas-de-estetica' },
        { label: 'Agência em Mogi das Cruzes', href: '/agencia-de-marketing-digital-mogi-das-cruzes' },
      ]}
      ctaHeading="Quer saber onde o seu site perde clientes na busca?"
      faqItems={[
        { q: 'O que faz uma agência de SEO?', a: 'Corrige o que impede o site de ser bem entendido pelo Google, organiza as páginas por intenção de busca, produz conteúdo que responde ao que o cliente pesquisa, cuida da ficha do Google e mede posições, cliques e contatos. O objetivo é virar um canal de aquisição que não depende de verba de mídia.' },
        { q: 'O que é GEO?', a: 'GEO (Generative Engine Optimization) é a preparação do site e da marca para serem citados nas respostas de ferramentas de IA, como ChatGPT, Gemini, Perplexity e as visões gerais de IA do Google. Envolve conteúdo com respostas diretas, dados estruturados, llms.txt e presença em fontes que os modelos consultam. SEO bem feito é a base do GEO.' },
        { q: 'Quanto tempo o SEO leva para dar resultado?', a: 'Correções técnicas e ajustes em páginas que já aparecem na segunda página podem mostrar efeito em semanas. Um canal orgânico consistente, gerando contatos todo mês, costuma levar de 6 a 12 meses, conforme a concorrência do seu mercado.' },
        { q: 'Vocês fazem SEO para clínicas de estética?', a: 'Sim. Clínicas são um dos segmentos que mais atendemos. Para clínica, o peso maior está em SEO local: ficha do Google, avaliações, páginas por procedimento e por cidade, sempre dentro das regras de publicidade da área da saúde.' },
        { q: 'Vocês atendem empresas fora de Mogi das Cruzes?', a: 'Sim. A sede é em Mogi das Cruzes, no Alto Tietê, e atendemos empresas de todo o Brasil. Para negócios locais de outras cidades, fazemos o SEO local da cidade do cliente.' },
        { q: 'SEO substitui o tráfego pago?', a: 'Não, complementa. O tráfego pago traz volume imediato e dado rápido; o SEO constrói um canal que reduz o custo de aquisição ao longo do tempo. As empresas que mais crescem usam os dois, com o pago testando mensagens que depois viram conteúdo orgânico.' },
      ]}
    />
  )
}
