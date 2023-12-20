import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Arya Veer',
  description: 'Know more about me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <div className='min-h-screen'>
        {children}
      </div>
      </body>
    </html>
  )
}
