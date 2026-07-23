/**
 * Artigos do blog renderizados pela rota dinâmica /blog/[slug].
 * bodyHtml é conteúdo estático, autoral, sem entrada de usuário, seguro para render direto.
 * Regra de estilo: nunca usar travessao no texto.
 */
export interface Article {
  slug: string
  metaTitle: string
  metaDescription: string
  title: string
  subtitle: string
  tag: string
  breadcrumb: string
  dateISO: string
  coverAlt: string
  bodyHtml: string
  faq: { q: string; a: string }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'quanto-custa-gestao-de-trafego-pago',
    metaTitle: 'Quanto Custa Gestão de Tráfego Pago em 2026? | OxBrand',
    metaDescription: 'Quanto custa tráfego pago? Veja os valores reais de gestão em 2026: fee de agência, verba de mídia e modelos de cobrança. Guia direto, sem enrolação.',
    title: 'Quanto custa gestão de tráfego pago? Valores reais em 2026',
    subtitle: 'A gestão de tráfego pago custa entre R$ 1.000 e R$ 20.000 por mês, mais a verba de mídia. Veja os valores reais, os modelos de cobrança e o que muda o preço.',
    tag: 'Tráfego & Aquisição',
    breadcrumb: 'TRÁFEGO',
    dateISO: '2026-07-23',
    coverAlt: 'Quanto custa gestão de tráfego pago: valores reais em 2026',
    faq: [
      { q: 'Quanto custa tráfego pago no Instagram?', a: 'O Meta Ads (Instagram e Facebook) permite começar com poucos reais por dia, mas campanhas com objetivo comercial pedem a partir de R$ 1.500 a R$ 3.000 por mês de verba para gerar dados suficientes, além do fee de gestão.' },
      { q: 'Posso fazer tráfego pago sozinho?', a: 'Pode. Mas a curva de aprendizado é paga com a sua verba. Para investimentos acima de R$ 2.000 por mês, o custo de uma gestão profissional normalmente se paga pela redução de desperdício.' },
      { q: 'Existe valor mínimo para contratar uma agência?', a: 'Na maioria das agências sérias, a porta de entrada fica entre R$ 1.500 e R$ 2.500 de fee mensal, com verba de mídia à parte.' },
      { q: 'Em quanto tempo o tráfego pago dá resultado?', a: 'Os primeiros sinais aparecem nas primeiras semanas. Resultado consistente e otimizado costuma se consolidar entre 60 e 90 dias, conforme o volume de dados da conta.' },
    ],
    bodyHtml: `
<p class="lead">Essa é uma das perguntas mais comuns de quem quer começar a anunciar no Google e no Meta, e uma das que menos recebe resposta direta.</p>
<div class="callout"><p>A resposta curta: a gestão de tráfego pago no Brasil custa entre <strong>R$ 1.000 e R$ 20.000 por mês</strong>, mais a verba de mídia. A resposta completa depende de três fatores: quem gerencia, quanto você investe em anúncios e qual estrutura existe por trás da operação.</p></div>
<p>Neste guia, mostramos os valores praticados no mercado, os modelos de cobrança e, mais importante, como avaliar se o que você paga volta em resultado.</p>
<h2>Tráfego pago tem dois custos, não um</h2>
<p>Muita gente confunde. Quando você contrata gestão de tráfego pago, existem duas cobranças separadas:</p>
<ul>
<li><strong>Fee de gestão:</strong> o valor pago ao gestor ou à agência pelo trabalho de estratégia, configuração, criativos, testes e otimização das campanhas.</li>
<li><strong>Verba de mídia:</strong> o valor pago diretamente às plataformas (Google Ads, Meta Ads) para veicular os anúncios. Esse dinheiro não passa pela agência.</li>
</ul>
<p>Um erro comum é alocar quase todo o orçamento no fee e sobrar pouco para mídia. Sem verba, não há dado. Sem dado, não há otimização. A referência de mercado é investir em mídia de 2 a 5 vezes o valor do fee de gestão.</p>
<h2>Quanto custa o fee de gestão em 2026</h2>
<div class="table-wrap"><table>
<thead><tr><th>Quem gerencia</th><th>Faixa mensal</th><th>Perfil</th></tr></thead>
<tbody>
<tr><td>Freelancer iniciante</td><td>R$ 800 a R$ 2.000</td><td>Execução básica, sem estrutura de análise</td></tr>
<tr><td>Gestor experiente</td><td>R$ 2.000 a R$ 4.000</td><td>Boa execução, capacidade limitada de escala</td></tr>
<tr><td>Agência especializada</td><td>R$ 2.000 a R$ 8.000</td><td>Equipe multidisciplinar, processo e ferramentas</td></tr>
<tr><td>Operação de alta escala</td><td>R$ 8.000 a R$ 30.000+</td><td>Squads dedicados, contas com verba alta</td></tr>
</tbody></table></div>
<p>Outra forma de ler é pelo porte do negócio: empresas que faturam até R$ 70 mil por mês normalmente pagam entre R$ 1.000 e R$ 2.000; PMEs em crescimento, entre R$ 2.000 e R$ 7.000; operações acima de R$ 300 mil por mês de faturamento, a partir de R$ 7.000.</p>
<h2>Quanto investir em verba de mídia</h2>
<p>Não existe número mágico, mas existem mínimos práticos por objetivo:</p>
<ul>
<li>Geração de leads (serviços): R$ 3.000 a R$ 5.000 por mês</li>
<li>E-commerce: R$ 5.000 a R$ 10.000 por mês</li>
<li>Reconhecimento de marca: R$ 2.000 a R$ 5.000 por mês</li>
</ul>
<p>Abaixo disso, as campanhas até rodam, mas o volume de dados é pequeno demais para o algoritmo otimizar e para o gestor tomar decisão com critério. O resultado vira loteria.</p>
<h2>Os 4 modelos de cobrança do mercado</h2>
<ul>
<li><strong>Fee fixo mensal.</strong> Valor fechado, independente da verba. É o modelo mais previsível e o mais comum para PMEs.</li>
<li><strong>Percentual sobre a verba.</strong> A agência cobra de 10% a 20% do investimento em mídia. Faz sentido para contas com verba alta; para verbas pequenas, costuma desalinhar incentivos.</li>
<li><strong>Modelo híbrido.</strong> Fee fixo menor mais variável por resultado ou por verba. É a tendência para 2026: garante dedicação mínima e premia performance.</li>
<li><strong>Performance pura.</strong> Pagamento apenas por resultado (CPA ou comissão). Parece atraente, mas é raro em operações sérias. Quem trabalha só por comissão tende a priorizar contas fáceis e abandonar as que exigem construção.</li>
</ul>
<h2>O que faz o preço variar</h2>
<ul>
<li><strong>Complexidade da operação:</strong> uma campanha local de captação é diferente de um e-commerce com catálogo de 3.000 produtos.</li>
<li><strong>Quantidade de canais:</strong> Google, Meta, TikTok, LinkedIn. Cada plataforma adiciona trabalho de gestão.</li>
<li><strong>Produção de criativos:</strong> algumas agências incluem; outras cobram à parte. Pergunte sempre.</li>
<li><strong>Estrutura de mensuração:</strong> rastreamento correto (pixel, conversões, CRM integrado) é o que separa gestão profissional de apertar botão de impulsionar.</li>
<li><strong>Nível de acompanhamento:</strong> relatório mensal genérico é uma coisa; rotina semanal de análise e otimização é outra.</li>
</ul>
<h2>O barato que sai caro</h2>
<div class="callout"><p>Um gestor de R$ 800 por mês que desperdiça 30% de uma verba de R$ 5.000 custa, na prática, <strong>R$ 2.300</strong>, e ainda entrega menos resultado. O custo real da gestão não é o fee. É o fee somado ao desperdício de mídia.</p></div>
<p>Tráfego pago tende a gerar sinais rápidos. Mas estrutura de oferta, rastreamento e mensuração corretos são o que fazem a diferença entre investir e queimar verba.</p>
<h2>Como a OxBrand trabalha</h2>
<p>Na OxBrand, tráfego pago não é ação isolada: é a origem de um sistema de crescimento. Antes de ativar campanha, estruturamos oferta, página de conversão e rastreamento. Depois, operamos com rotina semanal de análise e otimização, conectando o marketing ao comercial.</p>
<p>São mais de <strong>R$ 258 milhões</strong> em faturamento gerado para mais de <strong>450 marcas</strong>, com parcerias oficiais Google e Meta Business.</p>
`,
  },
  {
    slug: 'o-que-e-inbound-marketing',
    metaTitle: 'O Que é Inbound Marketing? Guia Completo 2026 | OxBrand',
    metaDescription: 'Entenda o que é inbound marketing, como funciona na prática, as 5 etapas do método, diferenças para o outbound e quando ele faz sentido para sua empresa.',
    title: 'O que é Inbound Marketing? Guia completo para entender (e aplicar)',
    subtitle: 'Inbound marketing é a estratégia de atrair clientes com conteúdo relevante, em vez de interromper com propaganda. Entenda como funciona e quando faz sentido.',
    tag: 'Conversão',
    breadcrumb: 'INBOUND',
    dateISO: '2026-07-01',
    coverAlt: 'O que é inbound marketing: guia completo',
    faq: [
      { q: 'O que é inbound marketing em uma frase?', a: 'É a estratégia de atrair, converter e conduzir clientes por meio de conteúdo relevante, em vez de interrompê-los com propaganda.' },
      { q: 'Inbound marketing é a mesma coisa que marketing de conteúdo?', a: 'Não. O marketing de conteúdo é um dos pilares do inbound. O inbound completo inclui também conversão, automação, integração com vendas e análise.' },
      { q: 'Qual a diferença entre inbound e outbound?', a: 'No inbound, o cliente encontra a empresa (blog, SEO, redes). No outbound, a empresa vai até o cliente (anúncios, prospecção ativa). Operações maduras combinam os dois.' },
      { q: 'Inbound marketing funciona para empresas pequenas?', a: 'Funciona, desde que haja consistência e foco em palavras-chave de baixa concorrência. Para pequenos negócios, a combinação com tráfego pago costuma acelerar o retorno.' },
    ],
    bodyHtml: `
<p class="lead">Inbound marketing é a estratégia de atrair clientes por meio de conteúdo relevante, em vez de interrompê-los com propaganda. Em vez de a empresa ir atrás do cliente, ela constrói presença para que o cliente a encontre: no Google, nas redes sociais, no e-mail.</p>
<p>A definição é simples. A aplicação, nem tanto. Neste guia, explicamos como o inbound funciona na prática, o que ele exige de estrutura e, o mais importante, quando ele realmente faz sentido para o seu negócio.</p>
<h2>Inbound marketing: a definição sem jargão</h2>
<p>O termo vem do inglês: inbound significa de entrada. O marketing de entrada funciona pela lógica da atração: a empresa publica conteúdo que responde às dúvidas do seu público, aparece nos momentos de busca e conduz esse interesse até a venda. Na prática, o inbound se apoia em quatro pilares:</p>
<ul>
<li><strong>Conteúdo:</strong> artigos, vídeos, materiais ricos que respondem o que o público pesquisa.</li>
<li><strong>SEO:</strong> otimização para os buscadores, para que esse conteúdo seja encontrado.</li>
<li><strong>Automação e e-mail:</strong> nutrição do lead ao longo da jornada de decisão.</li>
<li><strong>Análise:</strong> dados para entender o que converte e o que não converte.</li>
</ul>
<h2>Inbound e outbound: qual a diferença?</h2>
<p>Essa é uma das dúvidas mais buscadas, e a resposta define estratégia.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Inbound</th><th>Outbound</th></tr></thead>
<tbody>
<tr><td>Lógica</td><td>O cliente encontra a empresa</td><td>A empresa aborda o cliente</td></tr>
<tr><td>Exemplos</td><td>Blog, SEO, redes sociais, e-mail</td><td>Anúncios, prospecção ativa, cold call</td></tr>
<tr><td>Custo ao longo do tempo</td><td>Diminui (conteúdo é ativo)</td><td>Constante (parou de pagar, parou de aparecer)</td></tr>
<tr><td>Velocidade de resultado</td><td>Lento no início, composto depois</td><td>Rápido, mas dependente de verba</td></tr>
<tr><td>Permissão</td><td>O lead escolhe se relacionar</td><td>A abordagem interrompe</td></tr>
</tbody></table></div>
<p>O erro comum é tratar como rivais. Nas operações que estruturamos na OxBrand, inbound e tráfego pago trabalham juntos: o tráfego gera sinal rápido enquanto o inbound constrói um ativo que reduz o custo de aquisição ao longo do tempo.</p>
<h2>As etapas do inbound marketing na prática</h2>
<ul>
<li><strong>1. Atrair.</strong> Transformar desconhecidos em visitantes, com conteúdo de blog otimizado para SEO, redes sociais e vídeo. A pergunta que guia: o que o meu cliente pesquisa antes de saber que precisa de mim?</li>
<li><strong>2. Converter.</strong> Transformar visitantes em leads com landing pages, formulários e materiais ricos oferecidos em troca do contato. Sem essa etapa, o blog vira audiência, não pipeline.</li>
<li><strong>3. Relacionar.</strong> Nem todo lead está pronto para comprar. A automação de marketing (e-mail, fluxos de nutrição, segmentação) mantém o relacionamento e acelera a maturidade da decisão.</li>
<li><strong>4. Vender.</strong> O lead qualificado precisa chegar ao comercial com contexto: o que pesquisou, o que baixou, o que sinalizou. A integração entre marketing e CRM transforma interesse em receita.</li>
<li><strong>5. Analisar.</strong> Cada etapa gera dado: tráfego, conversão, custo por lead, taxa de fechamento. A análise contínua diferencia uma máquina de crescimento de um blog que só produz conteúdo.</li>
</ul>
<h2>O que o inbound exige (e que quase ninguém fala)</h2>
<p>Conteúdo não serve para engajar. Serve para reduzir objeção e acelerar decisão. Quem entende melhor, decide mais rápido. Para isso, o inbound exige:</p>
<ul>
<li><strong>Consistência:</strong> resultados compostos pedem publicação regular por meses, não semanas.</li>
<li><strong>Intenção de busca:</strong> escrever o que o público pesquisa, não o que a empresa quer falar.</li>
<li><strong>Estrutura de conversão:</strong> páginas rápidas, formulários, ofertas claras. Conteúdo sem captura é audiência emprestada.</li>
<li><strong>Integração com vendas:</strong> lead de inbound sem processo comercial vira métrica de vaidade.</li>
</ul>
<h2>Quanto tempo demora o inbound marketing?</h2>
<div class="callout"><p>Sendo direto: os primeiros resultados orgânicos consistentes aparecem entre <strong>4 e 6 meses</strong>, e o efeito composto se acentua a partir do primeiro ano. Palavras-chave de baixa concorrência podem rankear em semanas; termos competitivos levam mais tempo.</p></div>
<p>É por isso que recomendamos combinar: tráfego pago para gerar demanda agora, inbound para reduzir a dependência de mídia paga no futuro.</p>
<h2>Quando o inbound faz sentido para a sua empresa</h2>
<p>O inbound tende a performar melhor quando o ciclo de decisão do cliente envolve pesquisa (serviços de alto ticket, B2B, saúde, educação, imobiliário); quando o negócio quer previsibilidade e menor dependência de indicação; e quando existe disposição para investir com visão de 6 a 12 meses. Tende a frustrar quando a empresa precisa de caixa imediato e não tem nenhum outro canal ativo. Nesses casos, começar pelo tráfego pago e construir o inbound em paralelo é a sequência mais lógica.</p>
<h2>Como a OxBrand estrutura inbound</h2>
<p>Na OxBrand, inbound não é só produzir conteúdo. É uma das estruturas do método OX Growth Engineering: direção estratégica, estrutura de demanda, estrutura de decisão, estrutura de resultado e otimização contínua. O conteúdo nasce da operação real: processos viram explicação, projetos viram prova.</p>
<p>Somos parceiros RD Station e ActiveCampaign Platinum, com mais de <strong>450 marcas</strong> atendidas e <strong>R$ 258 milhões</strong> em faturamento gerado para clientes.</p>
`,
  },
]

/** Texto puro (sem HTML) para cálculo de tempo de leitura. */
export function articleText(a: Article): string {
  return (a.bodyHtml.replace(/<[^>]+>/g, ' ') + ' ' + a.faq.map(f => f.q + ' ' + f.a).join(' ')).replace(/\s+/g, ' ').trim()
}
export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}
export const coverFor = (slug: string) => `/blog/${slug}-cover.png`
