import Link from 'next/link'
import Image from 'next/image'
import { NewsletterSignup } from '@/components/newsletter-signup'


const colInstitucional = {
  title: 'Institucional',
  items: [
    { label: 'Home', href: '/' },
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Nossos Clientes', href: '/nossos-clientes' },
    { label: 'Portfólio', href: '/portfolio' },
    { label: 'Insights', href: '/blog' },
    { label: 'Materiais Gratuitos', href: '/materiais-gratuitos' },
    { label: 'Carreiras', href: '/carreiras-em-marketing-digital' },
    { label: 'Contato', href: '/contato' },
  ],
}

const colSolucoes = {
  title: 'Soluções Ox',
  items: [
    { label: 'Assessoria em Marketing', href: '/solucoes/assessoria-em-marketing' },
    { label: 'Copywriting e Redação', href: '/solucoes/copywriting-e-redacao' },
    { label: 'Desenvolvimento de Sites', href: '/solucoes/desenvolvimento-de-sites' },
    { label: 'Gestão de Tráfego Pago', href: '/solucoes/gestao-de-trafego-pago' },
    { label: 'Inbound Marketing', href: '/solucoes/inbound-marketing' },
    { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
    { label: 'Diagnóstico Gratuito', href: '/diagnostico' },
  ],
}

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/5511921425351' },
]

export function Footer({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <footer className="border-t border-border">

      {/* CTA banner, oculto em páginas de recrutamento */}
      {!hideCta && <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">
            Pronto para escalar?{' '}
            <span className="text-glow">Fale com a OxBrand.</span>
          </p>
          <a
            href="https://wa.me/5511921425351"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
          >
            Iniciar agora ↗
          </a>
        </div>
      </div>}

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="flex items-center w-fit">
              <Image
                src="/images/oxbrand-logo.webp"
                alt="OxBrand, Marketing de Performance"
                width={120}
                height={34}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Agência de marketing digital com foco em performance, crescimento
              previsível e resultados reais.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              {[
                {
                  href: 'https://www.instagram.com/oxbrand.br/',
                  label: 'Instagram',
                  svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                },
                {
                  href: 'https://www.facebook.com/oxbrand.oficial',
                  label: 'Facebook',
                  svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                },
                {
                  href: 'https://www.linkedin.com/company/oxbrand-br/',
                  label: 'LinkedIn',
                  svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
                },
                {
                  href: 'https://www.youtube.com/@oxbrand_br',
                  label: 'YouTube',
                  svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
                },
                {
                  href: 'https://wa.me/5511921425351',
                  label: 'WhatsApp',
                  // SVG oficial do WhatsApp
                  svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
                },
              ].map(({ href, label, svg }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-sm border border-primary/20 bg-primary/10 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <NewsletterSignup variant="footer" />
          </div>

          {/* Colunas de navegação */}
          {[colInstitucional, colSolucoes].map((col) => (
            <div key={col.title} className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
              <p className="text-sm font-bold text-foreground tracking-wide">{col.title}</p>
              <ul className="flex flex-col gap-2.5 items-center sm:items-start">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 mono-tag text-foreground/60 hover:text-foreground transition-colors w-fit"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary transition-colors shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Coluna Contato, largura total no mobile */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
            <p className="text-sm font-bold text-foreground tracking-wide">Contato</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Sede: Mogi das Cruzes - SP<br />
              Av. Ver. Narciso Yague Guimarães, 1145 - Sala 1303<br />
              Torre Office (Helbor Concept) - Socorro<br />
              CEP 08780-500
            </p>
            <a
              href="https://wa.me/5511921425351"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 mono-tag text-foreground/70 hover:text-primary transition-colors w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors shrink-0" />
              WhatsApp: (11) 92142-5351
            </a>
            <a
              href="mailto:contato@oxbrand.com.br"
              className="group flex items-center gap-2 mono-tag text-foreground/70 hover:text-primary transition-colors w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors shrink-0" />
              E-mail: contato@oxbrand.com.br
            </a>
          </div>
        </div>

        {/* Rodapé base */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-center sm:text-left">
          <p className="mono-tag text-muted-foreground/40">
            Todos os direitos reservados | 2026 | OxBrand – Tecnologia e Marketing® | CNPJ 46.696.465/0001-20
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="mono-tag text-muted-foreground/40 hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <span className="mono-tag text-muted-foreground/25" aria-hidden="true">|</span>
            <Link
              href="/termos-e-condicoes"
              className="mono-tag text-muted-foreground/40 hover:text-foreground transition-colors"
            >
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
