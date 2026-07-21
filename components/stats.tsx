const diferenciais = [
  {
    titulo: 'Metodologia validada',
    desc: 'em projetos reais',
  },
  {
    titulo: 'Rotina de análise e otimização',
    desc: 'semanal, sem falhar',
  },
  {
    titulo: 'Atuação no Brasil e internacional',
    desc: 'projetos em múltiplos mercados',
  },
  {
    titulo: 'Time completo de especialistas',
    desc: 'uma frente dedicada por área',
  },
]

export function Stats() {
  return (
    <section className="border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-3 py-10 px-6 items-center text-center lg:items-start lg:text-left ${
                i < diferenciais.length - 1 ? 'border-r border-border' : ''
              }`}
            >
              <span
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0"
                style={{ borderColor: 'rgb(92 54 235 / 0.7)' }}
                aria-hidden="true"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: '#5c36eb' }}
                />
              </span>
              <span className="text-sm font-bold text-foreground leading-snug">{item.titulo}</span>
              <span className="mono-tag text-muted-foreground/50">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
