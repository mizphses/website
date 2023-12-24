'use client'

import { Button } from '@/components/Button'
import Styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandMastodon,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react'

type Props = {
  className?: string
}

export const Intro: React.FC<Props> = () => {
  const [isYatogame, setIsYatogame] = useState(false)
  const toggleIcon = () => {
    setIsYatogame(!isYatogame)
  }
  return (
    <div className={Styles.wrap}>
      <div className={Styles.iconPhoto}>
        {isYatogame ? (
          <>
            <Image
              src='/icon_yatogame.webp'
              alt='icon (Yatogame-chan)'
              width={200}
              height={200}
            />
            <p className={Styles.microText}>
              Icon from{' '}
              <Link href='https://yatogame.nagoya'>
                Yatogame Chan Kansatsu Nikki's website
              </Link>
            </p>
          </>
        ) : (
          <>
            <Image
              src='/icon_photo.webp'
              alt='icon (Yatogame-chan)'
              width={200}
              height={200}
            />
            <p className={Styles.microText}>©2023 mizphses / Photo at Onneyu</p>
          </>
        )}
        <Button color='primary' onClick={toggleIcon}>
          Photo / Icon
        </Button>
      </div>
      <div className={Styles.text}>
        <h1 className={Styles.title}>mizphses</h1>
        <p>尾川 史典 / Fuminori OGAWA</p>
        <hr />
        <p className={Styles.description}>
          デザインとか、フロントエンドとか、マーケティングとか、キャラ企画とか。
        </p>
        <p className={Styles.description}>
          個人開発でワイワイやってたらなんかお金もらえる状態になってました。
        </p>
        <h3>Contact</h3>
        <p className={Styles.linkIcons}>
          <Link href='https://twitter.com/mizphses'>
            <IconBrandX size={30} />
          </Link>
          <Link href='https://instagram.com/mizphses'>
            <IconBrandInstagram size={30} />
          </Link>
          <Link href='https://facebook.com/mizphses'>
            <IconBrandFacebook size={30} />
          </Link>
          <Link href='https://misskey.io/@mizphses'>
            <IconBrandMastodon size={30} />
          </Link>
          <Link href='mailto:mizphses+inquiry-from-website@gmail.com'>
            <IconMail size={30} />
          </Link>
        </p>
      </div>
    </div>
  )
}
