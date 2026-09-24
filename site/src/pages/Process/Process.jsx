import { Link } from 'react-router-dom'
import { Compass, FileText, PenTool, Hammer, TestTube2, LifeBuoy, ArrowRight } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'

const STEPS = [
  { label: 'Phase 1', title: 'Discovery & consulting', Icon: Compass, text: 'Workshops with your stakeholders to understand goals, users, current systems and constraints, and to identify where technology delivers the highest return.' },
  { label: 'Phase 2', title: 'Solution architecture & proposal', Icon: FileText, text: 'A written solution blueprint: architecture, scope, milestones, team, timeline and commercials, agreed before any build work starts.' },
  { label: 'Phase 3', title: 'Experience design', Icon: PenTool, text: 'User journeys, wireframes and high-fidelity designs validated with you, so everyone signs off on the experience before engineering begins.' },
  { label: 'Phase 4', title: 'Agile engineering', Icon: Hammer, text: 'Spec-driven, AI-assisted development in short sprints, with a demo at the end of each one and full visibility into progress, risks and decisions.' },
  { label: 'Phase 5', title: 'Quality assurance & launch', Icon: TestTube2, text: 'Functional, performance and security testing, then a controlled go-live with training and documentation for your teams.' },
  { label: 'Phase 6', title: 'Support & continuous improvement', Icon: LifeBuoy, text: 'Post-launch support, monitoring and a roadmap of improvements, available as an ongoing managed service.' },
]

export default function Process() {
  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">Our approach</div>
          <h1>A proven delivery framework, from first workshop to long-term support</h1>
          <p>Six phases with clear deliverables, sign-offs and governance at each step, so you always know what's being built, why, and when.</p>
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
              <h3>Start with a discovery conversation</h3>
              <p>Tell us what you want to achieve and we'll outline the approach, team and timeline to get there.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Schedule a consultation <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
