'use client'

import Image from 'next/image'
import { type MenuItem } from '@/lib/menu-data'

type MenuItemCardProps = {
  item: MenuItem
  categoryColor?: string
}

export function MenuItemCard({ item, categoryColor = 'var(--brand-red)' }: MenuItemCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-gray-200">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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
  )
}
