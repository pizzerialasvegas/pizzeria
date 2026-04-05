import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: 'Pizzería Las Vegas - La Casa de la Pizza',
  description: 'Pizzería Las Vegas - Servicio a domicilio GRATIS en zona 3. Pizzas, Calzones, Pastas, Hamburguesas y más. 12 CALLE "C" 6-51 ZONA 3.',
  keywords: ['pizzería', 'pizza', 'las vegas', 'zona 3', 'guatemala', 'delivery', 'calzone', 'lasaña', 'hamburguesas'],
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#c31e23',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
