import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

const gotham = localFont({
  src: [
    {
      path: './fonts/Gotham Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gotham Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Gotham Ultra.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gotham',
})

export const metadata: Metadata = {
  title: 'Copa Apertura Nacional B – Patinaje Artístico | Posadas, Misiones 2025',
  description: 'Copa Apertura Nacional B de Patinaje Artístico sobre Ruedas. Posadas, Misiones, Argentina. 25 de Abril al 2 de Mayo. Organizado por FEMIPAT y CAP.',
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
    <html lang="es" className="scroll-smooth">
      <body className={`${gotham.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
