import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'
import { PageTransition } from './components/ui/page-transition'
import { ScrollProgress } from './components/ui/scroll-progress'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Pricing from './pages/Pricing/Pricing'
import Process from './pages/Process/Process'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

const PAGES = [
  { path: '/', Component: Home },
  { path: '/services', Component: Services },
  { path: '/pricing', Component: Pricing },
  { path: '/process', Component: Process },
  { path: '/about', Component: About },
  { path: '/contact', Component: Contact },
]

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {PAGES.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PageTransition>
                <Component />
              </PageTransition>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
