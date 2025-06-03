'use client' // Enable client-side rendering

import Link from 'next/link' // Import Link component for navigation
import { usePathname } from 'next/navigation' // Import hook to get current path

export default function Navbar() {
  const pathname = usePathname() // Get the current pathname
  
  return (
    <nav className="navbar"> {/* Navigation bar container */}
      <ul>
        <li className={pathname === '/' ? 'active' : ''}> {/* Home link */}
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/about' ? 'active' : ''}> {/* About link */}
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === '/blog' ? 'active' : ''}> {/* Blog link */}
          <Link href="/blog">Blog</Link>
        </li>
        <li className={pathname === '/contact' ? 'active' : ''}> {/* Contact link */}
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}