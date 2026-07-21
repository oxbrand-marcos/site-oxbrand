import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'

export const metadata: Metadata = {
  title: 'Política de Privacidade | OxBrand e Proteção de Dados LGPD',
  description: 'Saiba como a OxBrand coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.',
}

const sections = [
  {
    title: 'Quem Somos e a Importância da Conformidade Legal',
    content:
      'A OxBrand é uma agência full service de Marketing Digital em Mogi das Cruzes, com expertise em tecnologia, branding e performance. Para oferecer o melhor serviço, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e regulamentações aplicáveis, garantimos total transparência sobre o tratamento de seus dados.',
  },
  {
    title: 'Comentários',
    content:
      'Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de comentários, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam. Uma string anonimizada, criada a partir do seu e-mail (também chamado de hash), pode ser fornecida ao serviço Gravatar para verificar se você o utiliza. Depois da aprovação do seu comentário, a foto do seu perfil é visível ao público junto de seu comentário.',
  },
  {
    title: 'Mídia',
    content:
      'Ao carregar imagens para o site, evite enviar as que contenham dados de localização incorporados (EXIF GPS). Visitantes podem baixar e extrair dados de localização das imagens do site.',
  },
  {
    title: 'Cookies',
    content:
      'Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. Eles são arquivos de texto armazenados no seu navegador que nos ajudam a identificar você. Você pode optar por desativar ou gerenciar o uso de cookies a qualquer momento nas configurações do seu navegador. Lembre-se que a desativação pode afetar a funcionalidade de algumas partes do site.',
  },
  {
    title: 'Mídia Incorporada de Outros Sites',
    content:
      'Artigos neste site podem incluir conteúdo incorporado (como vídeos do YouTube, imagens, artigos, etc.). Conteúdos incorporados de outros sites se comportam exatamente da mesma forma como se o visitante estivesse visitando o outro site. Estes sites podem coletar dados sobre você, usar cookies, incorporar rastreamento adicional de terceiros e monitorar sua interação com esse conteúdo incorporado.',
  },
  {
    title: 'Com Quem Compartilhamos Seus Dados',
    content:
      'Seus dados não são vendidos. Eles são compartilhados apenas com parceiros de confiança e provedores de serviços essenciais (como hospedagem, análise de tráfego e e-mail marketing) que nos ajudam a operar e aprimorar nossos serviços.',
  },
  {
    title: 'Por Quanto Tempo Mantemos os Seus Dados',
    content:
      'Reteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais os coletamos, incluindo a satisfação de quaisquer requisitos legais, contábeis ou de relatórios. Se você deixar um comentário, o comentário e os seus metadados são retidos indefinidamente.',
  },
  {
    title: 'Quais os Seus Direitos Sobre os Seus Dados',
    content:
      'Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um arquivo exportado dos dados pessoais que mantemos sobre você. Você também pode solicitar que removamos todos os dados pessoais que mantemos sobre você, exceto dados que somos obrigados a manter para propósitos administrativos, legais ou de segurança.',
  },
  {
    title: 'Para Onde Seus Dados São Enviados',
    content:
      'Comentários de visitantes podem ser verificados usando um serviço automático de detecção de spam. Para exercer seus direitos como titular de dados ou para tirar dúvidas sobre nossa Política de Privacidade, entre em contato através do canal oficial da OxBrand. Garantimos o total cumprimento da LGPD.',
  },
]

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[46vh] flex flex-col justify-end overflow-hidden bg-background">
          <DotsCanvas />
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">POLÍTICA DE PRIVACIDADE</span>
            </nav>

            <p className="mono-tag text-primary/60 tracking-[0.2em]">LGPD · Proteção de Dados</p>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Política de <span className="text-glow">Privacidade</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
              Total transparência sobre como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD.
            </p>
          </div>

          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-between">
            <span className="mono-tag text-primary-foreground/80">Última atualização: Outubro de 2025</span>
            <span className="mono-tag text-primary-foreground/50">OxBrand / Política de Privacidade</span>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col divide-y divide-zinc-200 border-t border-zinc-200">
              {sections.map((section, i) => (
                <div key={section.title} className="py-10 grid sm:grid-cols-[260px_1fr] gap-6 sm:gap-16">
                  <div className="shrink-0 flex flex-col gap-2">
                    <span className="mono-tag text-primary/60">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="text-sm font-semibold text-zinc-900 leading-snug">{section.title}</h2>
                  </div>
                  <p className="text-zinc-600 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 border border-zinc-200 bg-zinc-50 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <span className="mono-tag text-primary/60">Dúvidas sobre seus dados?</span>
                <p className="text-zinc-900 font-semibold">Fale diretamente com a OxBrand.</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <Link href="/termos-e-condicoes" className="mono-tag text-zinc-500 hover:text-zinc-900 transition-colors">
                  Termos e Condições →
                </Link>
                <a
                  href="https://wa.me/+5511921425351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
                >
                  Falar com a OxBrand ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
