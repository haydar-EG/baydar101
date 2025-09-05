import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectIdeaAssistant } from "@/components/sections/ai-demo-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectIdeaAssistant />
      
      {/* Placeholder sections for now */}
      <section id="process" className="section-padding bg-background-alt">
        <div className="container text-center">
          <h2 className="text-display font-bold text-text-primary mb-4">Our Process</h2>
          <p className="text-lg text-text-secondary">Coming soon - Process timeline section</p>
        </div>
      </section>
      
      <section className="section-padding bg-background-base">
        <div className="container text-center">
          <h2 className="text-display font-bold text-text-primary mb-4">Featured Work</h2>
          <p className="text-lg text-text-secondary">Coming soon - Portfolio showcase</p>
        </div>
      </section>
      
      <section className="section-padding bg-background-alt">
        <div className="container text-center">
          <h2 className="text-display font-bold text-text-primary mb-4">Tech Stack</h2>
          <p className="text-lg text-text-secondary">Coming soon - Technology badges</p>
        </div>
      </section>
      
      <section className="section-padding bg-background-base">
        <div className="container text-center">
          <h2 className="text-display font-bold text-text-primary mb-4">FAQ</h2>
          <p className="text-lg text-text-secondary">Coming soon - Frequently asked questions</p>
        </div>
      </section>
      
      <section id="contact" className="section-padding bg-background-alt">
        <div className="container text-center">
          <h2 className="text-display font-bold text-text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-text-secondary">Coming soon - Contact form</p>
        </div>
      </section>
    </main>
  )
}
