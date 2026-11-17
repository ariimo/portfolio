'use client'

import { useEffect, useState } from 'react'
import { navCta, navLinks } from '../content'
import styles from './Navbar.module.css'

// Scroll distance (px) after which the navbar switches to its solid bar.
const SCROLL_THRESHOLD = 60

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} className={styles.link} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className={styles.cta} href={navCta.href}>
          {navCta.label}
        </a>
      </nav>
    </header>
  )
}
