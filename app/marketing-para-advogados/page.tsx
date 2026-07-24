import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { NicheLP } from '@/components/niche-lp'

const DESC = 'Marketing jurídico para advogados e escritórios, dentro do Provimento 205/2021 da OAB: autoridade, conteúdo e captação ética de clientes. Diagnóstico gratuito.'

export const metadata: Metadata = {
  title: 'Marketing para Advogados: ético e eficaz | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing para Advogados', description: DESC, path: '/marketing-para-advogados', subtitle: 'Marketing Jurídico' }),
}

const BODY = `
<p class="lead">Todo advogado sabe que precisa ser encontrado, e todo advogado tem medo de cruzar a linha da OAB. É exatamente esse o ponto onde a maioria das agências erra: ou fazem um marketing tímido demais, que não gera cliente, ou um marketing agressivo demais, que expõe o escritório a um processo ético. Marketing jurídico bem-feito vive no equilíbrio entre os dois.</p>
<p>A OxBrand estrutura marketing para advogados e escritórios respeitando o Provimento 205/2021 da OAB: nada de mercantilização, sensacionalismo ou promessa de resultado. O caminho é construir autoridade, e autoridade, no Direito, é o que faz o cliente certo procurar você.</p>
<h2>O que a OAB permite (e o que não permite)</h2>
<ul>
<li><strong>Pode:</strong> marketing de conteúdo informativo, presença digital sóbria, artigos que educam sobre direitos, otimização do site, e-mail informativo e publicidade com moderação.</li>
<li><strong>Não pode:</strong> captação mercantilizada de clientela, promessa de resultado, sensacionalismo, comparação com outros advogados e anúncio que trate o serviço jurídico como mercadoria.</li>
</ul>
<p>A régua da OxBrand: construímos autoridade, não vendemos ações. Todo conteúdo passa por essa lente antes de ir ao ar, e revisamos a estratégia com você para que o escritório fique protegido.</p>
<h2>Como geramos clientes para escritórios, com ética</h2>
<ul>
<li><strong>Conteúdo de autoridade:</strong> artigos e materiais de <a href="/solucoes/inbound-marketing">inbound marketing</a> que respondem às dúvidas reais de quem tem um problema jurídico. Quem esclarece, é procurado.</li>
<li><strong>SEO jurídico:</strong> a sua página encontrada por quem busca a área do seu escritório (trabalhista, empresarial, família), sem depender de anúncio agressivo.</li>
<li><strong>Copy sóbria e técnica:</strong> <a href="/solucoes/copywriting-e-redacao">textos</a> que informam e transmitem competência, sem promessa nem apelo emocional barato.</li>
<li><strong>CRM e atendimento:</strong> o contato que chega não se perde, com <a href="/solucoes/crm-kommo">funil organizado</a>, resposta rápida e acompanhamento profissional.</li>
</ul>
<h2>Áreas que atendemos</h2>
<p>Direito trabalhista, empresarial, tributário, de família, previdenciário, imobiliário e escritórios full-service. O método se adapta à área e ao público: o que muda é a linguagem, não o princípio, autoridade construída com ética.</p>
<h2>Por que a OxBrand e não uma agência genérica</h2>
<p>A maioria das agências não conhece o Código de Ética da OAB e trata advogado como e-commerce, o que coloca o escritório em risco. Operamos com método (OX Growth Engineering) e com a responsabilidade de quem entende que, no Direito, reputação é o ativo. Enquanto vendem execução, entregamos direção e proteção.</p>
<p>Somos uma <a href="/agencia-de-marketing-digital-mogi-das-cruzes">agência de marketing digital em Mogi das Cruzes</a> com atuação nacional. Agende um <a href="/diagnostico">diagnóstico gratuito</a> e receba uma leitura de como o seu escritório pode crescer sem risco.</p>
`

const FAQ = [
  { q: 'Advogado pode fazer marketing digital?', a: 'Pode, sim, desde que dentro do Provimento 205/2021 da OAB. É permitido marketing de conteúdo informativo, presença digital sóbria e publicidade com moderação. O que é vedado é a captação mercantilizada, a promessa de resultado e o sensacionalismo.' },
  { q: 'O que não pode no marketing jurídico?', a: 'Promessa de ganho de causa, comparação com colegas, sensacionalismo, tratar o serviço como mercadoria e captação agressiva de clientela. Todo o nosso trabalho é desenhado para ficar do lado seguro dessa linha.' },
  { q: 'Como um escritório consegue clientes pela internet, então?', a: 'Construindo autoridade. Conteúdo que educa sobre direitos faz com que quem tem um problema jurídico encontre e confie no seu escritório, de forma ética e sustentável, sem depender de anúncio que a OAB reprovaria.' },
  { q: 'Vocês atendem escritórios de fora de Mogi das Cruzes?', a: 'Sim. Somos uma agência de marketing digital em Mogi das Cruzes com atuação nacional, atendemos advogados e escritórios em todo o Brasil.' },
]

export default function Page() {
  return (
    <NicheLP
      path="/marketing-para-advogados"
      breadcrumb="Marketing para Advogados"
      serviceType="Marketing jurídico"
      description={DESC}
      tag="Marketing Jurídico"
      headline="Marketing para Advogados:"
      headlineHighlight="autoridade e clientes, dentro das regras da OAB"
      subheadline="Nem tímido a ponto de não gerar cliente, nem agressivo a ponto de expor o escritório. Marketing jurídico com autoridade e segurança ética."
      bodyHtml={BODY}
      faq={FAQ}
      note="Este conteúdo respeita o Provimento 205/2021 da OAB. As estratégias são adaptadas para manter a conformidade ética de cada escritório e revisadas com o cliente antes da publicação."
    />
  )
}
