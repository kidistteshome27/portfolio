import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { GitHubIcon, GitLabIcon } from './SocialIcons'
import Carousel from './Carousel'
import { profile, projects } from '../data/profile'

const gradients = [
  'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 40%, #f9a8d4 100%)',
  'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 40%, #c4b5fd 100%)',
  'linear-gradient(135deg, #fff1f2 0%, #fecdd3 40%, #fda4af 100%)',
  'linear-gradient(135deg, #fdf4ff 0%, #f5d0fe 40%, #e879f9 100%)',
  'linear-gradient(135deg, #fef3c7 0%, #fde68a 40%, #fcd34d 100%)',
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5])
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  return (
    <motion.article
      className={`project-card project-card--carousel ${project.featured ? 'project-card--featured' : ''}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 800 }}
    >
      <div
        className="project-card__visual"
        style={{ background: gradients[index % gradients.length] }}
      >
        <span className="project-card__visual-deco">✦</span>
        <span className="project-card__visual-year">{project.year}</span>
        {project.featured && <span className="project-card__tag">Featured</span>}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={16} /> GitHub
            </a>
          )}
          {project.gitlab && (
            <a href={project.gitlab} target="_blank" rel="noreferrer">
              <GitLabIcon size={16} /> GitLab
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const slides = projects.map((project, i) => (
    <ProjectCard key={project.title} project={project} index={i} />
  ))

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section__header section__header--center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section__label">Projects</span>
          <h2 className="section__title">
            Selected <em>creations</em>
          </h2>
          <p className="section__desc">
            Swipe or use arrows to browse — repos on{' '}
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/kidistteshome27
            </a>{' '}
            and{' '}
            <a href={profile.gitlab} target="_blank" rel="noreferrer">
              AII GitLab
            </a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Carousel items={slides} className="projects__carousel" />
        </motion.div>
      </div>
    </section>
  )
}
