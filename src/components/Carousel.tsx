import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselProps = {
  items: ReactNode[]
  autoPlayMs?: number
  className?: string
}

export default function Carousel({ items, autoPlayMs = 6000, className = '' }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = items.length

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return
      setDirection(next > index ? 1 : -1)
      setIndex((next + count) % count)
    },
    [count, index],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!autoPlayMs || paused || count <= 1) return
    const timer = setInterval(next, autoPlayMs)
    return () => clearInterval(timer)
  }, [autoPlayMs, paused, count, next])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x
    if (swipe < -60) next()
    else if (swipe > 60) prev()
  }

  if (count === 0) return null

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -280 : 280, opacity: 0, scale: 0.92 }),
  }

  return (
    <div
      className={`carousel ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={prev}
        aria-label="Previous"
      >
        <span className="carousel__arrow-label">Prev</span>
        <ChevronLeft size={22} />
      </button>

      <div className="carousel__viewport">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="carousel__slide"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={onDragEnd}
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={next}
        aria-label="Next"
      >
        <ChevronRight size={22} />
        <span className="carousel__arrow-label">Next</span>
      </button>

      <div className="carousel__footer">
        <div className="carousel__dots" role="tablist" aria-label="Carousel slides">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="carousel__counter">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
