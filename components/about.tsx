import Link from 'next/link'
import Image from 'next/image'

// brand: true = mudança de marca (ponto preenchido); false = marco regular (ponto vazado)
const timeline = [
  { year: '2014', event: 'Nasce a MB', brand: true },
  { year: '2016', event: 'Estruturação da operação em Mogi das Cruzes, SP', brand: false },
  { year: '2018', event: 'Primeiros 50 clientes e expansão nacional', brand: false },
  { year: '2020', event: 'A MB se transforma na Agência Chuva Digital', brand: true },
  { year: '2021', event: 'Chuva Digital passa a se chamar OxBrand', brand: true },
  { year: '2023', event: 'Primeiros projetos internacionais, EUA e Europa', brand: false },
  { year: '2024', event: '+450 marcas atendidas e R$258M+ em faturamento gerado', brand: false },
  { year: '2025', event: 'Inauguração da Sede Própria — Torre Office (Helbor Concept), Socorro', brand: false },
  { year: '2025', event: 'Parceiro Oficial Kommo, Top 5% dos parceiros no Brasil', brand: false },
  { year: '2026', event: 'Consolidação do método OX Growth Engineering e lançamento da nova plataforma digital', brand: false },
]

const pillars = [
  { label: 'Metodologia validada', desc: 'Metodologia OX Growth Engineering, validada em mais de 450 projetos' },
  { label: 'Análise semanal', desc: 'Ciclo semanal de análise, teste e otimização por métrica de performance' },
  { label: 'Atuação global', desc: 'Sede em Mogi das Cruzes, com entregas para mercados internacionais' },
  { label: 'Time completo', desc: 'Especialistas dedicados em tráfego, criação, tecnologia e conversão' },
]

export function About() {
  return (
    <section id="sobre" className="py-24 border-b border-border section-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main grid — label dentro do grid para alinhar com Histórico */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-start">

          {/* Esquerda — label + texto */}
          <div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left">
            <span className="mono-tag text-muted-foreground/60">A OxBrand</span>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Construída para<br />
              gerar resultado{' '}
              <span className="text-glow">real.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-base">
              Fundada em Mogi das Cruzes com atuação nacional e internacional, a OxBrand
              une tráfego pago, criação e tecnologia num sistema único. Não vendemos
              pacotes, construímos operações de marketing que escalam junto com o seu negócio.
            </p>

            {/* Pilares */}
            <div className="grid grid-cols-2 gap-px bg-border w-full">
              {pillars.map((p) => (
                <div key={p.label} className="bg-background p-5 flex flex-col gap-1.5">
                  <span className="text-sm font-bold text-foreground">{p.desc}</span>
                </div>
              ))}
            </div>

            {/* Foto do escritório — abaixo dos pilares, alinhada à coluna */}
            <div className="relative w-full h-[220px] sm:h-[280px] overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/escritorio-oxbrand.jpg"
                alt="Escritório OxBrand · equipe em operação"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Direita — label alinhado + timeline */}
          <div className="flex flex-col gap-0 items-center lg:items-start text-center lg:text-left">
            <p className="mono-tag text-muted-foreground/50 mb-6">Histórico</p>
            {timeline.map((item, i) => (
              <div
                key={`${item.year}-${i}`}
                className={`flex gap-4 items-start py-4 w-full ${i < timeline.length - 1 ? 'border-b border-border' : ''}`}
              >
                {/* Indicador visual — preenchido para mudanças de marca, vazado para os demais */}
                <div className="shrink-0 flex flex-col items-center pt-1.5 gap-1">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 border-primary ${item.brand ? 'bg-primary' : 'bg-transparent'}`}
                  />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-bold stat-number text-primary leading-none">
                    {item.year}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}

            {/* Bloco de localização */}
            <div className="mt-6 border border-border p-5 flex items-center justify-between w-full">
              <div className="text-left">
                <p className="mono-tag text-muted-foreground/50">Sede</p>
                <p className="text-sm font-semibold text-foreground mt-1">Mogi das Cruzes, SP</p>
              </div>
              <div className="text-right">
                <p className="mono-tag text-muted-foreground/50">Atuação</p>
                <p className="text-sm font-semibold text-foreground mt-1">Nacional + Internacional</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs — centralizados abaixo do grid */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/diagnostico"
              className="flex items-center gap-2 px-6 py-3 border border-primary/40 text-foreground text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors w-fit"
            >
              Falar com especialistas ↗
            </Link>
            <Link
              href="/solucoes"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
            >
              Ver nossas soluções ↗
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/50 text-center">
            Veja como funciona{' '}
            <span className="text-primary/70">nosso método</span>{' '}
            e como{' '}
            <span className="text-primary/70">entramos no seu projeto</span>.
          </p>
        </div>

      </div>
    </section>
  )
}
