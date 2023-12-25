'use client'
import { mcms_client } from '@/lib/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Styles from './index.module.scss'

type Work = {
  title: string
  description: string
  url: string
  image: string
}

type Props = {
  Number?: number | 3
}

export const Articles: React.FC<Props> = props => {
  const [works, setWorks] = useState<Work[]>([])
  useEffect(() => {
    mcms_client
      .getList({
        endpoint: 'blogs',
        queries: { limit: props.Number },
      })
      .then(res => {
        setWorks(
          res.contents.map(work => {
            return {
              title: work.title,
              description: work.description,
              url: `/blog/${work.id}`,
              image: work.eyecatch.url,
            }
          }),
        )
      })
  })

  return (
    <>
      <div className={Styles.worksTitle}>
        <h2>Latest Articles</h2>
      </div>
      <div className={Styles.wrap}>
        <div className={Styles.worksList}>
          {works.map(work => {
            return (
              <Link
                href={work.url as string}
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
