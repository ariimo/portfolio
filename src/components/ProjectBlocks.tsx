import type { CSSProperties } from 'react'
import type { FlowStage, MappingRow, ProjectBlock, ProjectListItem } from '../content'
import styles from './ProjectBlocks.module.css'

/** Text with `code` and **bold** marks. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('`')) {
          return (
            <code key={index} className={styles.code}>
              {part.slice(1, -1)}
            </code>
          )
        }
        if (part.startsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
        return part
      })}
    </>
  )
}

function List({ items, ordered }: { items: ProjectListItem[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'

  return (
    <Tag className={ordered ? styles.ordered : styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <Rich text={typeof item === 'string' ? item : item.text} />
          {typeof item !== 'string' && (
            <ul className={styles.sublist}>
              {item.items.map((child, childIndex) => (
                <li key={childIndex}>
                  <Rich text={child} />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </Tag>
  )
}

function Arrow({ direction }: { direction: 'right' | 'down' }) {
  return (
    <svg
      className={direction === 'right' ? styles.arrowRight : styles.arrowDown}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      aria-hidden="true"
    >
      <path
        d={direction === 'right' ? 'M2 13h20M15 6l7 7-7 7' : 'M13 2v20M6 15l7 7 7-7'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function Flow({ stages, caption }: { stages: FlowStage[]; caption?: string }) {
  return (
    <figure className={styles.figure}>
      <ol className={styles.flow}>
        {stages.map((stage, index) => (
          <li key={index} className={styles.stage}>
            {index > 0 && <Arrow direction="down" />}
            <div className={stage.label ? `${styles.group} ${stage.dark ? styles.dark : ''}` : styles.loose}>
              {stage.label && (
                <p className={styles.groupHead}>
                  <span className={styles.groupLabel}>{stage.label}</span>
                  {stage.note && <span className={styles.groupNote}>{stage.note}</span>}
                </p>
              )}
              <ol className={styles.steps}>
                {stage.steps.map((step, stepIndex) => (
                  <li key={step.name} className={styles.step}>
                    {stepIndex > 0 && <Arrow direction="right" />}
                    <div className={styles.node}>
                      <p className={styles.nodeName}>{step.name}</p>
                      {step.detail && <p className={styles.nodeDetail}>{step.detail}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </li>
        ))}
      </ol>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

type BarsProps = Extract<ProjectBlock, { type: 'bars' }>

function Bars({ title, items, caption }: BarsProps) {
  const max = Math.max(...items.map((item) => item.value))

  return (
    <figure className={styles.figure}>
      <p className={styles.figureTitle}>{title}</p>
      <ul className={styles.bars}>
        {items.map((item) => (
          <li key={item.label} className={styles.barRow}>
            <span className={styles.barLabel}>{item.label}</span>
            <span className={styles.barTrack}>
              <span
                className={`${styles.bar} ${item.muted ? styles.barMuted : ''}`}
                style={{ '--ratio': item.value / max } as CSSProperties}
              />
              <span className={styles.barValue}>{item.value}</span>
            </span>
          </li>
        ))}
      </ul>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

/** A form field drawn the way it is printed: boxes or a line, with its label underneath. */
function FormField({ field }: { field: MappingRow['field'] }) {
  return (
    <div className={styles.field}>
      {field.boxes ? (
        <p className={styles.boxes}>
          {field.boxes.map((group, index) => (
            <span key={index} className={styles.boxGroup}>
              {index > 0 && <span className={styles.dash}>–</span>}
              {[...group].map((character, position) => (
                <span key={position} className={styles.box}>
                  {character}
                </span>
              ))}
            </span>
          ))}
        </p>
      ) : (
        <p className={styles.line}>
          {field.prefix && <span className={styles.prefix}>{field.prefix}</span>}
          <span className={styles.lineText}>{field.text}</span>
        </p>
      )}
      <p className={styles.fieldLabel}>
        <span>{field.label}</span>
        <code className={styles.fieldNames}>{field.names}</code>
      </p>
    </div>
  )
}

type MappingProps = Extract<ProjectBlock, { type: 'mapping' }>

function Mapping({ title, columns, passthrough, rows, caption }: MappingProps) {
  return (
    <figure className={styles.figure}>
      <p className={styles.figureTitle}>{title}</p>
      <div className={styles.mapping}>
        <div className={`${styles.mappingRow} ${styles.mappingHead}`}>
          {columns.map((column) => (
            <span key={column}>{column}</span>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row.source} className={styles.mappingRow}>
            <div>
              <code className={styles.source}>{row.source}</code>
              <code className={styles.sourceValue}>&quot;{row.value}&quot;</code>
            </div>
            <div className={styles.transform}>
              {row.transform ? (
                <code className={styles.transformName}>{row.transform}</code>
              ) : (
                <span className={styles.passthrough}>{passthrough}</span>
              )}
            </div>
            <FormField field={row.field} />
          </div>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

/** The body of one section of the project detail view. */
export default function ProjectBlocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <div className={styles.blocks}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <p key={index} className={styles.text}>
                <Rich text={block.text} />
              </p>
            )
          case 'heading':
            return (
              <h5 key={index} className={styles.heading}>
                {block.text}
              </h5>
            )
          case 'list':
            return <List key={index} items={block.items} ordered={block.ordered} />
          case 'callout':
            return (
              <div key={index} className={styles.callout}>
                {block.label && <p className={styles.calloutLabel}>{block.label}</p>}
                <p className={styles.calloutText}>
                  <Rich text={block.text} />
                </p>
              </div>
            )
          case 'stats':
            return (
              <ul key={index} className={styles.stats}>
                {block.items.map((item) => (
                  <li key={item.label} className={styles.stat}>
                    <p className={styles.statValue}>{item.value}</p>
                    <p className={styles.statLabel}>{item.label}</p>
                  </li>
                ))}
              </ul>
            )
          case 'flow':
            return <Flow key={index} stages={block.stages} caption={block.caption} />
          case 'bars':
            return <Bars key={index} {...block} />
          case 'mapping':
            return <Mapping key={index} {...block} />
        }
      })}
    </div>
  )
}
