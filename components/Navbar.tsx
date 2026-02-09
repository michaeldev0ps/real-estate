"use client"
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'


export default function Navbar() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="border-b bg-white dark:bg-primary dark:border-gray-800">
      <div className="container flex items-center justify-between py-4">
        {/* Left: Logo and site name */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} className="rounded" />
          RealEstate
        </Link>

        {/* Right: Nav links, theme toggle, and mobile menu */}
        <div className="flex items-center gap-2 ml-auto">
          <nav className="hidden md:flex gap-6 items-center text-sm mr-4">
            <Link href="/properties" className="hover:text-accent">Properties</Link>
            <Link href="/about" className="hover:text-accent">About</Link>
            <Link href="/contact" className="hover:text-accent">Contact</Link>
          </nav>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent dark:text-gray-100"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? (
              // Sun icon (bolder, more visible)
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/><g stroke="currentColor" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>
            ) : (
              // Crescent moon icon
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.75 15.5a7.25 7.25 0 0 1-7.25-7.25c0-1.61.52-3.1 1.41-4.3A.75.75 0 0 0 10.1 2.1a9.25 9.25 0 1 0 11.8 11.8a.75.75 0 0 0-1.85-.81a7.19 7.19 0 0 1-2.3.41Z"/></svg>
            )}
          </button>
          <div className="md:hidden">
            <button aria-label="open menu" className="p-2">☰</button>
          </div>
        </div>
      </div>
    </header>
  )
}
