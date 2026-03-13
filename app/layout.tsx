import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import '../styles/globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Copa Apertura B Nacional – Patinaje Artístico | Posadas, Misiones 2025',
  description: 'Copa Apertura B Nacional de Patinaje Artístico sobre Ruedas. Posadas, Misiones, Argentina. 25 de Abril al 2 de Mayo. Organizado por FEMIPAT y CAP.',
  icons: {
    icon: '/images/logos/navbar/logo_copa.webp',
    apple: '/images/logos/navbar/logo_copa.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
