import { IconLink } from '@tabler/icons-react'
import Link from 'next/link'
import Styles from './index.module.scss'

type Work = {
  title: string
  description: string
  url?: string
  image: string
}

export const Works: React.FC = () => {
  const works: Work[] = [
    {
      title: '新型コロナワクチン予診票ジェネレータ',
      description:
        'コロナワクチンの予診票をブラウザから出力できるWebアプリ。9時間で開発した。',
      url: 'https://www.itmedia.co.jp/news/articles/2109/03/news146.html',
      image: '/works/works_cov19.webp',
    },
  ]

  return (
    <>
      <div className={Styles.worksTitle}>
        <h2>Works</h2>
      </div>
      <div className={Styles.wrap}>
        <div className={Styles.worksList}>
          {works.map(work => {
            return (
              <Link
                href={work.url}
                className={Styles.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className={Styles.workItem}>
                  <div
                    style={{
                      backgroundImage: `url(${work.image})`,
                    }}
                    className={Styles.workItemImg}
                  />
                  <div className={Styles.workItemTitle}>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
