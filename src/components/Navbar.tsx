'use client'

import { useEffect, useState } from 'react'
import { navLinks, navSocials } from '../content'
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
        <ul className={styles.socials}>
          {navSocials.map((social) => (
            <li key={social.label}>
              <a className={styles.social} href={social.href} aria-label={social.label}>
                <img src={social.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
