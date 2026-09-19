export const PHONE_DISPLAY = '+91 70110 83740'
export const PHONE_INTL = '917011083740'
export const EMAIL = 'infusiotech@gmail.com'

// import.meta.env.BASE_URL reflects vite.config.js's `base` (e.g. "/infusio_tech/"),
// so asset paths resolve correctly both in dev and on a GitHub Pages project site.
export const LOGO_MARK = `${import.meta.env.BASE_URL}assets/logo-mark.png`
export const FOUNDER_PHOTO = `${import.meta.env.BASE_URL}assets/founder.jpg`
export const HERO_BG = `${import.meta.env.BASE_URL}assets/hero-bg.jpg`

export function waLink(message) {
  return `https://wa.me/${PHONE_INTL}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}
