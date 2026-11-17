import { about, type AboutEntry } from '../content'
import SectionHeader from './SectionHeader'
import Separator from './Separator'
import styles from './About.module.css'

function Entry({ entry }: { entry: AboutEntry }) {
  return (
    <li className={styles.entry}>
      <h4 className={styles.name}>
        {entry.name}
        {entry.location && <span className={styles.location}>{entry.location}</span>}
      </h4>
      <p className={styles.period}>{entry.period}</p>
      {/* Each "·"-separated part stays in one piece, so a long role wraps at the dot. */}
      <p className={styles.role}>
        {entry.role.split(' · ').map((part, index, parts) => (
          <span key={part} className={styles.rolePart}>
            {part}
            {index < parts.length - 1 && ' · '}
          </span>
        ))}
      </p>

      {entry.notes?.map((note) => (
        <p key={note} className={styles.note}>
          {note}
        </p>
      ))}

      {entry.highlights && (
        <ul className={styles.highlights}>
          {entry.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      {entry.website && (
        <a className={styles.website} href={entry.website.href} target="_blank" rel="noreferrer">
          {entry.website.label}
        </a>
      )}
    </li>
  )
}

export default function About() {
  return (
    <section className={styles.about} id="about">
      <SectionHeader width={404}>{about.title}</SectionHeader>

      <div className={styles.intro}>
        <p className={styles.lead}>{about.lead}</p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <Separator className={styles.separator} />

      <div className={styles.groups}>
        {about.groups.map((group) => (
          <div key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.entries}>
              {group.entries.map((entry) => (
                <Entry key={entry.name} entry={entry} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator className={styles.separator} />
    </section>
  )
}
