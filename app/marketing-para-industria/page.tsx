import type { Metadata } from 'next'
import { pageOg } from '@/lib/og'
import { NicheLP } from '@/components/niche-lp'

const DESC = 'Agência de marketing para indústria e empresas B2B: geração de demanda qualificada, ciclo de venda longo e ROI. Método validado em +450 marcas. Diagnóstico gratuito.'

export const metadata: Metadata = {
  title: 'Marketing para Indústria e B2B com Método | OxBrand',
  description: DESC,
  ...pageOg({ title: 'Marketing para Indústria e B2B', description: DESC, path: '/marketing-para-industria', subtitle: 'Indústria & B2B' }),
}

const BODY = `
<p class="lead">Marketing para indústria não é o mesmo que marketing para varejo, e tratar os dois igual é o erro que faz a maioria das campanhas B2B queimarem verba. Na indústria, o ticket é alto, o ciclo de venda é longo, quem decide é um comitê e a compra passa por engenharia, compras e diretoria. Não se vende uma injetora ou um contrato de fornecimento com um anúncio de compre agora.</p>
<p>A OxBrand estrutura marketing para indústrias e empresas B2B com a mesma engenharia que aplicamos em mais de 450 marcas: sistema, dados e integração com o comercial. Não vendemos postzinho nem alcance, construímos demanda qualificada e previsível para quem vende para outras empresas.</p>
<h2>Por que o marketing industrial é diferente (e mais difícil)</h2>
<ul>
<li><strong>Ciclo longo:</strong> entre o primeiro contato e o pedido podem passar meses. O marketing precisa nutrir, não só capturar.</li>
<li><strong>Comitê de compra:</strong> engenharia avalia especificação, compras avalia preço, diretoria avalia risco. Sua mensagem precisa responder aos três.</li>
<li><strong>Ticket alto e baixo volume:</strong> poucos leads, mas cada um vale muito. Perder um lead qualificado dói mais do que no varejo.</li>
<li><strong>Decisão racional:</strong> ninguém compra por impulso. Ganha quem reduz o risco percebido com prova técnica, não quem grita mais alto.</li>
</ul>
<h2>O que a OxBrand faz por indústrias e empresas B2B</h2>
<ul>
<li><strong>Geração de demanda qualificada:</strong> <a href="/solucoes/gestao-de-trafego-pago">tráfego pago</a> no Google e LinkedIn segmentado por cargo, setor e porte, para aparecer para quem realmente decide.</li>
<li><strong>Conteúdo técnico e autoridade:</strong> materiais de <a href="/solucoes/inbound-marketing">inbound marketing</a> que respondem às objeções de engenharia e compras, posicionando sua empresa como referência antes da concorrência.</li>
<li><strong>CRM e nutrição de ciclo longo:</strong> <a href="/solucoes/crm-kommo">funil no CRM</a> estruturado que acompanha o lead pelos meses de decisão, sem que nenhuma oportunidade esfrie no caminho.</li>
<li><strong>Integração com o comercial:</strong> os representantes recebem leads prontos, com contexto, em vez de contatos frios. Marketing e vendas operando como um sistema.</li>
</ul>
<h2>Setores que atendemos</h2>
<p>Indústria de transformação, metalurgia e autopeças, construção civil e incorporadoras, fornecedores e distribuidores B2B, máquinas e equipamentos, serviços industriais de alto ticket. Se a sua empresa vende para outras empresas, com processo de compra complexo, o método se aplica.</p>
<h2>Como funciona: OX Growth Engineering aplicado ao B2B</h2>
<p>Método 70/30: 70% inteligência e estratégia, 30% execução. Começamos entendendo o seu ciclo de venda, quem decide e onde os negócios travam. Só depois estruturamos demanda, decisão e resultado, com análise e otimização semanais. Reuniões objetivas, com indicadores e metas claras, do lead ao pedido fechado, não só ao clique.</p>
<p>Somos uma <a href="/agencia-de-marketing-digital-mogi-das-cruzes">agência de marketing digital em Mogi das Cruzes</a> com atuação nacional e internacional. Agende um <a href="/diagnostico">diagnóstico gratuito</a> e receba uma leitura da sua operação.</p>
`

const FAQ = [
  { q: 'Marketing digital funciona para indústria?', a: 'Funciona, desde que respeite o ciclo B2B. Não é sobre volume de leads, é sobre gerar oportunidades qualificadas e nutri-las ao longo da decisão. Feito com método, o marketing industrial reduz o custo de aquisição e encurta o ciclo de venda.' },
  { q: 'Qual a diferença entre marketing B2B e B2C?', a: 'No B2C, a compra é rápida e emocional. No B2B, é longa, racional e feita por um comitê. Muda tudo: os canais, a mensagem, o conteúdo e a forma de medir resultado. Aplicar tática de B2C na indústria é o que faz a verba render pouco.' },
  { q: 'Quanto tempo leva para ver resultado?', a: 'O tráfego pago gera sinais nas primeiras semanas, mas o resultado comercial acompanha o seu ciclo de venda, que na indústria costuma ser de meses. Por isso medimos o funil inteiro, não só o topo.' },
  { q: 'Vocês atendem indústrias fora de São Paulo?', a: 'Sim. Somos uma agência de marketing digital em Mogi das Cruzes com atuação nacional e internacional, atendemos indústrias no Brasil inteiro.' },
]

export default function Page() {
  return (
    <NicheLP
      path="/marketing-para-industria"
      breadcrumb="Marketing para Indústria"
      serviceType="Marketing industrial B2B"
      description={DESC}
      tag="Indústria & B2B"
      headline="Marketing para Indústria:"
      headlineHighlight="demanda qualificada para quem vende B2B"
      subheadline="Ticket alto, ciclo longo e comitê de compra pedem método, não postzinho. Estruturamos demanda previsível para quem vende para outras empresas."
      bodyHtml={BODY}
      faq={FAQ}
    />
  )
}
