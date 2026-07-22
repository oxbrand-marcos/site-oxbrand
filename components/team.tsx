import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const members = [
  {
    name: 'Marcos Blaustein',
    role: 'CEO & Estrategista',
    bio: 'Há mais de 15 anos atua com tecnologia e performance aplicada ao comercial. Lidera estratégias de dados, mensuração, automação e otimização para aumentar conversões, reduzir desperdícios e gerar mais previsibilidade.',
    expertise: ['Dados', 'Automação', 'Performance'],
    image: '/images/team/marcos.png',
    links: {
      instagram: 'https://www.instagram.com/marcosblaustein/',
      linkedin: 'https://www.linkedin.com/in/marcos-blaustein-5302712a/',
    },
  },
  {
    name: 'Walquiria Blaustein',
    role: 'COO & Marketing',
    bio: 'Há mais de 10 anos atua com estratégia, conteúdo e posicionamento de marcas. Lidera a operação de marketing, organizando processos, produção e comunicação para fortalecer a presença digital e gerar resultados consistentes.',
    expertise: ['Estratégia', 'Conteúdo', 'Branding'],
    image: '/images/team/walquiria.png',
    links: {
      instagram: 'https://www.instagram.com/walquiriablaustein/',
      linkedin: 'https://www.linkedin.com/in/walquiria-costa-blaustein-a202091a5/',
    },
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 border-b border-border section-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-12 items-center text-center lg:items-start lg:text-left">
          <span className="mono-tag text-muted-foreground/60">Time</span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Quem está nos bastidores<br />
            do seu{' '}
            <span className="text-glow">projeto.</span>
          </h2>
        </div>

        {/* Grid — 3 colunas: Marcos | Walquíria | Manifesto */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-px bg-border w-full">
          {members.map((member) => (
            <div key={member.name} className="bg-background group overflow-hidden card-lift flex flex-col">

              {/* Foto */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} na OxBrand`}
                  fill
                  className="object-cover object-top transition-all duration-500"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, #eae6e6 0%, transparent 55%)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="mono-tag mt-1">{member.role}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {member.bio}
                </p>

                {/* Tags de expertise */}
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="mono-tag px-2 py-1 border border-border text-muted-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links sociais */}
                <div className="flex items-center gap-3 pt-1 border-t border-border">
                  <Link
                    href={member.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <ExternalLink size={12} />
                    Instagram
                  </Link>
                  {member.links.linkedin && (
                    <Link
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <ExternalLink size={12} />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* 3º bloco — Manifesto */}
          <div
            className="flex flex-col justify-between p-8"
            style={{ background: '#1d1d1d', border: '1px solid rgb(92 54 235 / 0.30)' }}
          >
            <div className="flex flex-col gap-5 flex-1">
              <span className="mono-tag" style={{ color: '#a68cff' }}>Sobre nós</span>
              <p className="text-sm leading-relaxed" style={{ color: '#c8c4c4' }}>
                Duas trajetórias, uma obsessão: transformar marketing em estrutura de crescimento.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#c8c4c4' }}>
                Marcos veio da tecnologia e da performance. Walquiria, da estratégia e da comunicação. Juntos, montamos uma operação onde nada é por achismo: cada decisão passa por dados, método e responsabilidade com o resultado do cliente.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#c8c4c4' }}>
                Não vendemos pacote nem promessa. Construímos previsibilidade, com transparência em cada etapa e relações que duram porque entregam.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#c8c4c4' }}>
                Duas lideranças, uma missão: fazer o seu negócio crescer com direção.
              </p>
            </div>
            <p className="mt-8 text-sm font-bold tracking-wide pt-5"
              style={{ color: '#a68cff', borderTop: '1px solid rgb(92 54 235 / 0.25)' }}>
              Marcos e Walquiria
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
