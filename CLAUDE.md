# OxBrand — Site (contexto para o Claude)

Guia rápido para qualquer sessão do Claude que for mexer neste repositório. Leia antes de editar.

## O que é / como publica
- Site institucional da **OxBrand** (agência de marketing de performance, Mogi das Cruzes/SP).
- **Next.js (App Router)** + Tailwind. Deploy na **Vercel** a partir do branch **`main`**: todo push no `main` dispara redeploy automático em oxbrand.com.br. Não existe passo de deploy manual.
- Repositório: `github.com/oxbrand-marcos/site-oxbrand`.
- Fluxo de mudança: editar → commit → push no `main` → Vercel republica em 1–2 min. Sempre mostrar o diff/preview ao Marcos antes do push.

## Regra de copy (importante)
- **Nada de hífen ou travessão (`-`) no texto visível** (títulos, descrições, `alt`, copy em geral). Usar vírgula, ponto ou reescrever a frase.
- Exceção técnica: **slugs, nomes de arquivo e URLs** precisam de hífen (ex.: `oxbrand-portfolio-logotipo-...`). Isso o usuário não lê, então é permitido.
- Tom da marca: sério, orientado a dados e prova, foco em previsibilidade e resultado. Para copy mais elaborada, usar a skill `coracao-da-oxbrand`.

## Portfólio — `components/portfolio-grid.tsx`
- Estrutura: `categoriesData` com categorias `logotipos` (Identidade Visual), `redes-sociais` (Social Media), `sites` (Site / LP), `crm`, `trafego`.
- Cada item: `{ slug, alt }` (itens de `sites` também têm `videoId`, quase sempre `null`).
- Imagem de cada item: `public/images/wp/portfolio/<slug>.webp` (o código monta `\`${BASE}${slug}.webp\``). Toda imagem é **.webp**.
- Padrão de imagem: quadrada, exibida com `object-contain`. Ao converter PNGs, usar ~1000px, WEBP quality 80.
- **Ordem alfabética por `alt`** (acento/maiúscula insensível) em todas as categorias. Manter assim ao adicionar itens.
- Ao **remover** um item, apagar também o `.webp` correspondente (não deixar imagem órfã no servidor).
- Fonte da verdade da composição: as pastas no desktop do Marcos (`ID Visual`, `SITE`, `SM`) definem exatamente quais marcas devem existir em cada categoria e quantas.
- O contador da galeria (`projetosNaGaleria`) é automático. Só o texto "118 projetos" em `app/portfolio/page.tsx` é fixo (copy de SEO) — atualizar à mão se pedirem.

## Logos de clientes — FONTE ÚNICA `src/config/clients.ts`
- **Para atualizar logos de clientes no site inteiro, editar APENAS `src/config/clients.ts`** (lista `CLIENT_LOGOS`, em ordem alfabética por `alt`).
- Consumidores que importam dessa lista (TODOS precisam continuar usando `CLIENT_LOGOS`; se criar uma faixa nova, importe daqui, não faça lista inline):
  - `components/client-grid.tsx` → grade em **/nossos-clientes**, aplica **máscara preta** (`brightness-0`).
  - `components/clients.tsx` → faixa da **Home** e da /nossos-clientes (acima dos depoimentos), **cor original**.
  - `components/client-marquee.tsx` → carrossel das páginas de case e lbel-telhas, **cor original**.
  - `components/solution-page-template.tsx` → carrossel das páginas de solução, **cor original**.
  - `app/solucoes/crm-kommo/page.tsx` → faixa do CRM Kommo, **cor original** (versão menor/sutil).
  - Obs.: `components/featured-case.tsx` usa um logo ÚNICO da L'Bel (de `/images/clients/`) num case em destaque; não faz parte da fonte única.
- Imagens: `public/images/wp/clients/<slug>.webp`. Os logos da pasta são **brancos monocromáticos com transparência** (por isso `brightness-0` vira preto na grade, e no carrossel de fundo preto a cor original branca aparece bem).
- Ordem alfabética por `alt` na lista. Ao trocar o conjunto, apagar os `.webp` que ficarem órfãos.

## Convenções gerais
- Imagens sempre `.webp`, otimizadas.
- Nunca deixar arquivos de imagem órfãos após remover itens.
- Preferir uma fonte de dados única e importada em vez de listas duplicadas entre componentes.
