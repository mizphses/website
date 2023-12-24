'use client'

import { IconMenu, IconX } from '@tabler/icons-react'
import clsx from 'clsx'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../Logo'
import Style from './style.module.scss'
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
  variable: '--font-notojp',
})

const menuItems = [
  {
    url: '/',
    label: 'トップページ',
  },
]

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    return setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={clsx(
        Style.wrap,
        inter.variable,
        notoJP.variable,
        isMenuOpen && Style.open,
      )}
    >
      <div className={Style.inde}>
        <div>
          <h1 className={Style.logo}>
            <Link href='/'>
              <Logo color='var(--text-primary)' />
            </Link>
          </h1>
        </div>
        <div>
          <div className={Style.menuPc}>
            {menuItems.map(item => {
              return (
                <a key={item.url} href={item.url} className={Style.menuPcItem}>
                  {item.label}
                </a>
              )
            })}
          </div>
          <div className={Style.menuSp}>
            <button
              className={Style.menuSpItem}
              type='button'
              onClick={() => {
                toggleMenu()
              }}
            >
              {isMenuOpen ? (
                <IconX color='#282c32' />
              ) : (
                <IconMenu color='#282c32' />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={clsx(Style.menuSpLarge, isMenuOpen && Style.open)}>
        <Drawer />
      </div>
    </div>
  )
}

export const Drawer: React.FC = () => {
  return (
    <div className={clsx(Style.menuSpDrawer, inter.variable, notoJP.variable)}>
      {menuItems.map(item => {
        return (
          <p key={item.url}>
            <a href={item.url} className={Style.menuSpItem}>
              {item.label}
            </a>
          </p>
        )
      })}
    </div>
  )
}
