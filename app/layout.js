import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "François Delmaire | Décorateur d'intérieur",
  description: "François Delmaire est un décorateur d'intérieur basé à Versailles.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
