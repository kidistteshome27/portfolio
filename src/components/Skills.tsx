import { type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { Palette, Code2, Wand2 } from 'lucide-react'
import { skills } from '../data/profile'

const icons = [Palette, Code2, Wand2]
const accents = ['#f9a8d4', '#c4b5fd', '#fda4af']

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section__header section__header--center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section__label">Skills</span>
          <h2 className="section__title">
            My creative <em>toolkit</em>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skills.map((group, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={group.category}
                className="skills__card"
                style={{ '--card-accent': accents[i] } as CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="skills__card-glow" />
                <div className="skills__card-icon">
                  <Icon size={22} />
                </div>
                <h3 className="skills__category">{group.category}</h3>
                <ul className="skills__list">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * j }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
