'use client'

import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'

export { isValidPhoneNumber } from 'react-phone-number-input'

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
 * O estilo da "caixa" vem de wrapperClassName (mesmas classes dos outros inputs
 * de cada formulário), e o input interno herda cor/fonte pra casar com o tema.
 */
export function PhoneField({ id, value, onChange, wrapperClassName, placeholder }: Props) {
  return (
    <div className={`oxphone ${wrapperClassName ?? ''}`}>
      <PhoneInput
        id={id}
        international
        defaultCountry="BR"
        countryCallingCodeEditable={false}
        flags={flags}
        value={value}
        onChange={(v) => onChange(v ?? '')}
        placeholder={placeholder ?? '(11) 98995-4992'}
      />
    </div>
  )
}
