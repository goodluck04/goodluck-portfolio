import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['400'] } )

export const metadata: Metadata = {
  title: 'Goodluck portfolio',
  description: 'Designed and Build by Goodluck',
  icons: {
    icon: [
      "/favicon.ico?v=4"
    ],
    apple: [
      "/apple-touch-icon.png?=4"
    ],
    shortcut: [
      "/apple-icon.png"
    ]
  },
  manifest: "site.webmanifest"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={montserrat.className}>{children}</body>
    </html>
  )
}
