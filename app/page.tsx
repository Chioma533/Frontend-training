import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { RegistrationSection } from "@/components/registration-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { PartnersSection } from "@/components/partner-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <RegistrationSection />
      <CtaSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
