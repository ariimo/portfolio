import styles from './SectionHeader.module.css'

type Props = {
  children: string
  /** Width of the framed box in px. */
  width: number
  /** Letter spacing in px. */
  letterSpacing?: number
  /** White on dark instead of black on light. */
  light?: boolean
}

export default function SectionHeader({ children, width, letterSpacing = 10.6614, light }: Props) {
  return (
    <h2 className={`${styles.header} ${light ? styles.light : ''}`} style={{ width, letterSpacing }}>
      {children}
    </h2>
  )
}
