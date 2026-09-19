import { Link } from 'react-router-dom'
import {
  Globe, Smartphone, Workflow, PhoneCall, MessageCircle, TrendingUp, Megaphone,
} from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'
import { TiltCard } from '../../components/ui/tilt-card'

const GROUPS = [
  {
    eyebrow: 'Build', heading: 'Websites & mobile apps',
    items: [
      {
        tag: '01', title: 'Full-stack websites', Icon: Globe,
        text: 'Mobile-first business sites: brochure sites, booking systems, ordering pages, or custom web apps — built on modern, maintainable code, not a drag-and-drop template.',
        bullets: ['5–6 page business presence', 'Booking / enquiry / ordering flows', 'Custom dashboards & internal tools'],
      },
      {
        tag: '02', title: 'Mobile apps', Icon: Smartphone,
        text: "Native or cross-platform apps for businesses that need something a website can't do — loyalty programs, delivery tracking, staff-facing tools.",
        bullets: ['Customer-facing apps', 'Internal/staff operations apps', 'iOS & Android from one codebase'],
      },
    ],
  },
  {
    eyebrow: 'Automate', heading: 'Automations that catch every customer',
    items: [
      {
        tag: '03', title: 'Business automations', Icon: Workflow,
        text: 'The repetitive work behind the scenes — appointment reminders, follow-up sequences, data entry between tools — handled without a person doing it by hand.',
        bullets: ['Reminder & follow-up sequences', 'Tool-to-tool data sync', 'Lead routing & notifications'],
      },
      {
        tag: '04', title: 'Calling automation', Icon: PhoneCall,
        text: 'A missed call is a lost customer in most local businesses. We set up automatic callback texts, IVR flows, and voice-based follow-ups so nobody falls through.',
        bullets: ['Missed-call auto-text & callback', 'IVR / voice menu setup', 'Call logging & follow-up tracking'],
      },
      {
        tag: '05', title: 'WhatsApp automation', Icon: MessageCircle,
        text: 'Catalog replies, order-taking bots, appointment confirmations, and broadcast campaigns — on the channel Jaipur customers already default to.',
        bullets: ['Auto-reply & catalog bots', 'Order & booking flows', 'Broadcast & reminder campaigns'],
      },
    ],
  },
  {
    eyebrow: 'Grow', heading: 'Social media, run properly',
    items: [
      {
        tag: '06', title: 'Social growth strategy', Icon: TrendingUp,
        text: "A concrete plan — not vague advice — for turning followers into footfall: what to post, when, and why, tied to what actually gets local customers in the door.",
        bullets: ['Audience & competitor research', 'Content pillars & posting plan', 'Monthly growth review'],
      },
      {
        tag: '07', title: 'Management & marketing', Icon: Megaphone,
        text: 'Content calendars, day-to-day posting, and paid campaigns on Instagram/Facebook/Google — run for you, with monthly reporting you can actually understand.',
        bullets: ['Content creation & scheduling', 'Paid ad campaigns', 'Monthly performance reports'],
      },
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">What we do</div>
          <h1>Seven services, built to work together</h1>
          <p>Every service below can be hired on its own — but they're designed to plug into each other. A website feeds a WhatsApp bot, which feeds your social content, which feeds back into the website.</p>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section className="section" key={g.heading}>
          <div className="wrap">
            <Reveal as="div" className="section-head">
              <div className="eyebrow">{g.eyebrow}</div>
              <h2>{g.heading}</h2>
            </Reveal>
            <div className="service-grid">
              {g.items.map((it, i) => (
                <Reveal as="div" delay={i * 0.06} key={it.title}>
                  <TiltCard className="service-card">
                    <div className="icon"><it.Icon size={20} strokeWidth={1.75} /></div>
                    <span className="tag">{it.tag}</span>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                    <ul>
                      {it.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Not sure which service fits?</h3>
              <p>Tell us about your business on a quick call and we'll recommend the smallest setup that solves your problem.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Get in touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
