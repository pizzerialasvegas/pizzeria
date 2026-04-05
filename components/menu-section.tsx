'use client'

import { type MenuCategory } from '@/lib/menu-data'
import { MenuItemCard } from './menu-item-card'

type MenuSectionProps = {
  category: MenuCategory
  isActive: boolean
}

const categoryColors: Record<string, string> = {
  pizzas: 'var(--brand-red)',
  calzones: 'var(--brand-blue)',
  personales: 'var(--brand-red)',
  pastas: 'var(--brand-blue)',
  hamburguesas: 'var(--brand-red)'
}

const categoryIcons: Record<string, string> = {
  pizzas: '🍕',
  calzones: '🥟',
  personales: '🍕',
  pastas: '🍝',
  hamburguesas: '🍔'
}

export function MenuSection({ category, isActive }: MenuSectionProps) {
  if (!isActive) return null

  const color = categoryColors[category.id] || 'var(--brand-red)'
  const icon = categoryIcons[category.id] || '🍽️'

  return (
    <section className="py-8 sm:py-12">
      {/* Section header */}
      <div className="mb-8 text-center sm:mb-10">
        <div className="mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <span className="text-2xl">{icon}</span>
          <span className="text-sm font-medium text-gray-600">Menú</span>
        </div>
        <h2 
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color }}
        >
          {category.name}
        </h2>
        <div 
          className="mx-auto mt-4 h-1 w-20 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Items grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {category.items.map((item) => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            categoryColor={color}
          />
        ))}
      </div>
    </section>
  )
}
