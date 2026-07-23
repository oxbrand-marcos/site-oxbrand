import type { Metadata } from 'next'
import Link from 'next/link'
import { pageOg } from '@/lib/og'
import { Header } from '@/components/header'
import { Contact } from '@/components/contact'
import { FAQ } from '@/components/faq'
import { FAQ_QUESTIONS } from '@/lib/faq-questions'
import { Footer } from '@/components/footer'
import { breadcrumbSchema, faqPageSchema, jsonLd } from '@/lib/jsonld'
import DotsCanvas from '@/components/dots-canvas'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contato | OxBrand, Agência de Marketing em Mogi das Cruzes',
  description: 'Entre em contato com a OxBrand. Agende um diagnóstico gratuito e descubra como escalar seus resultados com marketing de performance.',
  ...pageOg({
    title: 'Fale com a OxBrand · Diagnóstico gratuito',
    description: 'Agende um diagnóstico gratuito e descubra como escalar seus resultados com marketing de performance orientado por dados.',
    path: '/contato',
    subtitle: 'Entre em contato',
  }),
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'OxBrand', url: '/' },
            { name: 'Contato', url: '/contato' },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(FAQ_QUESTIONS)) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[56vh] flex flex-col justify-end overflow-hidden bg-background">
          <DotsCanvas />

          {/* Blob esquerdo */}
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          {/* Blob direito */}
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          {/* Vinheta central */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          {/* Conteúdo */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <span className="mono-tag text-muted-foreground/40">OXBRAND</span>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">CONTATO</span>
            </nav>

            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Entre em <span className="text-glow">Contato</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              Estamos prontos para conversar sobre o futuro do seu negócio. Fale com a OxBrand e descubra como transformar marketing em estrutura de crescimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/diagnostico"
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors rounded-full"
              >
                Fale com os nossos especialistas
              </Link>
              <span className="mono-tag text-muted-foreground/40">agende um diagnóstico grátis</span>
            </div>
          </div>

          {/* Breadcrumb faixa */}
          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-center sm:justify-between gap-4">
            <span className="mono-tag text-primary-foreground/80">Contato</span>
            <span className="hidden sm:block mono-tag text-primary-foreground/50">OxBrand / Contato</span>
          </div>
        </section>

        {/* Bloco "e um café?" — escritório e dados de contato */}
        <section className="py-20 section-light" aria-labelledby="cafe-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Imagem do escritório */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/helbor.webp"
                  alt="Entrada do Edifício Helbor Concept, sede da OxBrand em Mogi das Cruzes"
                  fill
                  loading="lazy"
                  className="object-cover object-[center_60%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col gap-6">
                <span className="mono-tag text-primary" style={{ color: '#1a007c' }}>e um café?</span>
                <h2 id="cafe-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Venha até nós
                </h2>
                <p className="text-base text-gray-600 leading-relaxed max-w-md">
                  Prefere conversar pessoalmente? Venha tomar um café e entender quais soluções fazem mais sentido para o seu momento.
                </p>

                {/* Endereço */}
                <address className="not-italic flex flex-col gap-1 text-sm text-gray-700 leading-relaxed border-l-2 pl-4" style={{ borderColor: '#5c36eb' }}>
                  <span className="font-semibold text-gray-900">Mogi das Cruzes - SP</span>
                  <span>Av. Ver. Narciso Yague Guimarães, 1145 - Sala 1303</span>
                  <span>Torre Office (Helbor Concept) - Socorro · CEP 08780-500</span>
                </address>

                {/* Mapa da sede */}
                <iframe
                  title="Mapa da sede da OxBrand em Mogi das Cruzes"
                  src="https://maps.google.com/maps?q=Av.%20Ver.%20Narciso%20Yague%20Guimar%C3%A3es%2C%201145%20-%20Socorro%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008780-500&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 8 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full mt-1"
                />

                {/* Horário */}
                <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#1a007c' }}>
                  Atendimento de segunda a sexta, das 9h às 18h
                </p>

                {/* Contatos diretos */}
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/5511921425351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#5c36eb' }} />
                    WhatsApp: (11) 92142-5351
                  </a>
                  <a
                    href="mailto:contato@oxbrand.com.br"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#5c36eb' }} />
                    E-mail: contato@oxbrand.com.br
                  </a>
                </div>

                {/* Ícones de redes sociais */}
                <div className="flex items-center gap-3 pt-2">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/oxbrand.br/', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
                    { label: 'Facebook', href: 'https://www.facebook.com/oxbrand.oficial', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/oxbrand-br/', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
                    { label: 'YouTube', href: 'https://www.youtube.com/@oxbrand_br', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
                    { label: 'WhatsApp', href: 'https://wa.me/5511921425351', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
                  ].map(({ href, label, svg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-500 hover:border-primary hover:text-primary transition-colors"
                    >
                      {svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário e dados */}
        <Contact />

        {/* FAQ */}
        <FAQ variant="light" />
      </main>
      <Footer />
    </>
  )
}
