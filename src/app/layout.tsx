

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'

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
        <div className='flex px-10 h-full w-full '>
          <Image src="/about/aboutbg.png" width={900} height={900} alt="background" className='absolute -z-50 top-0 right-0 mt-[130px] md:mt-[90px]'/>
          <div className='w-1/5 h-full'>
            <Sidebar />
          </div>
          <div className='w-4/5 h-full'>
              {children}
          </div>
        </div>
      </body>
    </html>
  )
}
