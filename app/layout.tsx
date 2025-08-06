import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { InteractiveCursor } from '@/components/interactive-cursor'
import { ParticleSystem } from '@/components/particle-system'
import { ScrollProgress } from '@/components/scroll-progress'
import { siteConfig } from '@/lib/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.social.website,
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    creator: '@irvingcaamal',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{ cursor: 'none' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <InteractiveCursor />
          <ParticleSystem />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
