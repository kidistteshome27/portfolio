import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { GitHubIcon, GitLabIcon } from './SocialIcons'
import { profile } from '../data/profile'

const floatingTags = ['Figma', 'React', 'UI/UX', 'Vibe ✨']

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!frameRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__mesh" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={14} /> Front-End · UI/UX Designer
          </motion.p>

          <h1 className="hero__title">
            Hi, I'm{' '}
            <span className="hero__name shimmer-text">{profile.name.split(' ')[0]}</span>
            <br />
            <span className="hero__title-line">I craft</span>{' '}
            <em className="hero__title-accent">beautiful</em> digital worlds
          </h1>

          <p className="hero__subtitle">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary btn--glow">
              View My Work
            </a>
            <a href="#vibe-coder" className="btn btn--ghost btn--shimmer">
              Vibe Coder ✨
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hero__social-link">
              <GitHubIcon size={20} />
            </a>
            <a href={profile.gitlab} target="_blank" rel="noreferrer" aria-label="GitLab" className="hero__social-link">
              <GitLabIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            ref={frameRef}
            className="hero__frame-wrap"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="hero__frame"
              style={{ rotateX, rotateY, transformPerspective: 900 }}
            >
              <div className="hero__frame-blob" />
              <div className="hero__frame-ring hero__frame-ring--1" />
              <div className="hero__frame-ring hero__frame-ring--2" />
              <img
                src="/images/profile.png"
                alt={profile.name}
                className="hero__photo"
              />
            </motion.div>

            {floatingTags.map((tag, i) => (
              <motion.span
                key={tag}
                className="hero__float-tag"
                style={{
                  top: i % 2 === 0 ? `${12 + i * 18}%` : 'auto',
                  bottom: i % 2 !== 0 ? `${8 + i * 10}%` : 'auto',
                  left: i % 2 === 0 ? '-12%' : 'auto',
                  right: i % 2 !== 0 ? '-8%' : 'auto',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="hero__badge"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="hero__badge-dot" />
            Available for creative projects
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-ring" />
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
