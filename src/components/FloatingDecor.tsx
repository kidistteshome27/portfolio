import { motion } from 'framer-motion'

const petals = [
  { size: 18, top: '12%', left: '8%', delay: 0, color: '#f9a8d4' },
  { size: 12, top: '28%', left: '92%', delay: 0.5, color: '#c4b5fd' },
  { size: 22, top: '55%', left: '4%', delay: 1, color: '#fda4af' },
  { size: 14, top: '72%', left: '88%', delay: 1.5, color: '#f0abfc' },
  { size: 16, top: '88%', left: '15%', delay: 0.8, color: '#fbcfe8' },
  { size: 10, top: '40%', left: '50%', delay: 2, color: '#ddd6fe' },
]

const sparkles = ['✦', '♡', '✧', '❀', '✦', '♡']

export default function FloatingDecor() {
  return (
    <div className="floating-decor" aria-hidden="true">
      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="floating-decor__petal"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.color,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, i % 2 === 0 ? 8 : -8, 0],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {sparkles.map((s, i) => (
        <motion.span
          key={`sparkle-${i}`}
          className="floating-decor__sparkle"
          style={{ top: `${15 + i * 14}%`, left: `${10 + i * 14}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        >
          {s}
        </motion.span>
      ))}
    </div>
  )
}
