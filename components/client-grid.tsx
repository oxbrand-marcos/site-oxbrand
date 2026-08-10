import Image from 'next/image'
import { CLIENT_LOGOS } from '@/src/config/clients'

export function ClientGrid() {
  return (
    <section className="py-24 border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-black/8"
          aria-label="Clientes OxBrand"
        >
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="group relative border-b border-r border-black/8 flex items-center justify-center p-8 aspect-[3/2] bg-white hover:bg-gray-50 transition-colors duration-200 overflow-hidden"
              title={logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                unoptimized
                className="h-14 w-auto object-contain brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
