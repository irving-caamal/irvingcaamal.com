import { HeroSection } from "~/widgets/hero/ui/hero-section"
import { AboutSection } from "~/widgets/about/ui/about-section"
import { SkillsSection } from "~/widgets/skills/ui/skills-section"
import { ProjectsSection } from "~/widgets/projects/ui/projects-section"
import { ExperienceSection } from "~/widgets/experience/ui/experience-section"
import { ContactSection } from "~/widgets/contact/ui/contact-section"
import { SkillVisualization } from "~/shared/components/skill-visualization"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <SkillVisualization />
        </div>
      </section>
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
