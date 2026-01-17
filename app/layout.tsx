import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '~/shared/providers/theme-provider';
import { Header } from '~/widgets/header/ui/header';
import { Footer } from '~/widgets/footer/ui/footer';
import { ScrollProgress } from '~/shared/ui/scroll-progress';
import { siteConfig } from '~/shared/config/site';

const inter = Inter({ subsets: ['latin'] });

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
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
