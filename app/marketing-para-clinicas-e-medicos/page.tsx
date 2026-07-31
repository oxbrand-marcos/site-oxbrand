import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { SolutionPageTemplate } from '@/components/solution-page-template'

const DESC = 'Marketing digital para clínicas e médicos: atrair pacientes com previsibilidade, dentro das regras do CFM. Validado em +450 marcas.'

export const metadata: Metadata = {
  title: 'Marketing Digital para Clínicas e Médicos | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing Digital para Clínicas e Médicos', description: DESC, path: '/marketing-para-clinicas-e-medicos', subtitle: 'Saúde & Clínicas' }),
}

export default function Page() {
  return (
    <SolutionPageTemplate
      pageUrl="/marketing-para-clinicas-e-medicos"
      serviceType="Marketing para saúde"
      breadcrumb="Marketing para Clínicas e Médicos"
      metaDescription={DESC}
      tag="Saúde & Clínicas"
      headline="Marketing Digital para Clínicas e Médicos:"
      headlineHighlight="mais pacientes, dentro das regras"
      subheadline="Clínica não lota agenda com sorte. Lota com estrutura: aparecer para o paciente certo, na hora em que ele procura, e conduzir esse contato até a consulta, sempre dentro das regras do Conselho Federal de Medicina."
      extraSection={
        <section className="py-16 bg-white border-b border-zinc-200">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Marketing digital para clínicas: agenda previsível, dentro do CFM</h2>
            <p className="text-zinc-700 leading-relaxed">Fazer marketing digital para clínicas é diferente de vender qualquer produto: envolve confiança, uma jornada de decisão mais longa e as regras de publicidade do Conselho Federal de Medicina. Nossa estrutura de marketing digital para clínicas e consultórios une tráfego pago segmentado, páginas que convertem e um CRM que organiza a agenda, para atrair o paciente certo com previsibilidade, sempre dentro do que o CFM permite: educação e autoridade, não autopromoção.</p>
          </div>
        </section>
      }
      introTitle="Marketing médico é diferente (e mais sensível)"
      intro="A OxBrand estrutura marketing digital para clínicas e médicos com a mesma engenharia que aplicamos em mais de 450 marcas: sistema, dados e integração com o comercial. Não vendemos postzinho de dica de saúde nem número de seguidor. Construímos um fluxo previsível de pacientes qualificados, com criativo e copy que respeitam o CFM. Atendemos clínicas médicas e consultórios, odontologia, dermatologia e estética, oftalmologia, ortopedia, ginecologia, clínicas de exames e diagnóstico, nutrição e psicologia. Se você depende de agenda cheia e hoje ela oscila conforme a indicação chega, o método se aplica."
      steps={[
        { number: '01', title: 'Publicidade com regra rígida', description: 'O CFM proíbe promessa de resultado, foto de antes e depois, sensacionalismo e autopromoção. A verba precisa performar dentro desse cerco, não fora dele.' },
        { number: '02', title: 'Confiança acima de preço', description: 'Ninguém escolhe cirurgião por desconto. A decisão é por autoridade e segurança percebida, não por oferta.' },
        { number: '03', title: 'Jornada de decisão mais longa', description: 'O paciente pesquisa, lê, compara e só então agenda. O marketing precisa nutrir essa jornada, não só capturar o clique.' },
        { number: '04', title: 'Cada lead vale muito', description: 'O ticket de um tratamento é alto. Um paciente mal atendido no primeiro contato é receita que evapora.' },
      ]}
      features={[
        { title: 'Captação de pacientes com tráfego pago', description: 'Google e Meta Ads segmentados por região, especialidade e intenção, para aparecer para quem já busca o seu tratamento, com criativos aprovados dentro das normas do CFM.' },
        { title: 'Site e landing pages que convertem', description: 'Páginas rápidas e claras que transformam a visita em agendamento, com botão de WhatsApp e formulário integrados ao seu fluxo.' },
        { title: 'CRM e organização da agenda', description: 'Funil que registra cada contato e não deixa o paciente esfriar entre o interesse e a consulta, com automação de lembrete e retorno.' },
        { title: 'Autoridade e conteúdo', description: 'Posicionamento do médico como referência na especialidade, dentro do que o Conselho permite: educação, não autopromoção.' },
      ]}
      audience={{
        isFor: [
          'Clínicas e consultórios que dependem de agenda cheia',
          'Médicos que querem previsibilidade, não picos de indicação',
          'Quem quer captar pacientes respeitando o CFM',
          'Quem tem estrutura para atender bem o primeiro contato',
        ],
        isNotFor: [
          'Quem espera promessa de resultado ou antes e depois em anúncio',
          'Quem não tem quem responda o paciente com agilidade',
          'Quem busca volume de seguidor, não paciente agendado',
        ],
      }}
      relatedLinks={[
        { label: 'Marketing para clínicas de estética', href: '/marketing-para-clinicas-de-estetica' },
        { label: 'Gestão de tráfego pago', href: '/solucoes/gestao-de-trafego-pago' },
        { label: 'CRM Kommo para a agenda', href: '/solucoes/crm-kommo' },
        { label: 'Desenvolvimento de sites', href: '/solucoes/desenvolvimento-de-sites' },
        { label: 'Agência em Mogi das Cruzes', href: '/agencia-de-marketing-digital-mogi-das-cruzes' },
      ]}
      ctaHeading="Pronto para encher a agenda com previsibilidade e dentro das regras?"
      faqItems={[
        { q: 'Médico pode fazer anúncio na internet?', a: 'Pode, desde que dentro das regras do CFM: sem promessa de resultado, sem antes e depois, sem sensacionalismo e com identificação profissional correta. O marketing bem feito para saúde trabalha autoridade e informação, e é justamente por isso que performa sem infringir norma.' },
        { q: 'Tráfego pago funciona para clínica?', a: 'Funciona, e costuma ser o canal de retorno mais rápido. Quando alguém pesquisa por um tratamento na sua cidade, é intenção real. Aparecer nesse momento, com uma página que conduz ao agendamento, é o que enche agenda com previsibilidade.' },
        { q: 'Quanto tempo leva para ver resultado?', a: 'O tráfego pago gera os primeiros contatos nas primeiras semanas. O resultado consistente vem quando captação, site e CRM operam como sistema, normalmente dentro dos primeiros dois a três meses de otimização.' },
        { q: 'Vocês atendem clínicas fora de São Paulo?', a: 'Sim. Somos uma agência de marketing digital em Mogi das Cruzes com atuação nacional, atendemos clínicas e médicos no Brasil inteiro.' },
      ]}
    />
  )
}
