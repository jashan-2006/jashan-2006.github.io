'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav className="navbar">
      <ul>
        <li className={pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/about' ? 'active' : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === '/blog' ? 'active' : ''}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}