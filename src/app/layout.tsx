import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { portfolioData } from "@/components/constants/data"

export const metadata: Metadata = {
  title: portfolioData.metadata.title,
  description: portfolioData.metadata.description,
  keywords: portfolioData.metadata.keywords,
  authors: [{ name: portfolioData.metadata.author }],
  creator: portfolioData.metadata.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.metadata.url,
    title: portfolioData.metadata.title,
    description: portfolioData.metadata.description,
    siteName: portfolioData.metadata.siteName,
    images: [
      {
        url: portfolioData.profilePic,
        width: 1200,
        height: 630,
        alt: portfolioData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.metadata.title,
    description: portfolioData.metadata.description,
    images: [portfolioData.profilePic],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "BLBiJkR7FK3ddNP8cLeqqbagZMh_biDvJEaGrrpNiL4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}


