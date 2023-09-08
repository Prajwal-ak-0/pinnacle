import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import LoginModal from '@/components/modals/RegisterModal'
import RegisterModal from '@/components/modals/RegisterModal'
import ToastProvider from './providers/ToastProvider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pinnacle Park Estates',
  description: 'Pinnacle Park Estates is a new development in the heart of the beautiful Okanagan Valley.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const currentUser=await getCurrentUser();
    console.log(currentUser)
  return (
    <html lang="en">
      <body className={inter.className}>
          <ToastProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser} />
            {children}
          <div className='p-8'>
          <Footer/>
          </div>
      </body>
    </html>
  )
}
