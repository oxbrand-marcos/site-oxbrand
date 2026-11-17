// Ilustrações dos formatos de logo no briefing. Traço em currentColor para
// herdar o estado (neutro, hover, selecionado) do cartão.

export function LogoStyleArt({ kind }: { kind: string }) {
  const common = {
    width: 120,
    height: 90,
    viewBox: '0 0 120 90',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    'aria-hidden': true,
  } as const

  switch (kind) {
    case 'simbolo-nome':
      return (
        <svg {...common}>
          <path d="M18 58c0-14 10-24 24-24 0 14-10 24-24 24Z" fill="currentColor" stroke="none" opacity=".9" />
          <path d="M26 50c4-4 8-7 12-9" stroke="#161616" />
          <rect x="52" y="38" width="48" height="7" fill="currentColor" stroke="none" />
          <rect x="52" y="50" width="30" height="4" fill="currentColor" stroke="none" opacity=".5" />
        </svg>
      )
    case 'tipografico':
      return (
        <svg {...common} stroke="none">
          <text x="60" y="56" textAnchor="middle" fill="currentColor" fontSize="30" fontWeight="700" letterSpacing="-1.5" fontFamily="var(--font-sans)">
            marca.
          </text>
        </svg>
      )
    case 'monograma':
      return (
        <svg {...common}>
          <text x="48" y="62" textAnchor="middle" fill="currentColor" stroke="none" fontSize="44" fontWeight="700" fontFamily="var(--font-sans)">
            A
          </text>
          <text x="70" y="62" textAnchor="middle" fill="none" fontSize="44" fontWeight="700" fontFamily="var(--font-sans)" strokeWidth="1.6">
            B
          </text>
        </svg>
      )
    case 'emblema':
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="32" />
          <circle cx="60" cy="45" r="25" strokeDasharray="2 4" opacity=".7" />
          <rect x="42" y="40" width="36" height="6" fill="currentColor" stroke="none" />
          <rect x="49" y="50" width="22" height="3" fill="currentColor" stroke="none" opacity=".6" />
          <path d="M54 26l6-5 6 5" />
        </svg>
      )
    case 'abstrato':
      return (
        <svg {...common}>
          <rect x="44" y="29" width="32" height="32" transform="rotate(45 60 45)" fill="currentColor" stroke="none" opacity=".25" />
          <rect x="44" y="29" width="32" height="32" transform="rotate(20 60 45)" />
          <circle cx="60" cy="45" r="7" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'mascote':
      return (
        <svg {...common}>
          <path d="M40 66V44a20 20 0 0 1 40 0v22" />
          <path d="M40 66h40" />
          <path d="M44 30l-6-10M76 30l6-10" />
          <circle cx="52" cy="44" r="3" fill="currentColor" stroke="none" />
          <circle cx="68" cy="44" r="3" fill="currentColor" stroke="none" />
          <path d="M53 54c4 4 10 4 14 0" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect x="36" y="21" width="48" height="48" strokeDasharray="4 5" opacity=".6" />
          <path d="M53 38a7 7 0 1 1 9 7c-2 1-2 2-2 5" />
          <circle cx="60" cy="56" r="1.8" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}
