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
      {/* The role is the headline of an entry: one black tag per "·"-separated part. */}
      {entry.role && (
        <p className={styles.role}>
          {entry.role.split(' · ').map((part) => (
            <span key={part} className={styles.roleTag}>
              {part}
            </span>
          ))}
        </p>
      )}

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
        {[true, false].map((side) => (
          <div key={String(side)} className={styles.column}>
            {about.groups
              .filter((group) => Boolean(group.side) === side)
              .map((group) => (
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
        ))}
      </div>

      <Separator className={styles.separator} />
    </section>
  )
}
