/**
 * Array de perguntas e respostas do FAQ compartilhado.
 *
 * Mantido num arquivo de dados separado (sem 'use client') para que
 * Server Components (pages de /solucoes e /contato) possam importá-lo
 * para gerar o schema FAQPage sem puxar o bundle do Client Component
 * faq.tsx e causar erro de prerender estático.
 */

export type FAQItem = { q: string; a: string }

export const FAQ_QUESTIONS: FAQItem[] = [
  {
    q: 'Quanto tempo leva para ver resultados com tráfego pago?',
    a: 'Sinais de tráfego aparecem nas primeiras semanas. Mas resultado de negócio, ou seja, venda e não clique, depende de estrutura de oferta, mensuração e alinhamento com o comercial. Por isso trabalhamos com ciclos de otimização semanais: cada semana o dado corrige a rota. Não prometemos milagre em 30 dias; construímos previsibilidade que se sustenta.',
  },
  {
    q: 'Qual é o investimento mínimo recomendado para campanhas?',
    a: 'Depende do seu segmento, ticket e objetivo, por isso o diagnóstico vem antes da proposta. Como regra, o investimento em mídia precisa ser suficiente para gerar dados de decisão; abaixo disso, a campanha vira aposta. No diagnóstico gratuito a gente calcula o piso que faz sentido pro seu caso, sem empurrar pacote.',
  },
  {
    q: 'A OxBrand atende empresas fora de Mogi das Cruzes?',
    a: 'Sim. Somos de Mogi das Cruzes, com atuação nacional e em projetos internacionais. Toda a operação é remota e documentada, com reuniões objetivas e acompanhamento por indicadores; a distância não muda o método.',
  },
  {
    q: 'Vocês entregam relatórios de performance?',
    a: 'Sim, mas o foco não é relatório bonito. Você acompanha indicadores que importam, como custo de aquisição, conversão e retorno, ligados à decisão de negócio, não à métrica de vaidade. Relatório serve para orientar a próxima ação, não para justificar o mês.',
  },
  {
    q: 'Como funciona o processo de onboarding?',
    a: 'Começa pelo diagnóstico: leitura do negócio, funil e posicionamento. Em seguida montamos a direção estratégica, priorizamos canais e alinhamos metas com o comercial. Só então entramos em execução. É o método OX Growth Engineering aplicado desde o primeiro dia.',
  },
  {
    q: 'Posso cancelar o contrato a qualquer momento?',
    a: 'As condições de prazo ficam claras no contrato, sem letra miúda. Nosso objetivo é que você fique por resultado, não por amarra contratual. Se algo não estiver fazendo sentido, a conversa é aberta e orientada por dados.',
  },
  {
    q: 'Vocês trabalham com e-commerce?',
    a: 'Sim. E-commerce é um dos segmentos que atendemos, junto com construção civil, incorporadoras, clínicas, indústria B2B, educação e serviços de alto ticket. O método é o mesmo; o que muda é a estratégia por trás dele.',
  },
  {
    q: 'Como é feita a precificação dos serviços?',
    a: 'A partir do escopo definido no diagnóstico, com base no que seu momento realmente exige, sem pacote genérico. Você sabe o que está contratando e por quê antes de fechar. Transparência na precificação faz parte do jeito OxBrand de operar.',
  },
  {
    q: 'A OxBrand cria o conteúdo das campanhas também?',
    a: 'Sim: criativos, copy, landing pages e conteúdo estratégico. Mas conteúdo aqui não serve para engajar; serve para reduzir objeção e acelerar decisão. Cada peça tem função dentro do funil.',
  },
  {
    q: 'O que diferencia a OxBrand de outras agências?',
    a: 'Enquanto vendem execução, nós entregamos direção. Operamos com método próprio (OX Growth Engineering), time com especialista por frente, rotina de otimização semanal e integração real entre marketing e comercial. Não é presença. É engenharia de resultado.',
  },
]
