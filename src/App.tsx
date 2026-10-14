import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { useRoute } from './lib/router'
import { useTheme } from './lib/useTheme'
import { navByPath } from './content/site'
import { HomePage } from './features/home/HomePage'
import { HowItWorksPage } from './features/how/HowItWorksPage'
import { PricingPage } from './features/pricing/PricingPage'
import { AboutPage } from './features/about/AboutPage'
import { ContactPage } from './features/contact/ContactPage'

function App() {
  const route = useRoute()
  const { theme, toggle } = useTheme()
  const active = navByPath(route.path)?.id ?? 'home'

  return (
    <>
      <Header active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        {route.path === '/how-it-works' ? (
          <HowItWorksPage />
        ) : route.path === '/pricing' ? (
          <PricingPage />
        ) : route.path === '/about' ? (
          <AboutPage />
        ) : route.path === '/contact' ? (
          <ContactPage origin={route.query.get('from')} />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App