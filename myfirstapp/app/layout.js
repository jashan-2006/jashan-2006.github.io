import '../styles/globals.css'  // Changed from './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'My First App - Assignment',
  description: 'Advanced Front-End Development Assignment',
}

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