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
  title: 'Autospace | Valet',
  description: 'Manage your trips',
}

const MENUITEMS: MenuItem[] = [{ label: 'My Trips', href: '/my-trips' }]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-25`}>
        <RootProvider>
          <Header type="valet" menuItems={MENUITEMS} />
          <Container>{children}</Container>
        </RootProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
