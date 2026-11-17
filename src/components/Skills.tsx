import { skills } from '../content'
import SectionHeader from './SectionHeader'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <SectionHeader width={404}>{skills.title}</SectionHeader>

      <div className={styles.groups}>
        {skills.groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.items}>
              {group.items.map((skill) => (
                <li key={skill.label} className={styles.skill}>
                  <img className={styles.icon} src={skill.icon} alt="" />
                  <p className={styles.label}>{skill.label}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
