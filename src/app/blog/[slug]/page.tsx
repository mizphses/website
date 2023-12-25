import { mcms_client } from '@/lib/client'
import { IconBrandX } from '@tabler/icons-react'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, Rubik } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Styles from './page.module.scss'

export const runtime = 'edge';

export type category = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type microCmsBlogType = {
  id: string
  title: string
  category: category | category[]
  content: string
  description: string
  createdAt: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
}

type props = {
  params: {
    slug: string
  }
}
const inter = Inter({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-inter',
})
const notoJP = Noto_Sans_JP({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-noto-jp',
})

const rubik = Rubik({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-rubik',
})

export async function generateMetadata({
  params: { slug },
}: props): Promise<Metadata> {
  const data: microCmsBlogType = await mcms_client.get({
    endpoint: 'blogs',
    contentId: slug,
  })

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'article',
      images: [
        {
          url: data.eyecatch.url,
          width: data.eyecatch.width,
          height: data.eyecatch.height,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [
        {
          url: data.eyecatch.url,
          width: data.eyecatch.width,
          height: data.eyecatch.height,
          alt: data.title,
        },
      ],
    },
  }
}

export default async function ArticlePage({
  params: { slug },
}: props): Promise<JSX.Element> {
  const articleList = await mcms_client
    .getList({
      endpoint: 'blogs',
    })
    .catch(() => {
      return notFound()
    })
  if (
    !articleList.contents
      .map(content => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return content.id
      })
      .includes(slug)
  ) {
    return notFound()
  }

  const data: microCmsBlogType = await mcms_client.get({
    endpoint: 'blogs',
    contentId: slug,
  })

  const pageUrl = `https://mizphs.es/articles/${slug}`
  const twitterShareUrl = `
  https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${data.title} | mizphses / Fuminori OGAWA Blog`,
  )}&url=${encodeURIComponent(pageUrl)}&hashtags=${encodeURIComponent(
    'mizphses_blog',
  )}&via=${encodeURIComponent('mizphses')}`

  return (
    <div
      className={clsx(
        notoJP.variable,
        inter.variable,
        rubik.variable,
        Styles.main,
      )}
    >
      <div className={Styles.title}>
        <h2>{data.title}</h2>
        <p>{data.createdAt.slice(0, 10)}</p>
      </div>
      <main className={Styles.mainInde}>
        <div className={Styles.contentWrap}>
          <div className={Styles.content}>
            <div className={Styles.buttonsWrap}>
              <Link href={twitterShareUrl} className={Styles.xShareButton}>
                <IconBrandX />
                X(Twitter)で共有
              </Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
          <div>
            <div className={Styles.content}>
              <div className={Styles.authorInde}>
                <Image
                  src='/icon_yatogame.webp'
                  alt='mizphses'
                  height={50}
                  width={50}
                />
                <div>
                  <h3>ライター: mizphses</h3>
                </div>
              </div>
              <p>このサイトの主</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
