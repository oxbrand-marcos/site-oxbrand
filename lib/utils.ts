import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calcula o tempo estimado de leitura de um texto.
 * Conta palavras do conteúdo completo, divide por 200 wpm e arredonda para cima.
 * Mínimo retornado: 1 minuto.
 */
export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}
