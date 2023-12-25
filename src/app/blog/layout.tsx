import type { Metadata } from 'next'
import { Banner } from './_components/Banner'

export const metadata: Metadata = {
  title: 'ブログ | mizphses / Fuminori OGAWA',
  description: 'mizphsesのブログ',
  openGraph: {
    title: 'ブログ | mizphses / Fuminori OGAWA',
    description: 'mizphsesのブログ',
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
    <>
      <Banner />
      {children}
    </>
  )
}
