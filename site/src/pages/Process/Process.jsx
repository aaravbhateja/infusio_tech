import { Link } from 'react-router-dom'
import { MessageCircle, FileText, Hammer, Rocket, LifeBuoy } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'

const STEPS = [
  { label: 'Step 1', title: 'Discover', Icon: MessageCircle, text: "A free call or WhatsApp chat about your business — what's slow, what's manual, where you're losing customers. No pitch, just questions." },
  { label: 'Step 2', title: 'Propose', Icon: FileText, text: 'You get a plain-language proposal: what we\'ll build, what it costs, and how long it takes — before any money changes hands.' },
  { label: 'Step 3', title: 'Build', Icon: Hammer, text: 'We build in short stages and show you progress along the way, instead of disappearing for weeks and revealing a surprise at the end.' },
  { label: 'Step 4', title: 'Launch', Icon: Rocket, text: 'Your site, app, or automation goes live. We walk you (or your staff) through how to use it — no separate manual to decode.' },
  { label: 'Step 5', title: 'Support', Icon: LifeBuoy, text: 'We stay reachable after launch for fixes and small changes, and check in monthly on packages that include ongoing management.' },
]

export default function Process() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h1>From first message to a live, automated business</h1>
          <p>No confusing tech jargon, no disappearing after payment. Five steps, and you know what's happening at each one.</p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap-narrow">
          <div className="timeline">
            {STEPS.map((s, i) => (
              <Reveal as="div" className="phase" key={s.label} delay={i * 0.05}>
                <div className="phase-icon"><s.Icon size={16} strokeWidth={2} /></div>
                <div className="ph-label">{s.label}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Ready for step one?</h3>
              <p>Start with a free, no-obligation audit of where your business could automate or get online.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Book a free audit</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
