import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#vibe-coder', label: 'Vibe Coder' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="navbar__logo-mark">K</span>
          <span className="navbar__logo-text">idist</span>
        </a>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <button type="button" onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__ctas">
          <a href={profile.github} target="_blank" rel="noreferrer" className="navbar__cta">
            GitHub
          </a>
          <a href={profile.gitlab} target="_blank" rel="noreferrer" className="navbar__cta navbar__cta--outline">
            GitLab
          </a>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  )
}
