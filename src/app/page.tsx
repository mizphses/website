import { Articles } from '@/components/Articles'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { Noto_Sans_JP, Rubik } from 'next/font/google'
import Link from 'next/link'
import { Works } from '../components/Works'
import { Intro } from './_components/intro'
import styles from './page.module.scss'

const rubik = Rubik({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-rubik',
})
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-noto-jp',
})

export default function Home() {
  return (
    <div className={clsx(styles.wrap, rubik.variable, notoSansJP.variable)}>
      <Intro />
      <main className={styles.main}>
        <Works />
        <Articles Number={3} />
        <p>
          ©2023- mizphses | <Link href='notice_beta.pdf'>Beta Edition</Link>
        </p>
      </main>
    </div>
  )
}
