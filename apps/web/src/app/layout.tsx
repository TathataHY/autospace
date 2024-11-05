import '@autospace/ui/src/app/globals.css'
import { Container } from '@autospace/ui/src/components/atoms/Container'
import { ToastContainer } from '@autospace/ui/src/components/molecules/Toast'
import { Header } from '@autospace/ui/src/components/organisms/Header'
import { MenuItem } from '@autospace/utils/types'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RootProvider } from '../providers/root-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Autospace',
  description: 'Find parking for your car',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <RootProvider>
        <body className={`${inter.className} antialiased bg-gray-25`}>
          <Header menuItems={MENUITEMS} />
          <Container>{children}</Container>
          <ToastContainer />
        </body>
      </RootProvider>
    </html>
  )
}
