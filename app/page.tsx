import { AdvancedHeroSection } from '@/widgets/advanced-hero-section'
import { AboutSection } from '@/widgets/about-section'
import { SkillsSection } from '@/widgets/skills-section'
import { ProjectsSection } from '@/widgets/projects-section'
import { ExperienceSection } from '@/widgets/experience-section'
import { ContactSection } from '@/widgets/contact-section'
import { SkillVisualization } from '@/components/skill-visualization'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AdvancedHeroSection />
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
