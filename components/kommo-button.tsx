'use client'

import { useEffect } from 'react'
import { captureAttribution, buildSourceSuffix } from '@/lib/wa-source'

/**
 * Botão de chat/WhatsApp oficial do Kommo (Website Chat Button).
 * Ao iniciar a conversa por ele, o Kommo captura os UTMs do navegador e
 * preenche os campos de "Informação rastreada" do lead. Também empurramos,
 * via setMeta, uma nota com a origem de 1ª interação (página + UTM) que
 * capturamos no cookie, para garantir a atribuição mesmo após navegação.
 *
 * Injetado de forma diferida (via DeferredGlobals) para não pesar no TBT.
 */
export function KommoButton() {
  useEffect(() => {
    captureAttribution()

    const w = window as typeof window & { crm_plugin?: { setMeta?: (p: unknown) => void } }
    if (w.crm_plugin || document.getElementById('crm_plugin_script')) return

    // Snippet oficial do Kommo (conta 1078177), injetado como script inline.
    const inline = document.createElement('script')
    inline.textContent =
      '(function(a,m,o,c,r,m){a[m]={id:"1078177",hash:"c3766a91f5d5c32cc8b1dc79fe4a3b3c3a072ba469c211d1fe095b2c0f1d24e6",locale:"pt",setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement("script");s.async=true;s.id=m+"_script";s.src="https://gso.kommo.com/js/button.js";d.head&&d.head.appendChild(s)}(window,0,"crmPlugin",0,0,"crm_plugin"));'
    document.head.appendChild(inline)

    // Empurra a origem de 1ª interação como nota no lead criado pelo botão.
    try {
      const suffix = buildSourceSuffix()
      if (suffix && w.crm_plugin && typeof w.crm_plugin.setMeta === 'function') {
        w.crm_plugin.setMeta({
          note: { text: suffix, element_type: 2, note_type: 'common' },
        })
      }
    } catch {}
  }, [])

  return null
}
