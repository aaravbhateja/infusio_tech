export const PHONE_DISPLAY = '+91 70110 83740'
export const PHONE_INTL = '917011083740'
export const EMAIL = 'bhatejaaarav1@gmail.com'

export function waLink(message) {
  return `https://wa.me/${PHONE_INTL}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}
