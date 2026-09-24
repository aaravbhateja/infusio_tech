import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'
import { PRACTICES, ENGAGEMENT_MODELS } from '../../data/capabilities'

export default function Services() {
  const { hash } = useLocation()

  // Home page cards link to /services#<slug>; wait for the page transition before scrolling.
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">Services</div>
          <h1>Technology services that move the business forward</h1>
          <p>From platform engineering and AI to cloud and growth, our service lines are delivered by one accountable team, independently or as an integrated transformation program.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <nav className="practice-index" aria-label="Service lines">
            {PRACTICES.map((p, i) => (
              <a key={p.slug} href={`#${p.slug}`}><span>{String(i + 1).padStart(2, '0')}</span>{p.title}</a>
            ))}
          </nav>
        </div>
      </section>

      {PRACTICES.map((p, i) => (
        <section className="section practice" id={p.slug} key={p.slug}>
          <div className="wrap practice-row">
            <Reveal as="div" className="practice-head">
              <div className="icon-lg"><p.Icon size={26} strokeWidth={1.6} /></div>
              <div className="eyebrow">{String(i + 1).padStart(2, '0')} · {p.tag}</div>
              <h2>{p.title}</h2>
            </Reveal>
            <Reveal as="div" className="practice-body" delay={0.05}>
              <p>{p.text}</p>
              <ul className="practice-list">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Engagement models</div>
            <h2>Flexible ways to engage</h2>
          </Reveal>
          <Reveal as="div" className="segments">
            {ENGAGEMENT_MODELS.map((m) => (
              <div className="segment" key={m.title}>
                <div className="tag">{m.tag}</div>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Planning a new platform or automation program?</h3>
              <p>Share your requirements and our team will come back with a recommended solution, timeline and estimate.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Request a proposal <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
