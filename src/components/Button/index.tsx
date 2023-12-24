import { Button as RadButton } from '@radix-ui/themes'
import styles from './index.module.scss'
import clsx from 'clsx'
import { Rubik, Noto_Sans_JP } from 'next/font/google'

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

type Props = {
  children: React.ReactNode
  color?: 'primary' | 'success' | 'error' | 'info' | 'warning'
  onClick?: () => void
}

export const Button: React.FC<Props> = Props => {
  return (
    <RadButton
      className={clsx(
        styles.button,
        styles[Props.color ?? 'primary'],
        rubik.variable,
        notoSansJP.variable,
      )}
      onClick={Props.onClick}
    >
      {Props.children}
    </RadButton>
  )
}
