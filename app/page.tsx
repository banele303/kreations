"use client"

import { Navigation } from "../components/navigation"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { WhyUs } from "../components/why-us"
import { Portfolio } from "../components/portfolio"
import { Testimonials } from "../components/testimonials"
import { Pricing } from "../components/pricing"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { AnimatedSection } from "../components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  )
}

