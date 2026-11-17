import Image from 'next/image'
import { profile } from '../content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.photoFrame}>
        <Image className={styles.photo} src={profile.photo} alt={profile.name} fill sizes="60vw" preload />
      </div>

      <div className={styles.intro}>
        <p className={styles.greeting}>{profile.greeting}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.statement}>
          <strong>{profile.intro[0]}</strong>
          <span>{profile.intro[1]}</span>
        </p>
      </div>
    </section>
  )
}
