import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono} from 'next/font/google'
import Navbar from './components/Navbar'

const space = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={space.className}>
        <header className='grid place-content-center min-h-screen bg-blue-950 '>
         <div className='sm:w-[500px] md:w-600px] lg:w-[700px] '>
          <Navbar />
          <main>{children}</main>
          </div>
        </header>
       
      </body>
    </html>
  )
}
