import './Navbar.css'
import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#education', label: 'Formations' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          gilles-desbonnets<span>.</span>fr
        </a>
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>
      {open && (
        <div className="navbar__mobile">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
