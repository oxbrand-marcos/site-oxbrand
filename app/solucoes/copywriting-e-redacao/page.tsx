import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Copywriting e Redação Publicitária | OxBrand Performance',
  description: 'Transformamos palavras em ativo de conversão: copywriting e redação estratégica que atraem, engajam e convertem, integrados ao seu funil.',
  ...pageOg({
    title: 'Copywriting e Redação Estratégica · OxBrand',
    description: 'Transformamos palavras em ativos de conversão. Copywriting integrado ao funil de marketing de performance.',
    path: '/solucoes/copywriting-e-redacao',
    subtitle: 'Copywriting & Conteúdo',
  }),
}

export default function CopywritingERedacaoPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Copywriting e Redação"
      slug="copywriting-e-redacao"
      metaDescription="Transformamos palavras em ativos de conversão. Copywriting e redação estratégica para atrair, engajar e converter, integrado ao funil de marketing de performance."
      tag="Conteúdo que converte"
      headline="Se o conteúdo não move o leitor,"
      headlineHighlight="é só texto."
      subheadline="Se o seu conteúdo não gera resultados, ele é apenas texto. Nós transformamos palavras em um ativo poderoso, capaz de atrair, engajar e, principalmente, converter. Descubra como o Copywriting e a Redação Estratégica alavancam seu Marketing de Performance."
      introTitle="Conteúdo que converte"
      intro="Muitas empresas focam apenas na quantidade, mas o que realmente importa é a qualidade. Enxergamos a comunicação como uma ferramenta de Marketing de Performance, onde cada frase tem um propósito: levar o seu cliente ideal à próxima etapa. Nosso trabalho de Redação vai muito além de gramática e concisão: ele constrói a autoridade da sua marca. Já o Copywriting é a arte de produzir textos persuasivos que geram ações imediatas, seja um clique, um cadastro ou uma venda. Juntos, esses dois pilares criam um ecossistema de conteúdo imbatível."
      stepsImage="/images/solucoes/copywriting-processo.jpg"
      stepsAlt="Método de copywriting e redação da OxBrand em 4 etapas"
      ctaHeading="Conteúdo não serve para engajar. Serve para acelerar a decisão."
      faqItems={[
        {
          q: 'Qual a diferença entre copywriting e redação publicitária?',
          a: 'Redação publicitária cria a peça que comunica a marca; copywriting é a escrita orientada à conversão, ligada ao funil e à oferta. Na OxBrand os dois andam juntos: texto que comunica e move o leitor à ação.',
        },
        {
          q: 'Vocês escrevem para qualquer segmento?',
          a: 'Atendemos B2B, B2C, serviços de alto ticket, varejo e e-commerce. O que importa não é o segmento, mas a clareza da oferta e do público. Antes de escrever uma linha, entendemos o que o negócio vende, para quem e qual objeção precisa ser quebrada.',
        },
        {
          q: 'Como funciona a aprovação dos textos?',
          a: 'Entregamos um briefing de conteúdo para validação antes de escrever, para garantir que o tom, o argumento e o posicionamento estão corretos. Depois disso, o texto passa por revisão interna antes de ir para você. O processo reduz retrabalho e não depende de idas e vindas sem critério.',
        },
        {
          q: 'Quantas revisões estão inclusas?',
          a: 'Duas rodadas de revisão por peça. Se a terceira for necessária por mudança de escopo, alinhamos antes de fazer. A maioria dos projetos fecha na segunda rodada porque o briefing foi feito com rigor.',
        },
        {
          q: 'Vocês usam IA na produção?',
          a: 'Usamos IA como ferramenta de pesquisa e de primeiro rascunho em contextos específicos. O texto final passa por revisão humana com foco em tom de voz, argumento e estratégia. Não entregamos output bruto de ferramenta sem curadoria.',
        },
        {
          q: 'Como medem se o texto funcionou?',
          a: 'Definimos a métrica antes de escrever: taxa de conversão da página, taxa de abertura do e-mail ou taxa de clique no anúncio. Conteúdo sem métrica de sucesso definida é texto por texto. Trabalhamos com objetivo, não com volume de palavras.',
        },
      ]}
      audience={{
        isFor: [
          'Quem produz conteúdo e não vê retorno',
          'Quem tem tráfego mas baixa conversão nas páginas',
          'Quem precisa padronizar a voz da marca',
          'Quem vende algo complexo e precisa explicar bem',
        ],
        isNotFor: [
          'Quem quer volume de texto sem estratégia',
          'Quem busca apenas revisão gramatical',
        ],
      }}
      steps={[
        {
          number: '01',
          title: 'Pesquisa e Estratégia de Conteúdo',
          description:
            'Analisamos o seu mercado, persona e concorrentes para criar uma estratégia sólida. Definimos os temas, palavras-chave e o tom de voz ideal para a sua marca antes de escrever uma única palavra.',
        },
        {
          number: '02',
          title: 'Produção com Foco em SEO',
          description:
            'Nossos redatores e copywriters criam textos otimizados para os buscadores e para as pessoas. Cada peça é construída para ranquear no Google e, ao mesmo tempo, gerar conexão real com quem lê.',
        },
        {
          number: '03',
          title: 'Revisão e Alinhamento de Marca',
          description:
            'Todo conteúdo passa por revisão editorial rigorosa para garantir coerência com a identidade da sua marca, precisão das informações e máximo potencial persuasivo antes da entrega.',
        },
        {
          number: '04',
          title: 'Publicação e Monitoramento',
          description:
            'Acompanhamos o desempenho de cada peça publicada. Analisamos métricas de engajamento, tempo de leitura e conversão para otimizar continuamente a estratégia de conteúdo.',
        },
      ]}
      features={[
        {
          title: 'Conteúdo para Blogs e Sites',
          description: 'Textos otimizados com SEO para atrair tráfego qualificado e posicionar sua marca como autoridade no segmento.',
        },
        {
          title: 'Landing Pages e Páginas de Conversão',
          description: 'Títulos e chamadas que capturam a atenção e transformam visitantes em leads de alta qualidade.',
        },
        {
          title: 'Páginas de Vendas',
          description: 'Comunicação persuasiva que transforma produtos e serviços em páginas de vendas com alta taxa de conversão escalada.',
        },
        {
          title: 'Anúncios de Mídia Paga',
          description: 'Textos curtos e diretos que despertam o interesse e geram cliques em campanhas de Google Ads e Meta Ads.',
        },
        {
          title: 'Conteúdo para Redes Sociais',
          description: 'Legendas e copies que geram engajamento, fortalecem o relacionamento e direcionam o público para o seu site.',
        },
        {
          title: 'E-mail Marketing',
          description: 'Comunicação persuasiva que nutre leads, os conduz pelo funil de vendas e os prepara para a compra.',
        },
      ]}
    />
  )
}
