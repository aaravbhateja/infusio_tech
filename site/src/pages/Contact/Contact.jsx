import { useState } from 'react'
import Reveal from '../../components/Reveal/Reveal'
import { PHONE_DISPLAY, PHONE_INTL, EMAIL, waLink } from '../../data/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [type, setType] = useState('A website')
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const text = `Hi InfusioTech, I'm ${name} from ${business}. I'm looking for: ${type}.${message ? ` ${message}` : ''}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }

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
              <span className="tag">WhatsApp</span>
              <a className="value" href={waLink()} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Usually replies within a few hours</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.05}>
              <span className="tag">Call</span>
              <a className="value" href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Mon–Sat, 10am – 7pm IST</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.1}>
              <span className="tag">Email</span>
              <a className="value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>For proposals &amp; detailed briefs</p>
            </Reveal>
            <Reveal as="div" className="contact-card" delay={0.15}>
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

          <form className="form-grid" onSubmit={submit}>
            <div className="field">
              <label htmlFor="f-name">Your name</label>
              <input id="f-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rohan Sharma" required />
            </div>
            <div className="field">
              <label htmlFor="f-business">Business name</label>
              <input id="f-business" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. Sharma Electronics" required />
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
