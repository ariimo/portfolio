'use client'

import Image from 'next/image'
import { useState } from 'react'
import { portfolio, type Project, type ProjectCategory } from '../portfolio'
import ProjectModal from './ProjectModal'
import SectionHeader from './SectionHeader'
import styles from './Portfolio.module.css'

type Filter = 'all' | ProjectCategory

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  // Project shown in the detail view, if any.
  const [opened, setOpened] = useState<Project | null>(null)

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.banner}>
        <SectionHeader width={482} letterSpacing={13.0614} light>
          {portfolio.title}
        </SectionHeader>
      </div>

      <div className={styles.filters}>
        {portfolio.filters.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.filter} ${filter === option.value ? styles.active : ''}`}
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <ul className={styles.grid}>
        {portfolio.projects.map((project, index) =>
          filter === 'all' || project.category === filter ? (
            <li key={index} className={styles.project}>
              <button type="button" className={styles.card} onClick={() => setOpened(project)}>
                <Image
                  className={`${styles.thumbnail} ${project.mirrored ? styles.mirrored : ''}`}
                  src={project.image}
                  alt=""
                  fill
                  sizes="34vw"
                />
                <span className={styles.details}>
                  <span className={styles.tags}>{portfolio.categoryLabels[project.category]}</span>
                  <span className={styles.title}>{project.title}</span>
                  <span className={styles.description}>{project.description}</span>
                  <span className={styles.more}>{portfolio.detailsLabel}</span>
                </span>
              </button>
            </li>
          ) : null,
        )}
      </ul>

      <p className={styles.footnote}>{portfolio.footnote}</p>

      <ProjectModal project={opened} onClose={() => setOpened(null)} />
    </section>
  )
}
