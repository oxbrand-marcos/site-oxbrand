'use client'

import { useState } from 'react'
import Image from 'next/image'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  /** 'landscape' (16/9) ou 'portrait' (9/16) */
  aspect?: 'landscape' | 'portrait'
  className?: string
  /** Passa priority=true apenas para vídeos acima da dobra */
  priority?: boolean
}

export function YouTubeFacade({
  videoId,
  title,
  aspect = 'landscape',
  className = '',
  priority = false,
}: YouTubeFacadeProps) {
  const [active, setActive] = useState(false)
  // Shorts não têm maxresdefault — usa hqdefault como fallback universal
  const thumbnailUrl = aspect === 'portrait'
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`
  const aspectClass = aspect === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'

  if (active) {
    return (
      <div className={`relative w-full ${aspectClass} ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Reproduzir: ${title}`}
      className={`relative w-full ${aspectClass} ${className} group overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
    >
      {/* Thumbnail — lazy exceto quando explicitamente acima da dobra */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        sizes={
          aspect === 'portrait'
            ? '(max-width: 640px) 50vw, 220px'
            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        }
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Overlay escuro leve */}
      <span
        className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"
        aria-hidden="true"
      />

      {/* Botão de play */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="w-14 h-14 flex items-center justify-center rounded-full bg-white/95 shadow-lg group-hover:scale-110 group-hover:bg-white transition-transform duration-200">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-zinc-900 translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
