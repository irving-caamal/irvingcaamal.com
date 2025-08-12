import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Award, GraduationCap } from "lucide-react"
import { siteConfig } from "~/shared/config/site"

const experiences = [
  {
    title: "Full-Stack Engineer",
    company: "AlertD",
    location: "Remote",
    period: "May 2023 - July 2025",
    type: "FTE / Contractor",
    description:
      "Applied advanced prompt engineering techniques to improve AI-powered user experiences. Contributed to modular architecture for early-stage product development.",
    achievements: [
      "Developed reusable React components aligned with design system",
      "Delivered full-stack features for real-time metrics dashboards",
      "Built POCs for exploratory features, improving product alignment by 30%",
      "Collaborated cross-functionally with backend, DevOps, and design teams",
    ],
    technologies: ["React", "Node.js", "AI Integration", "TypeScript", "Real-time Data"],
  },
  {
    title: "Senior Software Engineer",
    company: "FullStack Labs",
    location: "Remote",
    period: "May 2023 - April 2025",
    type: "FTE / Contractor",
    description:
      "End Client: MGM Resorts International. Led migration from legacy design system to modern architecture using Micro-Frontend patterns.",
    achievements: [
      "Built 10+ accessible, high-performance components (A11y compliant)",
      "Maintained Micro-Frontend architecture using Next.js and Webpack Module Federation",
      "Integrated Headless CMS into component library for content team autonomy",
      "Spearheaded DX enhancements through tooling spikes, reducing dev cycle times",
      "Released features via feature flags, enabling phased and low-risk rollouts",
    ],
    technologies: ["Next.js", "TypeScript", "Micro-Frontends", "Webpack Module Federation", "Headless CMS", "A11y"],
  },
  {
    title: "Mid-Level Software Engineer",
    company: "FullStack Labs",
    location: "Remote",
    period: "February 2022 - May 2023",
    type: "FTE / Contractor",
    description:
      "End Client: Teachers Pay Teachers. Led platform-wide rebranding effort, updating design tokens, UI assets, and integrating Headless CMS.",
    achievements: [
      "Built fully accessible and performant components from scratch",
      "Launched rebrand in different phases using feature flags",
      "Launched well-tested features behind feature flags for different user types",
      "Participated in on-call support, resolving production issues proactively",
      "Built accessible design system components in partnership with design teams",
    ],
    technologies: ["React", "TypeScript", "Design Systems", "Feature Flags", "Headless CMS", "A11y Testing"],
  },
  {
    title: "Software Engineer",
    company: "Servicios de Autotransporte Mochcun",
    location: "Cancún, México",
    period: "January 2018 - February 2022",
    type: "Presential / FTE",
    description:
      "Designed and developed a full web application from scratch using Vue.js and Node.js. Created REST APIs and CI/CD pipelines.",
    achievements: [
      "Cut deployment time by 50% through automation",
      "Enhanced app UX/UI with user-centric improvements",
      "Streamlined internal business processes via custom digital tools",
      "Created REST APIs and CI/CD pipelines for automated deployment",
    ],
    technologies: ["Vue.js", "Node.js", "Express", "PostgreSQL", "CI/CD", "REST APIs"],
  },
  {
    title: "Software Engineer",
    company: "Cancun Airport Transportation",
    location: "Cancún, México",
    period: "January 2018 - February 2022",
    type: "Presential / Freelancer",
    description:
      "Migrated multiple e-commerce sites to Next.js and Nuxt.js for modern performance. Built CI/CD pipelines and containerized dev environments.",
    achievements: [
      "Reduced integration times by 40% via staging/test environments",
      "Refactored legacy apps to boost maintainability and performance",
      "Built CI/CD pipelines and containerized development environments",
      "Migrated multiple e-commerce sites to modern frameworks",
    ],
    technologies: ["Next.js", "Nuxt.js", "Vue.js", "Docker", "CI/CD", "E-commerce"],
  },
  {
    title: "Software Engineer",
    company: "Grupo Humanitta",
    location: "Cancún, México",
    period: "November 2016 - January 2018",
    type: "Presential / FTE",
    description:
      "Developed CRM modules from scratch to enhance accountability and tracking. Integrated third-party APIs and optimized complex SQL queries.",
    achievements: [
      "Improved operational efficiency via task automation",
      "Set technical standards for new internal module development",
      "Proposed modular architecture patterns for future internal tools",
      "Integrated third-party APIs and optimized complex SQL queries",
    ],
    technologies: ["JavaScript", "SQL", "Third-party APIs", "CRM Systems", "Database Optimization"],
  },
]

const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "American Council on Education",
    date: "October 2022",
    type: "Cloud Computing",
  },
]

export function ExperienceSection() {
  const education = [
    {
      degree: siteConfig.education.degree,
      school: siteConfig.education.school,
      location: siteConfig.education.location,
      period: `February 2012 - June ${siteConfig.education.graduationYear}`,
      description:
        "Comprehensive program covering software engineering principles, system design, and modern development practices.",
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <Badge variant="secondary" className="elegant-card border-white/20">
            <CalendarDays className="w-3 h-3 mr-1" />
            Professional Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-gradient">8+ Years</span> of Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            My career progression from junior developer to senior engineer, building scalable solutions across various
            industries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="elegant-card border-white/10">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-gradient">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-semibold mt-1">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge variant="outline" className="elegant-card border-white/20 text-xs">
                          {exp.period}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="text-sm space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <span className="text-gradient mt-1 font-bold">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="elegant-card border-white/10 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="elegant-card border-white/10">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl elegant-card flex items-center justify-center">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gradient">{edu.degree}</CardTitle>
                          <CardDescription className="font-semibold mt-1">{edu.school}</CardDescription>
                          <div className="flex items-center gap-2 mt-2">
                            <CalendarDays className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="elegant-card border-white/10">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl elegant-card flex items-center justify-center">
                          <Award className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base text-gradient">{cert.name}</CardTitle>
                          <CardDescription className="font-semibold mt-1">{cert.issuer}</CardDescription>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{cert.date}</span>
                            </div>
                            <Badge variant="secondary" className="elegant-card border-white/10 text-xs">
                              {cert.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Languages</h3>
              <Card className="elegant-card border-white/10">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Spanish</span>
                      <Badge variant="secondary" className="elegant-card border-white/10 text-xs">
                        Native
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">English</span>
                      <Badge variant="secondary" className="elegant-card border-white/10 text-xs">
                        Professional
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
