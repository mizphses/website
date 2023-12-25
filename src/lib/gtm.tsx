'use client'
import Script from 'next/script'

type DataObj = Record<string, string | number>

type WindowWithDataLayer = Window & {
  dataLayer: DataObj[]
}

declare const window: WindowWithDataLayer

export const GoogleTagManager = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
    return null
  }

  return (
    <>
      <noscript>
        <iframe
          title='GTM'
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Script
        id='gtm-script'
        strategy='afterInteractive'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />
    </>
  )
}

export const event = (obj: DataObj) => {
  if (
    typeof window !== 'undefined' &&
    typeof window.dataLayer !== 'undefined'
  ) {
    window.dataLayer.push(obj)
  }
}
