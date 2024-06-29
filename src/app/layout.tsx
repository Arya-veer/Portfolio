

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import Navbar from '@/components/navbar'

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
        <div className='flex md:flex-row flex-col md:px-10 px-2 h-full w-full pb-2'>
          <Image src="/about/aboutbg.png" quality={100} fill alt="background" className='absolute -z-50 top-0 right-0 mt-[130px] md:mt-[70px] md:bg-contain bg-cover'/>
          <div className='md:w-1/4 w-full h-full block '>
            <Sidebar />
          </div>
          <div className='md:w-3/4 w-full h-full'>
              <Navbar />
              {children}
          </div>
        </div>
      </body>
    </html>
  )
}
