import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Does My Work | Replace Manual Work With AI',
  description: 'We help operators eliminate repetitive workflows across operations, finance, and internal systems — safely and measurably.',
  keywords: ['AI automation', 'workflow automation', 'business automation', 'AI implementation', 'manual work replacement'],
  openGraph: {
    title: 'AI Does My Work | Replace Manual Work With AI',
    description: 'We help operators eliminate repetitive workflows across operations, finance, and internal systems.',
    url: 'https://aidoesmywork.com',
    siteName: 'AI Does My Work',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
