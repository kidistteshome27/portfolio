import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} {profile.name}. Crafted with React + Vite.</p>
        <p className="footer__tag">Front-End · UI/UX · Vibe Coder</p>
      </div>
    </footer>
  )
}
