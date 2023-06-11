import './globals.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export const metadata = {
  title: 'actuallyReally.me',
  description: 'July 1, 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caveat.className}>{children}</body>
    </html>
  )
}
