import arrow from '../assets/double-arrow.svg'
import { footer } from '../content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.backToTop} href="#top">
        <img className={styles.arrow} src={arrow.src} alt="" />
        <span>{footer.backToTop}</span>
      </a>

      <ul className={styles.socials}>
        {footer.socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} aria-label={social.label}>
              <img src={social.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>

      <p className={styles.copyright}>
        <strong>{footer.copyrightOwner}</strong>
        {footer.copyrightNote}
      </p>
    </footer>
  )
}
