import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { LOGO_MARK, CAREERS_URL } from '../../data/site'

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/process', label: 'Approach' },
  { to: '/about', label: 'About us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap nav-row">
        <NavLink className="brand" to="/">
          <img src={LOGO_MARK} alt="InfusioTech" className="mark" />
          InfusioTech
        </NavLink>
        <nav className={`primary-nav${open ? ' is-open' : ''}`}>
          <div className="nav-links-group">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                onClick={() => setOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && !shouldReduceMotion && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="nav-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <a className="nav-careers" href={CAREERS_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Careers <span aria-hidden="true">↗</span>
          </a>
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Contact us
          </Link>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
