import { club } from '../content'
import styles from './Club.module.css'

export default function Club() {
  return (
    <section className={styles.club}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>{club.title}</h2>
          <p className={styles.lead}>{club.lead}</p>
        </div>

        <ol className={styles.principles}>
          {club.principles.map((principle, index) => (
            <li key={principle} className={styles.principle}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
