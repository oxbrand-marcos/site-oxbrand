import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'

export const metadata: Metadata = {
  title: 'Termos e Condições de Uso | OxBrand Agência de Marketing',
  description: 'Leia os Termos e Condições de uso do site e dos serviços da OxBrand.',
}

const sections = [
  {
    number: '01',
    title: 'Aceitação dos Termos de Uso e Legislação Aplicável',
    content:
      'Ao acessar o site OxBrand (e seus serviços), você concorda em cumprir integralmente estes Termos de Serviço, todas as leis e regulamentos aplicáveis. Você assume a responsabilidade pelo cumprimento de todas as leis locais que se apliquem ao seu uso. Os materiais, conteúdo e marcas contidas neste website são propriedade da OxBrand e são protegidos por direitos autorais e leis de marcas comerciais.',
  },
  {
    number: '02',
    title: 'Licença de Uso de Conteúdo e Materiais OxBrand',
    content:
      'Concedemos permissão para download temporário de uma cópia do conteúdo (informações ou software) no site da OxBrand, exclusivamente para visualização transitória, pessoal e não comercial. Esta é uma concessão de licença, não uma transferência de título. É proibido modificar, copiar, usar para fins comerciais sem autorização, tentar descompilar software ou remover notações de propriedade intelectual.',
  },
  {
    number: '03',
    title: 'Isenção de Responsabilidade e Garantias',
    content:
      'Os materiais no site da OxBrand são fornecidos "como estão". Não oferecemos garantias, expressas ou implícitas, e negamos todas as garantias, incluindo, mas não se limitando a: comercialização, adequação a um fim específico ou não violação de direitos. A OxBrand não garante a precisão, resultados prováveis ou confiabilidade do uso dos materiais.',
  },
  {
    number: '04',
    title: 'Limitações de Responsabilidade por Danos',
    content:
      'Em hipótese alguma a OxBrand ou seus fornecedores serão responsáveis por quaisquer danos (incluindo perda de dados, lucros ou interrupção de negócios) decorrentes do uso ou incapacidade de usar os materiais, mesmo que notificados sobre a possibilidade de tais danos.',
  },
  {
    number: '05',
    title: 'Precisão dos Materiais e Atualizações no Site',
    content:
      'Os materiais exibidos no site podem conter erros técnicos ou tipográficos. A OxBrand não garante que qualquer material seja sempre preciso, completo ou atual, e pode fazer alterações no site a qualquer momento, sem aviso prévio.',
  },
  {
    number: '06',
    title: 'Links e Conteúdo de Terceiros',
    content:
      'A OxBrand não analisou todos os sites vinculados ao seu e não é responsável pelo conteúdo de nenhum site de terceiros. A inclusão de links não implica endosso. O uso de qualquer site vinculado é por conta e risco do usuário.',
  },
  {
    number: '07',
    title: 'Modificações dos Termos de Serviço',
    content:
      'A OxBrand pode revisar estes Termos de Serviço a qualquer momento, sem aviso. Ao usar este site, você concorda em ficar vinculado à versão mais atualizada dos Termos.',
  },
  {
    number: '08',
    title: 'Lei Aplicável e Jurisdição',
    content:
      'Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Você se submete irrevogavelmente à jurisdição exclusiva dos tribunais brasileiros para a resolução de qualquer disputa relacionada a estes Termos.',
  },
]

export default function TermosCondicoesPage() {
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
              <span className="mono-tag text-primary/70">TERMOS E CONDIÇÕES</span>
            </nav>

            <p className="mono-tag text-primary/60 tracking-[0.2em]">Uso do Site · Serviços</p>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Termos e <span className="text-glow">Condições</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
              Ao utilizar nossos serviços, você concorda com os termos descritos neste documento. Leia com atenção antes de continuar.
            </p>
          </div>

          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-between">
            <span className="mono-tag text-primary-foreground/80">Última atualização: 01/10/2025</span>
            <span className="mono-tag text-primary-foreground/50">OxBrand / Termos e Condições</span>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col divide-y divide-zinc-200 border-t border-zinc-200">
              {sections.map((section) => (
                <div key={section.number} className="py-10 grid sm:grid-cols-[260px_1fr] gap-6 sm:gap-16">
                  <div className="shrink-0 flex flex-col gap-2">
                    <span className="mono-tag text-primary/60">{section.number}</span>
                    <h2 className="text-sm font-semibold text-zinc-900 leading-snug">{section.title}</h2>
                  </div>
                  <p className="text-zinc-600 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Link cruzado + CTA */}
            <div className="mt-16 grid sm:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
              <div className="bg-white p-8 flex flex-col gap-3">
                <span className="mono-tag text-zinc-500">Também recomendamos a leitura</span>
                <p className="text-sm text-zinc-600 leading-relaxed">Nossa Política de Privacidade detalha como tratamos seus dados pessoais em conformidade com a LGPD.</p>
                <Link
                  href="/politica-de-privacidade"
                  className="w-fit mono-tag text-primary/70 hover:text-primary transition-colors mt-2"
                >
                  Política de Privacidade →
                </Link>
              </div>
              <div className="bg-zinc-50 p-8 flex flex-col gap-3">
                <span className="mono-tag text-zinc-500">Dúvidas sobre os termos?</span>
                <p className="text-sm text-zinc-600 leading-relaxed">Fale diretamente com o nosso time. Estamos aqui para esclarecer qualquer questão.</p>
                <a
                  href="https://wa.me/+5511921425351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors mt-2"
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
