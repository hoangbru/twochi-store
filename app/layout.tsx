import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Navbar from '@/components/navbar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'twoChi',
  description: 'twoChi store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
