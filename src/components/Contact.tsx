import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { GitHubIcon, GitLabIcon } from './SocialIcons'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="contact__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact__content">
            <span className="section__label">Contact</span>
            <h2 className="section__title">Let's create something beautiful</h2>
            <p className="contact__text">
              Open to freelance UI/UX projects, front-end collaborations, and full-time opportunities.
              Have a Figma design ready? Send it over — I'd love to bring it to life.
            </p>

            <div className="contact__links">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                <Mail size={18} /> Email Me
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <GitHubIcon size={18} /> GitHub
              </a>
              <a href={profile.gitlab} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <GitLabIcon size={18} /> GitLab
              </a>
            </div>
          </div>

          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const data = new FormData(form)
              const name = data.get('name')
              const message = data.get('message')
              window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry from ${name}&body=${encodeURIComponent(String(message))}`
            }}
          >
            <label>
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required placeholder="you@email.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={4} required placeholder="Tell me about your project..." />
            </label>
            <button type="submit" className="btn btn--primary btn--full">
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
