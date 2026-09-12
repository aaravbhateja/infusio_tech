import Reveal from '../../components/Reveal/Reveal'
import { FOUNDER_PHOTO } from '../../data/site'

const VALUES = [
  { tag: 'Transparency', title: 'Real prices, real timelines', text: 'No "contact us for pricing" games. You see ranges upfront and a written scope before you pay anything.' },
  { tag: 'Honesty', title: 'No fake case studies', text: "Our early work is labeled as concept demos until it's real, paid client work — we'd rather be honest than look established." },
  { tag: 'Fit', title: 'Right-sized, not over-sold', text: "If a business only needs a WhatsApp bot, we won't upsell a full app. The smallest thing that solves your problem wins." },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1>Why we started in Jaipur, not with enterprise clients</h1>
          <p>InfusioTech exists because the businesses walking distance from us are still running on phone calls, paper registers, and word of mouth — while the tools to fix that have gotten cheap and simple enough that they no longer need a big-city agency budget.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <p style={{ fontSize: '17px', color: 'var(--muted)', maxWidth: '64ch' }}>
            Most agencies chase whichever client pays the most. We're doing the opposite on purpose: starting with local Jaipur businesses — shops, clinics, salons, restaurants, coaching centres — because they're the most underserved, not the least valuable. A shopkeeper who never answers WhatsApp fast enough loses a sale the same way a large company does.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--muted)', maxWidth: '64ch', marginTop: '16px' }}>
            We keep the same standards we'd use on a bigger client — real code, real automation, no shortcuts — and price it for a local business's reality. As we prove that out in Jaipur, we plan to expand to other cities with the same approach.
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
                Aarav founded InfusioTech to give Jaipur's local businesses the same quality of web, app, and automation work that's usually reserved for large-city clients — built and priced for how a local shop, clinic, or studio actually operates. He works directly with each client from the first call through to launch and support.
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
