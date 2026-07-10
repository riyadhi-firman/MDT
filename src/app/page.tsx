import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { InfrastructureSection } from "@/components/sections/InfrastructureSection"
import { CoverageSection } from "@/components/sections/CoverageSection"
import { AdvantagesSection } from "@/components/sections/AdvantagesSection"
import { TimelineSection } from "@/components/sections/TimelineSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InfrastructureSection />
      <CoverageSection />
      <AdvantagesSection />
      <TimelineSection />
      <GallerySection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
