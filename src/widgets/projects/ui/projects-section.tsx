import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card } from "@/shared/ui/card"
import { ExternalLink, Github, Star, Zap, Building2, Users, BarChart3 } from "lucide-react"

const projects = [
  {
    title: "MGM Resorts - Design System Migration",
    company: "FullStack Labs (Client: MGM Resorts International)",
    description:
      "Led migration from legacy design system to modern architecture using Micro-Frontend patterns with Next.js and Webpack Module Federation. Built 10+ accessible, high-performance components.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Micro-Frontends", "Webpack Module Federation", "A11y", "Headless CMS"],
    github: "#",
    demo: "#",
    featured: true,
    icon: Building2,
    achievements: [
      "Improved maintainability through modern design system",
      "Built A11y compliant components",
      "Reduced dev cycle times through DX enhancements",
    ],
  },
  {
    title: "Teachers Pay Teachers - Platform Rebranding",
    company: "FullStack Labs (Client: Teachers Pay Teachers)",
    description:
      "Led platform-wide rebranding effort, updating design tokens, UI assets, and integrating Headless CMS. Built accessible design system components in partnership with design teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Design Systems", "Headless CMS", "Feature Flags", "A11y"],
    github: "#",
    demo: "#",
    featured: true,
    icon: Users,
    achievements: [
      "Launched rebrand in phases using feature flags",
      "Built fully accessible components from scratch",
      "Resolved production issues proactively",
    ],
  },
  {
    title: "AlertD - AI-Powered Dashboard",
    company: "AlertD",
    description:
      "Developed full-stack features for real-time metrics dashboards with advanced prompt engineering for AI-powered user experiences. Built POCs for chat history visualization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "AI Integration", "Real-time Data", "TypeScript", "Dashboard UI"],
    github: "#",
    demo: "#",
    featured: true,
    icon: BarChart3,
    achievements: [
      "Improved product alignment by 30% through POCs",
      "Developed reusable React components",
      "Applied advanced prompt engineering techniques",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <Badge variant="secondary" className="elegant-card border-white/20">
            <Zap className="w-3 h-3 mr-1" />
            Professional Portfolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            Real-world projects from my 8+ years of experience building scalable B2B and B2C solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-1 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="elegant-card border-white/10 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm border-white/30">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 rounded-full elegant-card flex items-center justify-center">
                      <project.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gradient mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium mb-3">{project.company}</p>
                      <p className="text-base leading-relaxed mb-4">{project.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-gradient mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="elegant-card border-white/20 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="text-white flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Case Study
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="elegant-card border-white/20 hover:bg-white/10 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
