import Footer from "../components/Footer"
import Header from "../components/Header"
import CTASection from "../sections/CTASection"
import HeroSection from "../sections/HeroSection"
import OurKeynoteSpeakers from "../sections/OurKeynoteSpeakers"
import OurWorkSection from "../sections/OurWorkSection"
import ServicesSection from "../sections/ServicesSection"
import WhyUsSection from "../sections/WhyUsSection"

// Login section
const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#01303C] text-white overflow-hidden">
      {/* Background pattern we using pseudo class */}
      <div className="bg-grid-pattern absolute inset-0"></div>

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:py-16 bg-transparent">
        <HeroSection />
        <OurKeynoteSpeakers />
        <WhyUsSection />
        <ServicesSection />
        <OurWorkSection />
        <CTASection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default LandingPage