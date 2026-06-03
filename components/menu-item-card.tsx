'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { type MenuItem } from '@/lib/menu-data'

type MenuItemCardProps = {
  item: MenuItem
  categoryColor?: string
}

export function MenuItemCard({ item, categoryColor = 'var(--brand-red)' }: MenuItemCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalOpen])

  return (
    <>
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-gray-200">
        {/* Image container */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-zoom-in"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Price badge */}
          <div
            className="absolute right-3 top-3 rounded-full px-4 py-2 text-base font-bold text-white shadow-lg"
            style={{ backgroundColor: categoryColor }}
          >
            Q{item.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-base font-semibold text-gray-900 leading-snug text-balance sm:text-lg">
            {item.name}
          </h3>
          {item.description && (
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: categoryColor }}
        />
      </article>

      {/* Lightbox modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setModalOpen(false)}
            aria-label="Cerrar"
          >
            <X className="size-6" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={900}
              height={675}
              className="object-contain max-h-[90vh] max-w-[90vw]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm">
              {item.name} — Q{item.price}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
