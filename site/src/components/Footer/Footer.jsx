import { Link } from 'react-router-dom'
import { EMAIL, PHONE_DISPLAY, PHONE_INTL, HQ, COMPANY, CAREERS_URL, LINKEDIN_URL, INSTAGRAM_URL, LOGO_MARK } from '../../data/site'
import { PRACTICES } from '../../data/capabilities'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <img src={LOGO_MARK} alt="InfusioTech" className="mark" />
              InfusioTech
            </Link>
            <p>Digital engineering, AI & automation, cloud and growth services for businesses across India and worldwide.</p>
            <div className="footer-social">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {PRACTICES.map((p) => <li key={p.slug}><Link to={`/services#${p.slug}`}>{p.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/process">Our approach</Link></li>
              <li><a href={CAREERS_URL} target="_blank" rel="noopener noreferrer">Careers</a></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY}</a></li>
              <li className="footer-address">{HQ}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</span>
          <span>Headquartered in {HQ}</span>
        </div>
      </div>
    </footer>
  )
}
