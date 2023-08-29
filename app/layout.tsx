import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import ModalProvider from '@/providers/modalProvider'
import ToastProvider from '@/providers/toastProvider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmet Store',
  description: 'Welcome to Ahmet Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
