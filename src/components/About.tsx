import { motion } from 'framer-motion'
import { MapPin, Mail, Heart } from 'lucide-react'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__layout">
          <motion.div
            className="section__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section__label">
              <Heart size={12} fill="currentColor" /> About Me
            </span>
            <h2 className="section__title">
              Design with <em>heart</em> &amp; precision
            </h2>
          </motion.div>

          <div className="about__grid">
            <motion.div
              className="about__content"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="about__text">{profile.about}</p>
              <div className="about__meta">
                <motion.span whileHover={{ scale: 1.05 }} className="about__meta-pill">
                  <MapPin size={16} /> {profile.location}
                </motion.span>
                <motion.a
                  href={`mailto:${profile.email}`}
                  whileHover={{ scale: 1.05 }}
                  className="about__meta-pill"
                >
                  <Mail size={16} /> {profile.email}
                </motion.a>
              </div>
            </motion.div>

            <div className="about__stats">
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="about__stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
