import styles from './SectionHeader.module.css'

type Props = {
  children: string
  /** Width of the framed box in px. */
  width: number
  /** Letter spacing in px. */
  letterSpacing?: number
}

export default function SectionHeader({ children, width, letterSpacing = 10.6614 }: Props) {
  return (
    <h2 className={styles.header} style={{ width, letterSpacing }}>
      {children}
    </h2>
  )
}
