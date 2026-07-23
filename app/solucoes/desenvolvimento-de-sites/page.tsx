import type { Metadata } from 'next'
import { SolutionPageTemplate } from '@/components/solution-page-template'
import { pageOg } from '@/lib/og'

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sites e Landing Pages | OxBrand',
  description: 'Mais velocidade, mais conversão e a melhor experiência para o seu cliente. Criação de sites e páginas de alta performance para o seu projeto.',
  ...pageOg({
    title: 'Desenvolvimento de Sites · OxBrand',
    description: 'Sites e landing pages de alta performance. Mais velocidade, mais conversão e a melhor experiência para o seu cliente.',
    path: '/solucoes/desenvolvimento-de-sites',
    subtitle: 'Sites & Landing Pages',
  }),
}

export default function DesenvolvimentoDeSitesPage() {
  return (
    <SolutionPageTemplate
      breadcrumb="Desenvolvimento de Sites"
      slug="desenvolvimento-de-sites"
      metaDescription="Criação de sites e landing pages de alta performance para o seu projeto. Mais velocidade, mais conversão e a melhor experiência para o seu cliente, do planejamento ao lançamento."
      tag="Performance e conversão"
      headline="Sites e Landing Pages de"
      headlineHighlight="Alta Performance."
      subheadline="Mais velocidade, mais conversão e a melhor experiência para o seu cliente. Criação de sites e páginas de alta performance para o seu projeto, do planejamento ao lançamento, sem cobranças extras."
      introTitle="A Tríade da Performance"
      intro="Não é sobre ter um site bonito, mas sobre ter um site que gera resultados. Nosso método é baseado em três pilares essenciais que chamamos de A Tríade da Performance: velocidade, SEO e experiência do usuário. A Experiência do Usuário guia o visitante até a conversão. A velocidade é uma vantagem competitiva, já que o Google recompensa sites rápidos. E com a OxBrand, seu site já nasce otimizado para o Google, integrado com as ferramentas de marketing que o seu negócio precisa para crescer."
      stepsImage="/images/solucoes/desenvolvimento-sites-metodo.png"
      stepsAlt="Método de desenvolvimento de sites da OxBrand em 5 etapas"
      ctaHeading="Site bonito que não converte é despesa, não ativo."
      faqItems={[
        {
          q: 'Vocês fazem criação de landing pages, não só sites?',
          a: 'Sim. Além do desenvolvimento de sites institucionais, fazemos criação de landing pages focadas em conversão: página única, rápida e alinhada à campanha, do planejamento ao lançamento.',
        },
        {
          q: 'Quanto tempo leva para o site ficar pronto?',
          a: 'Landing pages focadas em conversão ficam prontas em 2 a 3 semanas. Sites institucionais ou com mais páginas levam de 4 a 6 semanas, dependendo do escopo. O prazo começa a contar depois do briefing e da aprovação de arquitetura, não no dia da assinatura.',
        },
        {
          q: 'Em qual tecnologia vocês desenvolvem e por quê?',
          a: 'Usamos Next.js com deploy na Vercel para a maioria dos projetos. Essa combinação entrega performance real: carregamento rápido, SEO técnico correto e escalabilidade sem custo de hospedagem elevado. A escolha tecnológica segue o objetivo do site, não a preferência da agência.',
        },
        {
          q: 'Eu consigo editar o conteúdo sozinho depois?',
          a: 'Sim. Configuramos um CMS headless para as páginas que precisam de atualização frequente, sem necessidade de desenvolvedor para trocar textos e imagens. Para estruturas fixas, entregamos documentação clara de como solicitar alterações.',
        },
        {
          q: 'O site já vem com rastreio e integração configurados?',
          a: 'Sim. Google Tag Manager, Analytics, Meta Pixel e conversões são configurados antes do lançamento. Se houver CRM ou ferramenta de automação no seu stack, integramos durante o desenvolvimento para que os dados já comecem a fluir no dia em que o site vai ao ar.',
        },
        {
          q: 'Tem custo de manutenção mensal?',
          a: 'Depende do que você precisa. Hospedagem e domínio são custos que você contrata diretamente, sem markup nosso. Manutenção técnica e atualizações de conteúdo têm escopo e valor definidos no contrato. Nada fica implícito na proposta.',
        },
      ]}
      audience={{
        isFor: [
          'Quem tem site que não converte',
          'Quem precisa de landing page para campanha',
          'Quem não consegue medir o que acontece no site',
          'Quem quer autonomia para editar conteúdo',
        ],
        isNotFor: [
          'Quem busca só o site mais barato',
          'Quem quer apenas trocar o visual sem rever a estrutura de conversão',
        ],
      }}
      steps={[
        {
          number: '01',
          title: 'Estratégia e Planejamento',
          description:
            'Mapeamento de objetivos, estudo de concorrentes e definição da arquitetura do site. Cada decisão parte de dados, não de achismo. Entendemos o negócio antes de criar uma linha de código.',
        },
        {
          number: '02',
          title: 'Design e UX/UI',
          description:
            'Criação de protótipos e wireframes focados na experiência do usuário e na conversão. Mobile-first, pensado para onde o seu cliente te encontra primeiro.',
        },
        {
          number: '03',
          title: 'Desenvolvimento',
          description:
            'Codificação do site com foco em velocidade, segurança e código limpo. WordPress com plugins e licenças originais. Sem excesso de código inútil, com backups diários para a sua tranquilidade.',
        },
        {
          number: '04',
          title: 'Otimização e Lançamento',
          description:
            'Testes de performance e SEO para garantir que o site está pronto para o Google antes de ir ao ar. Integrações com RD Station, Kommo, Analytics e ferramentas de rastreio configuradas.',
        },
        {
          number: '05',
          title: 'Manutenção e Análise',
          description:
            'Suporte contínuo, análise de métricas e otimizações para manter a alta performance ao longo do tempo. Seu site cresce junto com o seu negócio.',
        },
      ]}
      features={[
        {
          title: 'Otimização de Imagens',
          description: 'Imagens WEBP de última geração com alta qualidade e baixo tamanho físico, economizando processamento do servidor e aumentando a velocidade para o cliente final.',
        },
        {
          title: 'Design Responsivo (Mobile-First)',
          description: 'O design é pensado primeiro em como o seu cliente vai te enxergar no celular. Nada de sites lindos no computador e terríveis no mobile.',
        },
        {
          title: 'Integração com Ferramentas de Marketing',
          description: 'Trackeamos, integramos e deixamos funcional para RD Station, Kommo, N8N, Google Analytics e outras ferramentas essenciais para o seu negócio.',
        },
        {
          title: 'Painel Administrativo Intuitivo',
          description: 'WordPress com plugins e licenças originais. Você pode administrar o seu site ou contar com a nossa equipe para ajudá-lo sem complicação.',
        },
        {
          title: 'Código Limpo e Segurança',
          description: 'Rápido, sem excesso de código inútil, limpo e seguro. Com backups diários para a sua tranquilidade e proteção total dos dados.',
        },
        {
          title: 'SEO Técnico Nativo',
          description: 'Seu site já nasce otimizado para o Google. Estrutura de código, URLs, hierarquia de títulos e velocidade pensados desde o início para ranquear.',
        },
      ]}
    />
  )
}
