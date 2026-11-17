import Image from 'next/image'
import logo from '../assets/logo.svg'
import { profile } from '../content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.photoFrame}>
        <Image className={styles.photo} src={profile.photo} alt={profile.name} fill sizes="60vw" preload />
      </div>

      <a className={styles.logo} href="#top" aria-label="Back to top">
        <img src={logo.src} alt="" />
      </a>

      <div className={styles.intro}>
        <p className={styles.greeting}>{profile.greeting}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>
        <ul className={styles.socials}>
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a className={styles.social} href={social.href} aria-label={social.label}>
                <img src={social.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
