import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { waLink } from '../../data/site'

const PACKAGES = [
  {
    name: 'Starter Presence', price: '₹15,000', unit: 'starting at',
    who: 'Very small businesses going digital for the first time',
    features: ['Website (5–6 pages)', 'Google Business setup', 'WhatsApp auto-reply'],
  },
  {
    name: 'Growth', price: '₹35,000', unit: 'starting at', featured: true,
    who: 'Businesses that want a steady lead flow, not just a website',
    features: ['Everything in Starter', 'Social media management & content calendar', 'WhatsApp / calling automation'],
  },
  {
    name: 'Full Stack', price: '₹75,000+', unit: 'starting at',
    who: 'Established businesses ready to scale',
    features: ['Custom web or mobile app', 'Workflow automations', 'Paid social & growth strategy'],
  },
  {
    name: 'Custom', price: 'Scoped on a call', unit: '',
    who: 'Larger local businesses with specific needs',
    features: ['Full automation suites', 'Multi-location chains', 'Custom software'],
  },
]

const STANDALONE = [
  { name: 'Website only', price: '₹10,000' },
  { name: 'Mobile app', price: '₹45,000' },
  { name: 'WhatsApp automation', price: '₹6,000' },
  { name: 'Calling automation', price: '₹5,000' },
  { name: 'Social media management', price: '₹8,000 / mo' },
  { name: 'Social growth strategy', price: '₹5,000' },
]

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
          <div className="pkg-cards">
            {PACKAGES.map((p, i) => (
              <Reveal
                as="div"
                key={p.name}
                delay={i * 0.06}
                className={`pkg-card${p.featured ? ' featured' : ''}`}
              >
                {p.featured && <span className="pkg-badge">Most picked</span>}
                <h3>{p.name}</h3>
                <p className="pkg-who">{p.who}</p>
                <div className="pkg-price">
                  {p.unit && <span className="pkg-unit">{p.unit}</span>}
                  <span className="pkg-amount">{p.price}</span>
                </div>
                <ul className="pkg-features">
                  {p.features.map((f) => (
                    <li key={f}><Check size={16} strokeWidth={2.25} /><span>{f}</span></li>
                  ))}
                </ul>
                <a
                  className={`btn ${p.featured ? 'btn-accent' : 'btn-ghost'}`}
                  href={waLink(`Hi InfusioTech, I'm interested in the ${p.name} package`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask about {p.name}
                </a>
              </Reveal>
            ))}
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
          <Reveal as="div" className="standalone-list">
            {STANDALONE.map((s) => (
              <div className="standalone-row" key={s.name}>
                <span>{s.name}</span>
                <span className="price">{s.price}</span>
              </div>
            ))}
          </Reveal>
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
