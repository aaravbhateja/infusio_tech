import AuroraHero from '../../components/AuroraHero/AuroraHero'
import Reveal from '../../components/Reveal/Reveal'
import { waLink } from '../../data/site'

const SERVICES = [
  {
    tag: 'Build', title: 'Full-stack websites',
    text: 'Fast, mobile-first business sites — from a 5-page presence to a booking or ordering system.',
    icon: <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z M2 7h16" />,
  },
  {
    tag: 'Build', title: 'Mobile apps',
    text: 'Customer-facing or internal apps for businesses that have outgrown a website alone.',
    icon: <path d="M5 2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z M9 15h2" />,
  },
  {
    tag: 'Automate', title: 'Business automations',
    text: 'Repetitive workflows — follow-ups, reminders, data entry — handled without a human doing it manually.',
    icon: <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z M10 6v4l3 2" />,
  },
  {
    tag: 'Automate', title: 'Calling automation',
    text: 'Missed-call follow-ups and voice flows so no incoming customer ever hits a dead end.',
    icon: <path d="M4 4h8l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z M7 11h6M7 14h4" />,
  },
  {
    tag: 'Automate', title: 'WhatsApp automation',
    text: 'Catalog replies, order bots, and broadcast flows on the channel your customers already use.',
    icon: <path d="M10 2a8 8 0 00-6.9 12l-1 3.8 3.9-1A8 8 0 1010 2z" />,
  },
  {
    tag: 'Grow', title: 'Social growth strategy',
    text: 'A concrete plan for followers and engagement that actually turns into local footfall.',
    icon: <path d="M6 15l4-8 4 8M7.5 12h5" />,
  },
  {
    tag: 'Grow', title: 'Management & marketing',
    text: 'Content calendars, posting, and paid campaigns run for you, week over week.',
    icon: <path d="M3 3h14v14H3z M7 10h6M7 13h4" />,
  },
]

const SEGMENTS = [
  { tag: 'Retail & D2C', title: 'Shops & showrooms', text: 'Website + WhatsApp catalog automation + Instagram growth.' },
  { tag: 'Health & personal care', title: 'Clinics, salons, gyms', text: 'Booking automation, missed-call follow-up, local search presence.' },
  { tag: 'Lead-driven', title: 'Real estate, coaching, education', text: 'Lead capture, lightweight CRM automation, social media marketing.' },
  { tag: 'Food & hospitality', title: 'Restaurants & cafés', text: 'WhatsApp ordering automation, menu site, steady social content.' },
]

export default function Home() {
  return (
    <>
      <AuroraHero />

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">What we build</div>
            <h2>Seven services, one point of contact</h2>
            <p>No more juggling a web developer, a social media freelancer, and a phone setup separately. Pick a package, or take any service on its own.</p>
          </Reveal>
          <div className="service-grid">
            {SERVICES.map((s, i) => (
              <Reveal as="div" className="service-card" key={s.title} delay={(i % 3) * 0.06}>
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <span className="tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Who we work with</div>
            <h2>Built for Jaipur's local businesses first</h2>
            <p>Different businesses need different things — the site and the strategy adjust to which one you are.</p>
          </Reveal>
          <Reveal as="div" className="segments">
            {SEGMENTS.map((s) => (
              <div className="segment" key={s.title}>
                <div className="tag">{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Not sure where to start?</h3>
              <p>Send us your business on WhatsApp — we'll tell you which one automation or page would help you most, free.</p>
            </div>
            <a className="btn btn-accent" href={waLink("Hi InfusioTech, I'd like a free audit")} target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
