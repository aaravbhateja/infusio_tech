import { Link } from 'react-router-dom'
import { EMAIL, waLink, LOGO_MARK } from '../../data/site'

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
            <p>Websites, apps, and automation for local businesses — starting in Jaipur.</p>
          </div>
          <div>
            <h5>Site</h5>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/process">Process</Link></li>
            </ul>
          </div>
          <div>
            <h5>Talk to us</h5>
            <ul>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><Link to="/contact">Contact page</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} InfusioTech, Jaipur</span>
          <span>Built to grow local businesses first</span>
        </div>
      </div>
    </footer>
  )
}
