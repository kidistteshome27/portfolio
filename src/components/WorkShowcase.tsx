import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  GitBranch,
  Globe,
  Lock,
  Star,
  Unlock,
} from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import Carousel from './Carousel'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import { profile } from '../data/profile'
import type { WorkDetail } from '../data/github'

type Filter = 'all' | 'public' | 'private'

const gradients = [
  'linear-gradient(135deg, #fce7f3, #c4b5fd)',
  'linear-gradient(135deg, #ede9fe, #fda4af)',
  'linear-gradient(135deg, #fef3c7, #f9a8d4)',
  'linear-gradient(135deg, #fdf4ff, #ddd6fe)',
]

function formatDate(iso?: string) {
  if (!iso) return null
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

function WorkCard({ work, index }: { work: WorkDetail; index: number }) {
  const isPrivate = work.visibility === 'private'

  return (
    <article className="work-card work-card--carousel">
      <div
        className="work-card__banner"
        style={{ background: gradients[index % gradients.length] }}
      >
        <span className="work-card__deco">✦</span>
        <span className={`work-card__badge ${isPrivate ? 'work-card__badge--private' : ''}`}>
          {isPrivate ? <><Lock size={12} /> Private</> : <><Unlock size={12} /> Public</>}
        </span>
      </div>

      <div className="work-card__body">
        <div className="work-card__top">
          <div>
            <h3 className="work-card__title">{work.name}</h3>
            <p className="work-card__role">{work.role} · {work.year}</p>
          </div>
          {work.language && (
            <span className="work-card__lang">{work.language}</span>
          )}
        </div>

        <p className="work-card__desc">{work.description}</p>

        <ul className="work-card__highlights">
          {work.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="work-card__topics">
          {work.topics.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="work-card__meta">
          {work.updated_at && (
            <span>Updated {formatDate(work.updated_at)}</span>
          )}
          {work.stargazers_count !== undefined && work.stargazers_count > 0 && (
            <span><Star size={13} /> {work.stargazers_count}</span>
          )}
        </div>

        <div className="work-card__actions">
          <a
            href={work.html_url}
            target="_blank"
            rel="noreferrer"
            className="work-card__link work-card__link--primary"
          >
            <GitHubIcon size={15} />
            {work.html_url.includes('gitlab') ? 'View on GitLab' : isPrivate ? 'Private Repo' : 'View Repo'}
          </a>
          {work.homepage && (
            <a
              href={work.homepage}
              target="_blank"
              rel="noreferrer"
              className="work-card__link"
            >
              <Globe size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function WorkShowcase() {
  const { allWork, publicRepos, privateRepos, loading, error, counts } = useGitHubRepos()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered =
    filter === 'all'
      ? allWork
      : filter === 'public'
        ? publicRepos
        : privateRepos

  const slides = filtered.map((work, i) => (
    <WorkCard key={`${work.visibility}-${work.name}`} work={work} index={i} />
  ))

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All Work', count: counts.all },
    { id: 'public', label: 'Public', count: counts.public },
    { id: 'private', label: 'Private', count: counts.private },
  ]

  return (
    <section id="work" className="section work-showcase">
      <div className="container">
        <motion.div
          className="section__header section__header--center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section__label">
            <GitBranch size={14} /> GitHub Work
          </span>
          <h2 className="section__title">
            Detailed <em>work showcase</em>
          </h2>
          <p className="section__desc">
            Use <strong>Next</strong> to browse one project at a time — live from{' '}
            <a href={profile.github} target="_blank" rel="noreferrer">
              @{profile.githubUsername}
            </a>.
          </p>
        </motion.div>

        <div className="work-showcase__tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              className={`work-showcase__tab ${filter === tab.id ? 'work-showcase__tab--active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
              <span className="work-showcase__tab-count">{tab.count}</span>
            </button>
          ))}
        </div>

        {loading && (
          <p className="work-showcase__status">Loading repositories from GitHub…</p>
        )}
        {error && !loading && (
          <p className="work-showcase__status work-showcase__status--warn">{error}</p>
        )}

        {!loading && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Carousel
              key={filter}
              items={slides}
              className="work-showcase__carousel"
              autoPlayMs={8000}
            />
          </motion.div>
        )}

        {filtered.length === 0 && !loading && (
          <p className="work-showcase__empty">No projects in this category yet.</p>
        )}

        <div className="work-showcase__cta">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <GitHubIcon size={16} /> All repos on GitHub
          </a>
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--glow"
          >
            <ExternalLink size={16} /> Explore Profile
          </a>
        </div>
      </div>
    </section>
  )
}
