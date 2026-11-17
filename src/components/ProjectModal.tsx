'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { portfolio, type Project } from '../portfolio'
import ProjectBlocks from './ProjectBlocks'
import styles from './ProjectModal.module.css'

type Props = {
  /** Project to show; the dialog is closed while this is null. */
  project: Project | null
  onClose: () => void
}

/** Detail view of one project. Closes with the X button, the Esc key, or a click outside. */
export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) {
      dialog.showModal()
      dialog.scrollTop = 0
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      // A click on the backdrop lands on the dialog element itself.
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {project && (
        <article>
          <div className={styles.closeBar}>
            <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
            </button>
          </div>

          <div className={styles.cover}>
            <Image
              className={`${styles.coverImage} ${project.mirrored ? styles.mirrored : ''}`}
              src={project.image}
              alt=""
              fill
              sizes="55vw"
            />
          </div>

          <div className={styles.body}>
            <p className={styles.category}>{portfolio.categoryLabels[project.category]}</p>
            <h3 className={styles.title} id="project-modal-title">
              {project.title}
            </h3>
            <p className={styles.description}>{project.description}</p>

            {(project.role || project.period || project.stack || project.links) && (
              <dl className={styles.meta}>
                {project.role && (
                  <div className={styles.metaRow}>
                    <dt>ROLE</dt>
                    <dd>{project.role}</dd>
                  </div>
                )}
                {project.period && (
                  <div className={styles.metaRow}>
                    <dt>PERIOD</dt>
                    <dd>{project.period}</dd>
                  </div>
                )}
                {project.stack && (
                  <div className={styles.metaRow}>
                    <dt>STACK</dt>
                    <dd>
                      <ul className={styles.stack}>
                        {project.stack.map((name) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                {project.links && (
                  <div className={styles.metaRow}>
                    <dt>LINKS</dt>
                    <dd>
                      <ul className={styles.links}>
                        {project.links.map((link) => (
                          <li key={link.href}>
                            <a href={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>
            )}

            {project.sections.map((section) => (
              <section key={section.title} className={styles.section}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <ProjectBlocks blocks={section.blocks} />
              </section>
            ))}
          </div>
        </article>
      )}
    </dialog>
  )
}
