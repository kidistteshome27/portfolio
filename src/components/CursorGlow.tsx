import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 120, damping: 20 })
  const springY = useSpring(y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.body.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!visible) return null

  return (
    <motion.div
      className="cursor-glow"
      style={{ left: springX, top: springY }}
      aria-hidden="true"
    />
  )
}
