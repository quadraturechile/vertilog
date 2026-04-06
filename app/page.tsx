import Header from './components/header'
import HeroSection from './components/hero-section'
import CoverageSection from './components/coverage-section'
import SpecializationSection from './components/specialization-section'
import ValueSection from './components/value-section'
import MissionSection from './components/mission-section'
import ContactSection from './components/contact-section'
import Footer from './components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CoverageSection />
      <SpecializationSection />
      <ValueSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
