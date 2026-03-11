import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        <Analytics />
      </body>
    </html>
  )
}
