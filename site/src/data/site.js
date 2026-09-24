export const PHONE_DISPLAY = '+91 70110 83740'
export const PHONE_INTL = '917011083740'
export const EMAIL = 'contact@infusiotech.com'
export const COMPANY = 'InfusioTech Solutions'
export const HQ = 'Jaipur, Rajasthan, India'
export const CAREERS_URL = 'https://infusiotech.careers'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/infusiotech-solutions/'
export const INSTAGRAM_URL = 'https://www.instagram.com/infusiotechsolutions/'

// Headline numbers for the home page stats band. Only put real, verifiable figures here
// (e.g. { value: '40+', label: 'Projects delivered' }); the band stays hidden while this is empty.
export const STATS = []

// import.meta.env.BASE_URL reflects vite.config.js's `base` (e.g. "/" on the custom domain),
// so asset paths resolve correctly both in dev and on a GitHub Pages project site.
export const LOGO_MARK = `${import.meta.env.BASE_URL}assets/logo-mark.png`
export const HERO_BG = `${import.meta.env.BASE_URL}assets/hero-bg.jpg`

export function waLink(message) {
  return `https://wa.me/${PHONE_INTL}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}
