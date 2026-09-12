import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../../components/Reveal/Reveal'
import { waLink } from '../../data/site'

const PACKAGES = [
  { name: 'Starter Presence', includes: 'Website (5–6 pages) · Google Business setup · WhatsApp auto-reply', who: 'Very small businesses going digital for the first time', price: '₹15,000' },
  { name: 'Growth', includes: 'Everything in Starter · social media management & content calendar · WhatsApp / calling automation', who: 'Businesses that want a steady lead flow, not just a website', price: '₹35,000', featured: true },
  { name: 'Full Stack', includes: 'Custom web or mobile app · workflow automations · paid social & growth strategy', who: 'Established businesses ready to scale', price: '₹75,000+' },
  { name: 'Custom', includes: 'Bespoke builds — full automation suites, multi-location chains, custom software', who: 'Larger local businesses with specific needs', price: 'Scoped on a call' },
]

const STANDALONE = [
  { name: 'Website only', price: '₹10,000' },
  { name: 'Mobile app', price: '₹45,000' },
  { name: 'WhatsApp automation', price: '₹6,000' },
  { name: 'Calling automation', price: '₹5,000' },
  { name: 'Social media management', price: '₹8,000 / month' },
  { name: 'Social growth strategy', price: '₹5,000' },
]

function TableRows({ rows }) {
  const shouldReduceMotion = useReducedMotion()
  return rows.map((row, i) => {
    const RowTag = shouldReduceMotion ? 'tr' : motion.tr
    const motionProps = shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '0px 0px -10% 0px' },
          transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
        }
    return (
      <RowTag className={row.featured ? 'featured' : undefined} key={row.name} {...motionProps}>
        <td className="pname">{row.name}</td>
        <td>{row.includes}</td>
        <td className="who">{row.who}</td>
        <td className="price">{row.price}</td>
      </RowTag>
    )
  })
}

export default function Pricing() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h1>Straightforward pricing, no hidden quotes</h1>
          <p>Four packages built around where your business actually is. Every service is also available standalone if a package doesn't fit — message us and we'll scope it.</p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div className="pkg-table-scroll">
            <table className="pkg">
              <thead>
                <tr><th>Package</th><th>What's included</th><th>Best for</th><th>Starting at</th></tr>
              </thead>
              <tbody>
                <TableRows rows={PACKAGES} />
              </tbody>
            </table>
          </div>
          <p className="pkg-note">Prices are starting points for typical Jaipur SMB scopes and can move based on pages, integrations, and content needs — every quote is confirmed before work begins, in writing.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Or pick one</div>
            <h2>Standalone services</h2>
            <p>Only need one thing? Every service on the <Link to="/services">Services page</Link> is available on its own — typical standalone starting prices below.</p>
          </Reveal>
          <div className="pkg-table-scroll">
            <table className="pkg">
              <thead>
                <tr><th>Service</th><th>Starting at</th></tr>
              </thead>
              <tbody>
                {STANDALONE.map((s) => (
                  <tr key={s.name}><td className="pname">{s.name}</td><td className="price">{s.price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Not sure which package fits?</h3>
              <p>Tell us your business on a free call or over WhatsApp — we'll recommend the smallest package that actually solves your problem.</p>
            </div>
            <a className="btn btn-accent" href={waLink("Hi InfusioTech, I'd like a free audit")} target="_blank" rel="noopener noreferrer">
              Get a free audit
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
