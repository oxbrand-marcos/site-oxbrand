import { permanentRedirect } from 'next/navigation'

// A secao de cases foi consolidada em /nossos-clientes.
export default function Page() {
  permanentRedirect('/nossos-clientes')
}
