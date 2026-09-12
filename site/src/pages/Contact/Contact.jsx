import { useRef, useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { PHONE_DISPLAY, PHONE_INTL, EMAIL, waLink } from '../../data/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [type, setType] = useState('A website')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState({})
  const [attempted, setAttempted] = useState(false)
  const errorSummaryRef = useRef(null)

  const errors = {
    name: name.trim() ? null : 'Enter your name',
    business: business.trim() ? null : 'Enter your business name',
  }
  const hasErrors = Boolean(errors.name || errors.business)

  const markTouched = (field) => setTouched((t) => ({ ...t, [field]: true }))

  const submit = (e) => {
    e.preventDefault()
    if (hasErrors) {
      setAttempted(true)
      setTouched({ name: true, business: true })
      errorSummaryRef.current?.focus()
      return
    }
    const text = `Hi InfusioTech, I'm ${name} from ${business}. I'm looking for: ${type}.${message ? ` ${message}` : ''}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }

  const showError = (field) => (touched[field] || attempted) && errors[field]

  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <div className="eyebrow">Get in touch</div>
          <h1>Tell us about your business — free audit included</h1>
          <p>Fastest way to reach us is WhatsApp. Or fill the short form below and we'll open it pre-filled for you to send.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal as="div" className="contact-card">
              <div className="contact-icon"><MessageCircle size={18} strokeWidth={1.75} /></div>
              <span className="tag">WhatsApp</span>
              <a className="value" href={waLink()} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Usually replies within a few hours</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.05}>
              <div className="contact-icon"><Phone size={18} strokeWidth={1.75} /></div>
              <span className="tag">Call</span>
              <a className="value" href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Mon–Sat, 10am – 7pm IST</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.1}>
              <div className="contact-icon"><Mail size={18} strokeWidth={1.75} /></div>
              <span className="tag">Email</span>
              <a className="value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>For proposals &amp; detailed briefs</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.15}>
              <div className="contact-icon"><MapPin size={18} strokeWidth={1.75} /></div>
              <span className="tag">Based in</span>
              <span className="value" style={{ cursor: 'default', fontFamily: 'Fraunces, serif', fontSize: '18px', color: 'var(--ink)' }}>Jaipur, Rajasthan</span>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Serving businesses across the city</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Quick brief</div>
            <h2>Send us the basics</h2>
            <p>This opens WhatsApp with your details pre-filled — nothing is stored or sent anywhere else.</p>
          </Reveal>

          {attempted && hasErrors && (
            <div
              className="form-error-summary"
              role="alert"
              tabIndex={-1}
              ref={errorSummaryRef}
              aria-labelledby="error-title"
            >
              <h3 id="error-title">There's a problem</h3>
              <ul>
                {errors.name && <li><a href="#f-name">{errors.name}</a></li>}
                {errors.business && <li><a href="#f-business">{errors.business}</a></li>}
              </ul>
            </div>
          )}

          <form className="form-grid" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="f-name">Your name</label>
              <input
                id="f-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => markTouched('name')}
                placeholder="e.g. Rohan Sharma"
                aria-invalid={Boolean(showError('name'))}
                aria-describedby={showError('name') ? 'f-name-error' : undefined}
                className={showError('name') ? 'has-error' : undefined}
              />
              {showError('name') && <p className="field-error" id="f-name-error">{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="f-business">Business name</label>
              <input
                id="f-business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                onBlur={() => markTouched('business')}
                placeholder="e.g. Sharma Electronics"
                aria-invalid={Boolean(showError('business'))}
                aria-describedby={showError('business') ? 'f-business-error' : undefined}
                className={showError('business') ? 'has-error' : undefined}
              />
              {showError('business') && <p className="field-error" id="f-business-error">{errors.business}</p>}
            </div>
            <div className="field">
              <label htmlFor="f-type">What do you need?</label>
              <select id="f-type" value={type} onChange={(e) => setType(e.target.value)}>
                <option>A website</option>
                <option>A mobile app</option>
                <option>WhatsApp automation</option>
                <option>Calling automation</option>
                <option>Social media growth / management</option>
                <option>Not sure — want a free audit</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-message">Anything else?</label>
              <textarea id="f-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="A line or two about your business is enough." />
            </div>
            <button className="btn btn-accent" type="submit" style={{ alignSelf: 'flex-start' }}>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
