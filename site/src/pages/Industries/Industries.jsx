import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'
import { INDUSTRIES } from '../../data/capabilities'

export default function Industries() {
  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">Industries</div>
          <h1>Technology shaped around how your industry works</h1>
          <p>Every sector has its own customers, regulations and operating rhythm. We bring solutions and delivery patterns proven across the industries below.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="service-grid">
            {INDUSTRIES.map((it, i) => (
              <Reveal as="div" delay={i * 0.04} key={it.title}>
                <div className="service-card">
                  <div className="icon"><it.Icon size={20} strokeWidth={1.75} /></div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Don't see your industry?</h3>
              <p>Our engineering and automation practices apply across sectors. Tell us about your business and we'll show you where technology can make the biggest difference.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Talk to our team <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
