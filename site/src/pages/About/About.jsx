import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'
import { FOUNDER_PHOTO } from '../../data/site'

const VALUES = [
  { tag: 'Transparency', title: 'Clear scope, real timelines', text: 'You get a written scope and timeline before you pay anything.' },
  { tag: 'Honesty', title: 'No fake case studies', text: "Our early work is labeled as concept demos until it's real, paid client work — we'd rather be honest than look established." },
  { tag: 'Fit', title: 'Right-sized, not over-sold', text: "If a business only needs a WhatsApp bot, we won't upsell a full app. The smallest thing that solves your problem wins." },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1>Why we build for growing businesses, not just enterprises</h1>
          <p>InfusioTech exists because growing businesses everywhere are still running on phone calls, paper registers, and word of mouth — while the tools to fix that have gotten cheap and simple enough that they no longer need a big agency budget.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <p style={{ fontSize: '17px', color: 'var(--muted)', maxWidth: '64ch' }}>
            Most agencies chase whichever client pays the most. We're doing the opposite on purpose: working with small and growing businesses around the world — shops, clinics, salons, restaurants, coaching centres — because they're the most underserved, not the least valuable. A shopkeeper who never answers WhatsApp fast enough loses a sale the same way a large company does.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--muted)', maxWidth: '64ch', marginTop: '16px' }}>
            We keep the same standards we'd use on a bigger client — real code, real automation, no shortcuts — and scope it for a small business's reality. We're based in Jaipur, India, and work with clients remotely, wherever they are.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Founder</div>
            <h2>The person behind InfusioTech</h2>
          </Reveal>
          <Reveal
            as="div"
            className="contact-card"
            style={{ maxWidth: '520px', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '24px', padding: '24px' }}
          >
            <img
              src={FOUNDER_PHOTO}
              alt="Aarav Bhateja"
              style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid var(--line)' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="tag">Founder &amp; CEO</span>
              <span className="value" style={{ fontSize: '22px', fontFamily: 'Fraunces, serif', color: 'var(--ink)' }}>Aarav Bhateja</span>
              <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                Aarav founded InfusioTech to give small and growing businesses everywhere the same quality of web, app, and automation work that's usually reserved for large companies — built for how a shop, clinic, or studio actually operates. He works directly with each client from the first call through to launch and support.
              </p>
              <a href="https://www.linkedin.com/in/aaravbhateja" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13.5px' }}>
                View LinkedIn profile →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">What we stand for</div>
            <h2>Three things we won't compromise on</h2>
          </Reveal>
          <Reveal as="div" className="segments">
            {VALUES.map((v) => (
              <div className="segment" key={v.tag}>
                <div className="tag">{v.tag}</div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
