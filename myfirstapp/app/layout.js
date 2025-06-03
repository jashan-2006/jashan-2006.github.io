import '../styles/globals.css'  // Changed from './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'My First App - Assignment',
  description: 'Advanced Front-End Development Assignment',
}

/**
 * Root layout component for the application.
 * Wraps all pages with a common HTML structure, including the Navbar and main container.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to render inside the main container.
 * @returns {JSX.Element} The root layout structure.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}