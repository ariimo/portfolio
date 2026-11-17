import separator from '../assets/separator-black.png'

/** Decorative divider between blocks of a section. */
export default function Separator({ className }: { className?: string }) {
  return <img className={className} src={separator.src} width={170} height={12} alt="" />
}
