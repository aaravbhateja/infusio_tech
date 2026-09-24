import { useRef, useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'
import { PHONE_DISPLAY, PHONE_INTL, EMAIL, HQ, waLink } from '../../data/site'
import { PRACTICES } from '../../data/capabilities'

const ENQUIRY_TYPES = [...PRACTICES.map((p) => p.title), 'Dedicated team / staff augmentation', 'Partnership', 'Something else']

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: ENQUIRY_TYPES[0], message: '' })
  const [touched, setTouched] = useState({})
  const [attempted, setAttempted] = useState(false)
  const errorSummaryRef = useRef(null)

  const errors = {
    name: form.name.trim() ? null : 'Enter your name',
    company: form.company.trim() ? null : 'Enter your company name',
    email: !form.email.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()) ? null : 'Enter a valid email address',
  }
  const hasErrors = Object.values(errors).some(Boolean)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const markTouched = (k) => () => setTouched((t) => ({ ...t, [k]: true }))
  const showError = (k) => (touched[k] || attempted) && errors[k]

  const brief = () => [
    `Name: ${form.name}`, `Company: ${form.company}`, form.email && `Email: ${form.email}`,
    `Enquiry: ${form.type}`, form.message && `Details: ${form.message}`,
  ].filter(Boolean).join('\n')

  // Both options open the visitor's own app with the brief pre-filled; nothing is stored on our side.
  const send = (via) => (e) => {
    e.preventDefault()
    if (hasErrors) {
      setAttempted(true)
      setTouched({ name: true, company: true, email: true })
      errorSummaryRef.current?.focus()
      return
    }
    if (via === 'email') {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry: ${form.type} - ${form.company}`)}&body=${encodeURIComponent(brief())}`
    } else {
      window.open(waLink(`Hi InfusioTech,\n${brief()}`), '_blank', 'noopener,noreferrer')
    }
  }

  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}</label>
      <input id={`f-${k}`} value={form[k]} onChange={set(k)} onBlur={markTouched(k)}
        aria-invalid={Boolean(showError(k))} aria-describedby={showError(k) ? `f-${k}-error` : undefined}
        className={showError(k) ? 'has-error' : undefined} {...props} />
      {showError(k) && <p className="field-error" id={`f-${k}-error`}>{errors[k]}</p>}
    </div>
  )

  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">Contact us</div>
          <h1>Let's talk about your next project</h1>
          <p>Share a few details and our solutions team will get back to you with next steps, usually within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal as="div" className="contact-card">
              <div className="contact-icon"><Mail size={18} strokeWidth={1.75} /></div>
              <span className="tag">Business enquiries</span>
              <a className="value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Proposals, RFPs and partnerships</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.05}>
              <div className="contact-icon"><Phone size={18} strokeWidth={1.75} /></div>
              <span className="tag">Call us</span>
              <a className="value" href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Mon–Sat, 10am – 7pm IST</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.1}>
              <div className="contact-icon"><MessageCircle size={18} strokeWidth={1.75} /></div>
              <span className="tag">WhatsApp</span>
              <a className="value" href={waLink()} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Quick questions and follow-ups</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.15}>
              <div className="contact-icon"><MapPin size={18} strokeWidth={1.75} /></div>
              <span className="tag">Headquarters</span>
              <span className="value" style={{ cursor: 'default', fontFamily: 'Fraunces, serif', fontSize: '18px', color: 'var(--ink)' }}>{HQ}</span>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Serving clients across India and worldwide</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Project enquiry</div>
            <h2>Tell us what you're looking for</h2>
            <p>Send your enquiry by email or WhatsApp. It opens with your details filled in, ready to send.</p>
          </Reveal>

          {attempted && hasErrors && (
            <div className="form-error-summary" role="alert" tabIndex={-1} ref={errorSummaryRef} aria-labelledby="error-title">
              <h3 id="error-title">There's a problem</h3>
              <ul>
                {Object.entries(errors).filter(([, v]) => v).map(([k, v]) => <li key={k}><a href={`#f-${k}`}>{v}</a></li>)}
              </ul>
            </div>
          )}

          <form className="form-grid" onSubmit={send('email')} noValidate>
            {field('name', 'Full name', { placeholder: 'e.g. Rohan Sharma', autoComplete: 'name' })}
            {field('company', 'Company', { placeholder: 'e.g. Sharma Retail Pvt. Ltd.', autoComplete: 'organization' })}
            {field('email', 'Work email (optional)', { type: 'email', placeholder: 'you@company.com', autoComplete: 'email' })}
            <div className="field">
              <label htmlFor="f-type">How can we help?</label>
              <select id="f-type" value={form.type} onChange={set('type')}>
                {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-message">Project details</label>
              <textarea id="f-message" value={form.message} onChange={set('message')} placeholder="Goals, timelines, current systems: whatever helps us understand the requirement." />
            </div>
            <div className="btn-row">
              <button className="btn btn-accent" type="submit">Send by email</button>
              <button className="btn btn-ghost" type="button" onClick={send('whatsapp')}>Send via WhatsApp</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
