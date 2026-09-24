import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ShieldCheck, Layers, Sparkles, Handshake, Globe2, GraduationCap } from 'lucide-react'
import { EditorialHero } from '../../components/ui/editorial-hero'
import { Ticker } from '../../components/ui/ticker'
import { Marquee } from '../../components/ui/marquee'
import Reveal from '../../components/Reveal/Reveal'
import { HERO_BG, STATS, CAREERS_URL } from '../../data/site'
import { CLIENTS, clientLogoSrc } from '../../data/clients'
import { PRACTICES, INDUSTRIES, ENGAGEMENT_MODELS } from '../../data/capabilities'

const TICKER_ITEMS = [
  'Digital Engineering',
  'AI & Intelligent Automation',
  'Conversational & Voice AI',
  'Cloud, DevOps & Integration',
  'Digital Growth & Marketing',
  'Headquartered in Jaipur, India · Delivering worldwide',
]

const WHY = [
  { Icon: Layers, title: 'Engineering-first delivery', text: 'Architecture reviews, code standards, automated testing and documented handover, built into every engagement.' },
  { Icon: Sparkles, title: 'AI-native teams', text: 'Our engineers work spec-first with AI tooling, so you get faster delivery cycles without trading away quality or maintainability.' },
  { Icon: ShieldCheck, title: 'Security & confidentiality', text: 'Confidentiality agreements, least-privilege access to your systems, and full ownership of the code and IP we build for you.' },
  { Icon: Handshake, title: 'Accountable governance', text: 'A written scope before work begins, a single accountable delivery lead, and regular sprint demos and status reporting.' },
  { Icon: Globe2, title: 'Global delivery from India', text: 'India-based delivery with working-hour overlap for clients in India, the Middle East, Europe and beyond.' },
  { Icon: GraduationCap, title: 'Our own talent pipeline', text: 'InfusioTech Careers trains the next generation of engineers in modern, AI-driven development, feeding our delivery teams.' },
]

// Marquee loops by duplicating its children, so one pass must be wider than the
// screen or a gap shows at the seam. Repeat a short client list up to 12 cards
// (~2800px) so it fills even ultrawide monitors.
const CLIENT_LOOP = CLIENTS.length
  ? Array.from({ length: Math.ceil(12 / CLIENTS.length) }, () => CLIENTS).flat()
  : []

export default function Home() {
  return (
    <>
      <Ticker items={TICKER_ITEMS} />

      <EditorialHero
        pills={['Digital Engineering', 'AI & Automation', 'Cloud & Growth']}
        title={<>Engineering what<br />businesses <em>run on.</em></>}
        subtitle="InfusioTech Solutions is a technology services company delivering digital engineering, AI and intelligent automation, cloud and growth programs for brands and enterprises across India and worldwide."
        primaryCta={{ label: 'Talk to our experts', href: `${import.meta.env.BASE_URL}contact` }}
        secondaryCta={{ label: 'Explore our services', href: `${import.meta.env.BASE_URL}services` }}
        backgroundImage={HERO_BG}
        marqueeWords={['ENGINEER', 'AUTOMATE', 'SCALE', 'TRANSFORM']}
      />

      {CLIENTS.length > 0 && (
        <section className="section clients-strip">
          <div className="wrap">
            <Reveal as="p" className="clients-label">Trusted by growing brands</Reveal>
          </div>
          <Marquee duration={30}>
            {CLIENT_LOOP.map((c, i) => {
              const card = (
                <>
                  <img src={clientLogoSrc(c.logo)} alt={c.name} loading="lazy" />
                  <span>{c.name}</span>
                </>
              )
              return c.url ? (
                <a className="marquee-card client-card" key={i} href={c.url} target="_blank" rel="noopener noreferrer">{card}</a>
              ) : (
                <div className="marquee-card client-card" key={i}>{card}</div>
              )
            })}
          </Marquee>
        </section>
      )}

      {STATS.length > 0 && (
        <section className="section">
          <div className="wrap">
            <Reveal as="div" className="stats-band">
              {STATS.map((s) => (
                <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">What we do</div>
            <h2>End-to-end technology services, from strategy to scale</h2>
            <p>Six service lines that work on their own or as one integrated program, run by a single accountable delivery team.</p>
          </Reveal>
          <div className="service-grid">
            {PRACTICES.map((s, i) => (
              <Reveal as="div" delay={i * 0.04} key={s.slug}>
                <Link to={`/services#${s.slug}`} className="service-card">
                  <div className="icon"><s.Icon size={20} strokeWidth={1.75} /></div>
                  <span className="tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="card-link">Learn more <ArrowRight size={14} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Industries</div>
            <h2>Domain experience across the sectors we serve</h2>
            <p>Solutions shaped by how each industry sells, operates and serves its customers.</p>
          </Reveal>
          <Reveal as="div" className="industry-grid">
            {INDUSTRIES.map((it) => (
              <div className="industry" key={it.title}>
                <div className="segment-icon"><it.Icon size={17} strokeWidth={1.9} /></div>
                <h4>{it.title}</h4>
                <p>{it.text}</p>
              </div>
            ))}
          </Reveal>
          <p className="more-link"><Link to="/industries">View all industries <ArrowRight size={15} /></Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Why InfusioTech</div>
            <h2>Enterprise-grade standards, agile AI-native delivery</h2>
          </Reveal>
          <div className="service-grid">
            {WHY.map((w, i) => (
              <Reveal as="div" delay={i * 0.04} key={w.title}>
                <div className="service-card">
                  <div className="icon"><w.Icon size={20} strokeWidth={1.75} /></div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Engagement models</div>
            <h2>Work with us the way your business needs</h2>
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

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="careers-band">
            <div>
              <div className="eyebrow">InfusioTech Careers</div>
              <h3>Building the engineers of tomorrow</h3>
              <p>Our 3-month Spec-Driven Web Development with AI program trains graduates through lectures, workshops with industry experts and a 1-month internship on live industry projects.</p>
            </div>
            <a className="btn btn-ghost" href={CAREERS_URL} target="_blank" rel="noopener noreferrer">Explore careers <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Let's build what's next for your business</h3>
              <p>Tell us about your goals. A solutions consultant will get back to you with a recommended approach, timeline and estimate.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Start a conversation <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
