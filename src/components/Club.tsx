import ellipse1 from '../assets/itb-ellipse-1.svg'
import ellipse2 from '../assets/itb-ellipse-2.svg'
import rect from '../assets/itb-rect.svg'
import { club } from '../content'
import styles from './Club.module.css'

export default function Club() {
  return (
    <section className={styles.club}>
      <div className={styles.mark} aria-hidden="true">
        <div className={styles.ellipse1}>
          <img src={ellipse1.src} alt="" />
        </div>
        <div className={styles.ellipse2}>
          <img src={ellipse2.src} alt="" />
        </div>
        <div className={styles.rect}>
          <img src={rect.src} alt="" />
        </div>
        <div className={styles.letters}>
          <span>IT</span>
        </div>
      </div>

      <h2 className={styles.title}>{club.title}</h2>
      <div className={styles.text}>
        {club.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ol className={styles.principles}>
          {club.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
