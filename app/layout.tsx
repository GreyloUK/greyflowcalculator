import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GreyFlow Pricing Calculator',
  description: 'LinkedIn marketing service pricing calculator for machine shops',
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-greyflow-bg text-greyflow-text min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 