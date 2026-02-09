import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Real Estate Portfolio',
  description: 'Minimal real estate portfolio demo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
