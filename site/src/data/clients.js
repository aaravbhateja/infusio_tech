// Add a client here once they've agreed to be featured, and drop their logo in
// public/assets/clients/. The "Our clients" strip on the home page stays hidden
// while this list is empty, so no placeholder or invented clients ever show.
//
// { name: 'Acme Co', logo: 'acme.svg', url: 'https://acme.example' }   // url optional
export const CLIENTS = [
  { name: 'Furnofy', logo: 'furnofy.jpg' },
  { name: 'Farmley', logo: 'farmley.jpg' },
  { name: 'Urride', logo: 'urride.jpg' },
]

export const clientLogoSrc = (file) => `${import.meta.env.BASE_URL}assets/clients/${file}`
