import { Navbar } from '@/components/Navbar'
import { GoogleTagManager } from '@/lib/gtm'
import '@/styles/colors.scss'
import '@/styles/variables.scss'
import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

export const metadata: Metadata = {
  title: 'mizphses / Fuminori OGAWA',
  description:
    'デザインとか、フロントエンドとか、マーケティングとか、キャラ企画とかをやってます。',
  openGraph: {
    title: 'mizphses / Fuminori OGAWA',
    description:
      'デザインとか、フロントエンドとか、マーケティングとか、キャラ企画とかをやってます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://mizphs.es',
    images: [
      {
        url: 'https://mizphs.es/ogp.webp',
        width: 1200,
        height: 630,
        alt: 'mizphses / Fuminori OGAWA',
      },
    ],
  },
  twitter: {
    creator: '@mizphses',
    site: '@mizphses',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://mizphs.es/ogp.webp',
        width: 1200,
        height: 630,
        alt: 'mizphses / Fuminori OGAWA',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <head>
        <GoogleTagManager />
      </head>
      <body>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  )
}
