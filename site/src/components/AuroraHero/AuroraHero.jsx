import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import { waLink } from '../../data/site'

const EASE = [0.16, 1, 0.3, 1]

const HEADLINE_WORDS = ['Your', 'business,', 'fully', 'online', '&', { text: 'automated.', accent: true }]

const AUTOMATES = [
  { badge: 'Customer', text: 'sends a WhatsApp message about your menu' },
  { badge: 'Bot', text: 'replies instantly with catalog & prices' },
  { badge: 'Missed call', text: 'auto-texted a callback link in seconds' },
  { badge: 'Instagram', text: 'posts on a schedule, no manual work' },
  { badge: 'You', text: 'see every lead in one place' },
]

export default function AuroraHero() {
  const heroRef = useRef(null)
  const [active, setActive] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const glowX = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.4 })
  const glowY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.4 })

  const trackCursor = (e) => {
    if (shouldReduceMotion || !canHover) return
    const rect = heroRef.current.getBoundingClientRect()
    rawX.set(e.clientX - rect.left)
    rawY.set(e.clientY - rect.top)
  }

  return (
    <section
      className={`hero${active ? ' aurora-active' : ''}`}
      ref={heroRef}
      onMouseEnter={() => canHover && setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={trackCursor}
    >
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob b1" />
        <div className="aurora-blob b2" />
        <div className="aurora-blob b3" />
        {canHover && !shouldReduceMotion && (
          <motion.div className="aurora-cursor-glow" style={{ x: glowX, y: glowY }} />
        )}
      </div>

      <div className="wrap hero-grid">
        <div>
          <motion.div
            className="eyebrow"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Jaipur · Full-stack &amp; automation consultancy
          </motion.div>

          <h1>
            {HEADLINE_WORDS.map((w, i) => {
              const text = typeof w === 'string' ? w : w.text
              const accent = typeof w === 'object' && w.accent
              return (
                <span className="word-mask" key={i}>
                  <motion.span
                    className="word"
                    initial={shouldReduceMotion ? false : { y: '112%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.75, delay: 0.05 + i * 0.06, ease: EASE }}
                    style={accent ? { color: 'var(--accent)' } : undefined}
                  >
                    {text}
                  </motion.span>
                  {i < HEADLINE_WORDS.length - 1 && ' '}
                </span>
              )
            })}
          </h1>

          <motion.p
            className="deck"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
          >
            InfusioTech builds the website, the app, and the WhatsApp &amp; calling automations
            that Jaipur&rsquo;s local businesses need to stop losing customers to slow replies and
            no online presence — plus the social media growth to bring new ones in.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.21, ease: EASE }}
          >
            <a
              className="btn btn-accent"
              href={waLink("Hi InfusioTech, I'd like a free audit")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a free automation audit
            </a>
            <Link className="btn btn-ghost" to="/services">
              See what we build
            </Link>
          </motion.div>

          <motion.div
            className="trust-strip"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <div><b>7</b>services under one roof</div>
            <div><b>Jaipur</b>first, expanding next</div>
            <div><b>&lt;24h</b>typical reply time</div>
          </motion.div>
        </div>

        <motion.div
          className="hero-panel"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        >
          <div className="ph-head">
            <span className="dot" /> what a Growth package automates
          </div>
          {AUTOMATES.map((row, i) => (
            <div className="flow-row" key={row.badge}>
              <span className={`flow-badge${i === 0 ? '' : ' is-floating'}`} style={{ animationDelay: `${i * 0.6}s` }}>
                {row.badge}
              </span>
              <span className="flow-arrow">→</span>
              <span>{row.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
