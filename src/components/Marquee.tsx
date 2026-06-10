import { motion } from 'framer-motion'

const items = [
  'UI/UX Design', '✦', 'Figma', '♡', 'React', '✦', 'Prototyping', '♡',
  'Vibe Coding', '✦', 'Design Systems', '♡', 'Front-End', '✦', 'Cursor', '♡',
]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee__item">{item}</span>
        ))}
      </motion.div>
    </div>
  )
}
