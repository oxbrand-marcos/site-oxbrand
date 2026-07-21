'use client'

import { useState } from 'react'
import Link from 'next/link'
import { togglePublish, deletePost } from '@/app/actions/blog'
import type { BlogPost } from '@/lib/db/schema'

export function AdminBlogClient({ post }: { post: BlogPost }) {
  const [published, setPublished] = useState(post.published)
  const [deleting, setDeleting] = useState(false)

  async function handleToggle() {
    const next = !published
    setPublished(next)
    await togglePublish(post.id, next)
  }

  async function handleDelete() {
    if (!confirm(`Excluir "${post.title}"? Esta ação não pode ser desfeita.`)) return
    setDeleting(true)
    await deletePost(post.id)
  }

  return (
    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center px-6 py-4 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
      {/* Título */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-sm text-white font-medium truncate">{post.title}</span>
        <span className="text-xs text-zinc-600 font-mono truncate">/blog/{post.slug}</span>
      </div>

      {/* Tag */}
      <span className="text-xs font-mono text-zinc-400 border border-zinc-800 px-2 py-0.5 hidden sm:block whitespace-nowrap">
        {post.tag}
      </span>

      {/* Status toggle */}
      <button
        onClick={handleToggle}
        className={`text-xs font-mono px-2 py-0.5 border transition-colors whitespace-nowrap ${
          published
            ? 'text-green-400 border-green-900/60 bg-green-950/30 hover:bg-green-950/60'
            : 'text-zinc-500 border-zinc-800 hover:border-zinc-600'
        }`}
      >
        {published ? 'Publicado' : 'Rascunho'}
      </button>

      {/* Ações */}
      <div className="flex items-center gap-3">
        <Link
          href={`/admin/blog/${post.id}/editar`}
          className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          Editar
        </Link>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-xs font-mono text-zinc-600 hover:text-red-400 transition-colors disabled:opacity-40"
        >
          {deleting ? '...' : 'Excluir'}
        </button>
      </div>
    </div>
  )
}
