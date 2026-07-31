import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Marketing para clínicas de estética: atrair o paciente certo, encher a agenda e reduzir no-show com tráfego, landing page e CRM.'

export const metadata: Metadata = {
  title: 'Marketing para clínicas de estética | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing para Clínicas de Estética', description: DESC, path: '/marketing-para-clinicas-de-estetica', subtitle: 'Estética & Beleza' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/marketing-para-clinicas-de-estetica"
      serviceType="Marketing para clínicas de estética"
      breadcrumb="Marketing para Clínicas de Estética"
      metaDescription={DESC}
      tag="Agenda cheia com método"
      headline="Marketing para clínicas de estética:"
      headlineHighlight="agenda cheia com o paciente certo"
      subheadline="Atrair o paciente certo para os seus procedimentos, transformar interesse em agendamento e reduzir no-show, com tráfego, landing page e CRM. Marketing para estética não é ganhar seguidor, é encher a agenda com previsibilidade."
      introTitle="Estética é diferente de saúde geral"
      intro="A OxBrand estrutura o marketing de clínicas de estética como engenharia de resultado: direção estratégica (procedimentos-âncora, público certo por ticket e meta de agendamentos), tráfego pago local, landing pages por procedimento, CRM com resposta rápida no WhatsApp e otimização semanal por custo por agendamento. Diferente da nossa página de clínicas e médicos em geral, aqui o foco é estética e beleza (harmonização, estética facial e corporal, procedimentos), sempre respeitando as normas de publicidade dos conselhos, sem promessa de resultado e sem antes e depois fora das regras."
      steps={[
        { number: '01', title: 'Agenda com buracos e sazonalidade', description: 'Meses cheios, meses vazios. Sem geração de demanda constante, a previsibilidade não existe.' },
        { number: '02', title: 'Dependência de indicação e rede social', description: 'Quando a indicação cai e o perfil não tem estratégia, a agenda cai junto.' },
        { number: '03', title: 'Muito curioso de preço', description: 'Chega muita gente perguntando valor e pouca com intenção real de fazer o procedimento.' },
        { number: '04', title: 'Concorrência local e guerra de preço', description: 'Sem posicionamento que justifique o valor, a decisão vira só desconto.' },
        { number: '05', title: 'No-show e lead que some', description: 'O interessado agenda e não aparece, ou nunca é respondido a tempo. Receita que evapora.' },
      ]}
      features={[
        { title: 'Tráfego pago local por procedimento', description: 'Meta e Google segmentados por região e perfil, com criativos de prova dentro das normas, para atrair quem procura o seu procedimento.' },
        { title: 'Landing pages por procedimento', description: 'Páginas com oferta clara (avaliação, condição), prova e agendamento fácil, feitas para transformar a visita em consulta marcada.' },
        { title: 'CRM e atendimento rápido no WhatsApp', description: 'Kommo (parceiro Top 5% do Brasil) com resposta imediata no primeiro contato, porque em estética quem responde rápido agenda mais.' },
        { title: 'Automação anti no-show', description: 'Confirmação e lembrete de agendamento automatizados para reduzir a ausência e proteger a agenda.' },
        { title: 'Conteúdo e social de autoridade', description: 'Gestão de redes e conteúdo que constroem autoridade e confiança, dentro do que os conselhos permitem.' },
        { title: 'Mensuração de custo por agendamento', description: 'Leitura semanal de custo por agendamento e comparecimento, ajustando verba e oferta com base em dado.' },
      ]}
      audience={{
        isFor: [
          'Clínicas de estética que querem agenda previsível',
          'Quem quer atrair o paciente certo, não só seguidor',
          'Clínicas que perdem lead por demora no atendimento',
          'Quem quer reduzir no-show com processo',
        ],
        isNotFor: [
          'Quem busca volume de seguidor, não agendamento',
          'Quem não tem estrutura para responder rápido',
          'Quem espera resultado sem oferta e sem verba de mídia',
        ],
      }}
      relatedLinks={[
        { label: 'Marketing para clínicas e médicos', href: '/marketing-para-clinicas-e-medicos' },
        { label: 'Gestão de tráfego pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo para a agenda', href: '/solucoes/crm-kommo' },
        { label: 'Geração de leads qualificados', href: '/blog/geracao-de-leads-qualificados' },
      ]}
      ctaHeading="Encha a agenda da sua clínica com método."
      faqItems={[
        { q: 'O que é marketing para clínicas de estética?', a: 'É a estrutura de marketing voltada a atrair o paciente certo para os procedimentos de uma clínica de estética e transformar esse interesse em agendamento, com tráfego pago, landing page e CRM, com foco em encher a agenda de forma previsível, não apenas ganhar seguidores.' },
        { q: 'Como atrair mais pacientes para uma clínica de estética?', a: 'Com tráfego pago local segmentado por região e perfil, criativos com prova dentro das normas, landing pages por procedimento com agendamento fácil e um CRM que responde rápido e confirma a consulta. Atrair o paciente certo importa mais que alcançar muita gente.' },
        { q: 'Como reduzir o no-show na clínica de estética?', a: 'Com um CRM que automatiza confirmação e lembretes de agendamento e garante resposta rápida no primeiro contato. Boa parte do no-show vem de lead mal qualificado ou atendido devagar, resolver os dois pontos derruba a ausência.' },
        { q: 'Marketing para estética funciona para clínica pequena?', a: 'Funciona para qualquer clínica que atende pessoas, não depende de verba grande, depende de estrutura: oferta certa, público certo e agenda organizada. Começar com foco em um ou dois procedimentos-âncora costuma trazer resultado mais rápido.' },
      ]}
    />
  )
}
