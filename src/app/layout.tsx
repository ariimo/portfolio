import type { Metadata } from 'next'
import { Montserrat, Noto_Sans_KR, Nunito, Open_Sans, Raleway } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
})
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
// Korean text. Not preloaded: the browser fetches only the slices holding the characters on the page.
const notoSansKr = Noto_Sans_KR({ preload: false, variable: '--font-noto-sans-kr' })

const fontVariables = [montserrat, raleway, openSans, nunito, notoSansKr]
  .map((font) => font.variable)
  .join(' ')

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
