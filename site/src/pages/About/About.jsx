import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal'
import { Ambient3D } from '../../components/ui/ambient-3d'
import { COMPANY, HQ, CAREERS_URL } from '../../data/site'

const VALUES = [
  { tag: 'Excellence', title: 'Engineering excellence', text: 'Clean architecture, tested code and documentation that outlasts the project.' },
  { tag: 'Integrity', title: 'Transparency & integrity', text: 'Written scope, honest timelines and clear reporting at every stage of delivery.' },
  { tag: 'Ownership', title: 'Client ownership', text: 'We measure success by the business outcomes our clients achieve, not by hours billed.' },
  { tag: 'Innovation', title: 'Continuous innovation', text: 'We adopt new technology, especially AI, early and responsibly, and bring it to every client.' },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <Ambient3D variant="page" />
        <div className="wrap">
          <div className="eyebrow">About us</div>
          <h1>A technology partner for businesses building their digital future</h1>
          <p>{COMPANY} is a technology services company headquartered in {HQ}, delivering digital engineering, AI and automation, cloud and growth services to clients across India and worldwide.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-split">
          <Reveal as="div">
            <div className="eyebrow">Who we are</div>
            <h2 className="about-h2">Strategy, engineering and growth under one roof</h2>
          </Reveal>
          <Reveal as="div" className="about-copy" delay={0.05}>
            <p>We partner with brands, enterprises and fast-growing companies to design, build and run the platforms their business depends on: web and mobile products, AI-powered automation, customer engagement systems and the cloud infrastructure beneath them.</p>
            <p>Our teams combine consulting, design, engineering and marketing, so clients get a single accountable partner from the first strategy workshop to long-term support, instead of coordinating several vendors.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="mv-grid">
            <Reveal as="div" className="mv-card">
              <div className="tag">Our mission</div>
              <p>To help every business, from ambitious brands to established enterprises, operate smarter through well-engineered technology and practical AI.</p>
            </Reveal>
            <Reveal as="div" className="mv-card" delay={0.05}>
              <div className="tag">Our vision</div>
              <p>To be the most trusted technology and AI transformation partner for businesses in India and around the world.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Our values</div>
            <h2>What guides every engagement</h2>
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

      <section className="section">
        <div className="wrap">
          <Reveal as="div" className="careers-band">
            <div>
              <div className="eyebrow">People & talent</div>
              <h3>Growing our own engineering talent</h3>
              <p>Through InfusioTech Careers, we train graduates in spec-driven development with AI, with mentorship from our managers and experience on real industry projects.</p>
            </div>
            <a className="btn btn-ghost" href={CAREERS_URL} target="_blank" rel="noopener noreferrer">Visit InfusioTech Careers <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <Reveal as="div" className="cta-band">
            <div>
              <h3>Let's work together</h3>
              <p>Whether you're launching a new product or modernising operations, we'd like to hear about it.</p>
            </div>
            <Link className="btn btn-accent" to="/contact">Contact us <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
