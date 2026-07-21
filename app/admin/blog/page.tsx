import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { blogPosts } from '@/lib/db/schema'
import { desc } from 'drizzle-orm'
import Link from 'next/link'
import { AdminBlogClient } from './admin-blog-client'
import { SignOutButton } from './sign-out-button'

export default async function AdminBlogPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/admin/login')

  const posts = await db
    .select()
    .from(blogPosts)
    .orderBy(desc(blogPosts.createdAt))

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Topbar */}
      <header className="border-b border-zinc-800 bg-zinc-950 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-7 h-7 bg-primary flex items-center justify-center shrink-0">
            <span className="text-white font-black text-xs">Ox</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-xs">OxBrand</span>
            <span className="text-zinc-700 font-mono text-xs">/</span>
            <span className="text-white font-mono text-xs">Blog</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500 hidden sm:block">{session.user.name}</span>
          <Link
            href="/admin/blog/novo"
            className="bg-primary text-white text-xs font-bold tracking-widest uppercase px-4 py-2 hover:bg-primary/85 transition-colors"
          >
            + Nova Matéria
          </Link>
          <SignOutButton />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {[
            { label: 'Total de matérias', value: posts.length },
            { label: 'Publicadas', value: posts.filter(p => p.published).length },
            { label: 'Rascunhos', value: posts.filter(p => !p.published).length },
          ].map(stat => (
            <div key={stat.label} className="bg-zinc-950 p-6 flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs font-mono text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Lista de posts */}
        <div className="flex flex-col gap-0 border border-zinc-800">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-6 py-3 border-b border-zinc-800 bg-zinc-900/50">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Título</span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">Tag</span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Status</span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Ações</span>
          </div>

          {posts.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-zinc-600 text-sm font-mono">Nenhuma matéria ainda.</p>
              <Link href="/admin/blog/novo" className="text-primary text-sm font-mono hover:underline mt-2 inline-block">
                Criar a primeira →
              </Link>
            </div>
          )}

          {posts.map(post => (
            <AdminBlogClient key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}


