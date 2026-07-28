'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

// isValidPhoneNumber é uma função leve, mantida em import estático p/ validação nos forms
export { isValidPhoneNumber } from 'react-phone-number-input'

// O PhoneInput carrega bandeiras (245 países) + <select> pesado.
// Só é montado quando o campo entra na tela (IntersectionObserver) ou recebe foco.
// Até lá, um <input> placeholder do MESMO tamanho segura o layout (CLS zero) e o
// chunk pesado fica fora da hidratação inicial, derrubando o TBT nas páginas com form.
const LazyPhoneInput = dynamic(() => import('./phone-input-inner'), {
  ssr: false,
  loading: () => null,
})

type Props = {
  id?: string
  value: string
  onChange: (v: string) => void
  wrapperClassName?: string
  placeholder?: string
}

/**
 * Campo de telefone com seletor de país (bandeira) e DDI.
 * Retorna o valor em formato E.164, ex: +5511989954992.
 */
export function PhoneField({ id, value, onChange, wrapperClassName, placeholder }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) return
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [active])

  return (
    <div ref={ref} className={`oxphone ${wrapperClassName ?? ''}`}>
      {active ? (
        <LazyPhoneInput id={id} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input
          type="tel"
          inputMode="tel"
          placeholder={placeholder ?? '(11) 98995-4992'}
          className="w-full bg-transparent outline-none"
          aria-label="Telefone"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setActive(true)}
        />
      )}
    </div>
  )
}
