import clsx from 'clsx'
import { Noto_Sans_JP, Rubik } from 'next/font/google'
import Styles from './index.module.scss'

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

export const Banner: React.FC = () => {
  return (
    <div
      className={clsx(Styles.blogBanner, rubik.variable, notoSansJP.variable)}
    >
      <p>ブログ</p>
    </div>
  )
}
