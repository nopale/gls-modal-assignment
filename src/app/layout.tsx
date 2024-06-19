import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import './globals.css'
import Link from 'next/link'
import Navbar from './components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GLS/NXT Modal Components',
  description: 'Senior Frontend Developer Assignement - Alessandro Amato',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
