import { Link } from 'react-router-dom'
import {
  Globe, Smartphone, Workflow, PhoneCall, MessageCircle, TrendingUp, Megaphone,
  Store, HeartPulse, Building2, UtensilsCrossed, ArrowRight,
} from 'lucide-react'
import { EditorialHero } from '../../components/ui/editorial-hero'
import { Ticker } from '../../components/ui/ticker'
import { Marquee } from '../../components/ui/marquee'
import Reveal from '../../components/Reveal/Reveal'
import { waLink, HERO_BG } from '../../data/site'

const SERVICES = [
  {
    tag: 'Build', title: 'Full-stack websites', Icon: Globe,
    text: 'Fast, mobile-first business sites — from a 5-page presence to a booking or ordering system.',
  },
  {
    tag: 'Build', title: 'Mobile apps', Icon: Smartphone,
    text: 'Customer-facing or internal apps for businesses that have outgrown a website alone.',
  },
  {
    tag: 'Automate', title: 'Business automations', Icon: Workflow,
    text: 'Repetitive workflows — follow-ups, reminders, data entry — handled without a human doing it manually.',
  },
  {
    tag: 'Automate', title: 'Calling automation', Icon: PhoneCall,
    text: 'Missed-call follow-ups and voice flows so no incoming customer ever hits a dead end.',
  },
  {
    tag: 'Automate', title: 'WhatsApp automation', Icon: MessageCircle,
    text: 'Catalog replies, order bots, and broadcast flows on the channel your customers already use.',
  },
  {
    tag: 'Grow', title: 'Social growth strategy', Icon: TrendingUp,
    text: 'A concrete plan for followers and engagement that actually turns into local footfall.',
  },
  {
    tag: 'Grow', title: 'Management & marketing', Icon: Megaphone,
    text: 'Content calendars, posting, and paid campaigns run for you, week over week.',
  },
]

const SEGMENTS = [
  { tag: 'Retail & D2C', Icon: Store, title: 'Shops & showrooms', text: 'Website + WhatsApp catalog automation + Instagram growth.' },
  { tag: 'Health & personal care', Icon: HeartPulse, title: 'Clinics, salons, gyms', text: 'Booking automation, missed-call follow-up, local search presence.' },
  { tag: 'Lead-driven', Icon: Building2, title: 'Real estate, coaching, education', text: 'Lead capture, lightweight CRM automation, social media marketing.' },
  { tag: 'Food & hospitality', Icon: UtensilsCrossed, title: 'Restaurants & cafés', text: 'WhatsApp ordering automation, menu site, steady social content.' },
]

const TICKER_ITEMS = [
  'Now booking Q1 projects',
  'Global · Full-stack & automation consultancy',
  'Free automation audit on WhatsApp',
  '7 services, one point of contact',
]

export default function Home() {
  return (
    <>
      <Ticker items={TICKER_ITEMS} />

      <EditorialHero
        pills={['Worldwide', 'Full-stack & automation']}
        title={<>Fully online<br />&amp; <em>automated.</em></>}
        subtitle="InfusioTech builds the website, the app, and the WhatsApp & calling automations growing businesses need to stop losing customers to slow replies."
        primaryCta={{
          label: 'Get a free automation audit',
          href: waLink("Hi InfusioTech, I'd like a free audit"),
          external: true,
        }}
        secondaryCta={{ label: 'See what we build', href: `${import.meta.env.BASE_URL}services` }}
        backgroundImage={HERO_BG}
        marqueeWords={['WEBSITES', 'APPS', 'AUTOMATION', 'GROWTH']}
      />

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">What we build</div>
            <h2>Seven services, one point of contact</h2>
            <p>No more juggling a web developer, a social media freelancer, and a phone setup separately. Pick a package, or take any service on its own.</p>
          </Reveal>
          <div className="services-list">
            {SERVICES.map((s, i) => (
              <Reveal as="div" delay={i * 0.04} key={s.title}>
                <Link to="/services" className="services-list-row" aria-label={`${s.title} — see details on the Services page`}>
                  <span className="services-list-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="services-list-title">{s.title}</span>
                  <span className="services-list-tag">{s.tag}</span>
                  <ArrowRight className="services-list-arrow" size={22} strokeWidth={1.75} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Who we work with</div>
            <h2>Built for growing businesses, anywhere</h2>
            <p>Different businesses need different things — the site and the strategy adjust to which one you are.</p>
          </Reveal>
        </div>
        <Marquee duration={36}>
          {SEGMENTS.map((s) => (
            <div className="marquee-card" key={s.title}>
              <div className="tag">{s.tag}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </Marquee>
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
