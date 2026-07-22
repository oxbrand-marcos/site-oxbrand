/**
 * Redirects de migração WordPress → Next.js
 *
 * Todas as regras são 301 (permanent: true).
 * Cada rota de origem é declarada duas vezes: com e sem barra final,
 * para garantir cobertura independente do comportamento do crawler.
 *
 * Organização:
 *   PARTE 1 — Rota mudou (equivalência direta)
 *   PARTE 2 — Destino mais próximo (sem equivalente no site novo)
 *   PARTE 3 — 410 Gone (URLs descontinuadas do WordPress)
 *             Implementado via has + missing + destination fictício não existe;
 *             410 não é suportado diretamente pelo array redirects do Next.js,
 *             então essas rotas são tratadas no middleware (ver middleware.ts).
 *
 * Nota sobre PARTE 3: Next.js redirects só suportam 301/302/307/308.
 * O 410 é emitido pelo middleware para /elementor-*, /wp-* e /xmlrpc.php.
 */

/** @returns {import('next').Redirect[]} */
export function buildRedirects() {
  /** Cria um par de regras (com e sem barra final) para a mesma origem→destino */
  function rule(source, destination) {
    return [
      { source, destination, permanent: true },
      { source: source + '/', destination, permanent: true },
    ]
  }

  return [
    // ─── PARTE 1: Rota mudou — equivalência direta ───────────────────────
    ...rule('/assessoria-em-marketing',            '/solucoes/assessoria-em-marketing'),
    ...rule('/copywriting-e-redacao',              '/solucoes/copywriting-e-redacao'),
    ...rule('/desenvolvimento-de-sites',           '/solucoes/desenvolvimento-de-sites'),
    ...rule('/gestao-de-trafego-pago',             '/solucoes/gestao-de-trafego-pago'),
    ...rule('/inbound-marketing',                  '/solucoes/inbound-marketing'),
    ...rule('/nao-perca-mais-vendas-crm-kommo',    '/solucoes/crm-kommo'),
    ...rule('/diagnostico-digital',                '/diagnostico'),
    ...rule('/contact',                            '/contato'),
    ...rule('/fale-conosco',                       '/contato'),
    ...rule('/crm-kommo-partners-especialistas-comerciais', '/solucoes/crm-kommo'),
    ...rule('/vaga-social-media',                  '/carreiras/social-media'),
    ...rule('/vaga-gestor-de-trafego',             '/carreiras/gestor-de-trafego'),

    // Posts do blog no WordPress ficavam na raiz (sem /blog)
    ...rule(
      '/leads-do-trafego-pago-como-transformar-em-vendas',
      '/blog/leads-do-trafego-pago-como-transformar-em-vendas',
    ),
    ...rule(
      '/foco-em-marketing-de-conteudo-como-gerar-resultados-reais',
      '/blog/foco-em-marketing-de-conteudo-como-gerar-resultados-reais',
    ),

    // ─── PARTE 2: Destino mais próximo ───────────────────────────────────
    ...rule('/construcao-civil',                   '/solucoes/gestao-de-trafego-pago'),
    ...rule('/trafego-pago-com-previsibilidade',   '/solucoes/gestao-de-trafego-pago'),
    ...rule('/agencia-de-marketing',               '/'),
    ...rule('/oxbrand-marketing-de-performance',   '/sobre'),
    ...rule('/comunicacao-raiz',                   '/materiais-gratuitos'),
    ...rule('/politica-de-publicacao',             '/politica-de-privacidade'),
    ...rule('/sitemap',                            '/'),
    ...rule('/feed',                               '/blog/rss.xml'),
    ...rule('/comments/feed',                      '/blog/rss.xml'),
  ]
}
