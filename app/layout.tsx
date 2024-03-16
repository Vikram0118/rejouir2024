import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import DataProvider from '@/components/store/DataProvider'
import { ChakraProvider } from '@chakra-ui/react'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Rejouir 2024',
  description: 'Rejouir 2024 - Let the party begin!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="overflow-y-scroll">
        <body className={poppins.className}>
          <ChakraProvider>
            <DataProvider>{children}</DataProvider>
          </ChakraProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
