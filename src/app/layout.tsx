import type { Metadata } from 'next'
import { Syne, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Alex Baggio — EE Student',
  description: 'Personal portfolio of Alex Baggio, 3rd Year Electrical Engineering Student at Dalhousie University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}
