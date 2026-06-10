import { motion } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import BlushUIPlayground from '../showcase/blush-ui/BlushUIPlayground'
import { profile } from '../data/profile'

const repoUrl = 'https://github.com/kidistteshome27/blush-ui-playground'

export default function Showcase() {
  return (
    <section id="showcase" className="section showcase">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section__label">
            <Layers size={14} /> Showcase Project
          </span>
          <h2 className="section__title">
            Blush UI <em>Playground</em>
          </h2>
          <p className="section__desc">
            A small interactive design-system demo — built to showcase UI/UX craft on GitHub.
            Try switching themes and button styles below.
          </p>
        </motion.div>

        <motion.div
          className="showcase__wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BlushUIPlayground />
        </motion.div>

        <motion.div
          className="showcase__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="showcase__meta">
            <span>React · TypeScript · Framer Motion</span>
            <span>Open source · MIT</span>
          </div>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--glow"
          >
            <ExternalLink size={16} /> View on GitHub
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
            @{profile.githubUsername}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
