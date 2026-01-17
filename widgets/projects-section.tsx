import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ExternalLink,
  Github,
  Star,
  Zap,
  Building2,
  Users,
  ShoppingCart,
  BarChart3,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'MGM Resorts - Design System Migration',
    company: 'FullStack Labs (Client: MGM Resorts International)',
    description:
      'Led migration from legacy design system to modern architecture using Micro-Frontend patterns with Next.js and Webpack Module Federation. Built 10+ accessible, high-performance components.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'Next.js',
      'TypeScript',
      'Micro-Frontends',
      'Webpack Module Federation',
      'A11y',
      'Headless CMS',
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Building2,
    achievements: [
      'Improved maintainability through modern design system',
      'Built A11y compliant components',
      'Reduced dev cycle times through DX enhancements',
    ],
  },
  {
    title: 'Teachers Pay Teachers - Platform Rebranding',
    company: 'FullStack Labs (Client: Teachers Pay Teachers)',
    description:
      'Led platform-wide rebranding effort, updating design tokens, UI assets, and integrating Headless CMS. Built accessible design system components in partnership with design teams.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'React',
      'TypeScript',
      'Design Systems',
      'Headless CMS',
      'Feature Flags',
      'A11y',
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Users,
    achievements: [
      'Launched rebrand in phases using feature flags',
      'Built fully accessible components from scratch',
      'Resolved production issues proactively',
    ],
  },
  {
    title: 'AlertD - AI-Powered Dashboard',
    company: 'AlertD',
    description:
      'Developed full-stack features for real-time metrics dashboards with advanced prompt engineering for AI-powered user experiences. Built POCs for chat history visualization.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'React',
      'Node.js',
      'AI Integration',
      'Real-time Data',
      'TypeScript',
      'Dashboard UI',
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: BarChart3,
    achievements: [
      'Improved product alignment by 30% through POCs',
      'Developed reusable React components',
      'Applied advanced prompt engineering techniques',
    ],
  },
  {
    title: 'E-commerce Platform Migration',
    company: 'Cancun Airport Transportation',
    description:
      'Migrated multiple e-commerce sites to Next.js and Nuxt.js for modern performance. Built CI/CD pipelines and containerized development environments.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'Next.js',
      'Nuxt.js',
      'Vue.js',
      'CI/CD',
      'Docker',
      'E-commerce',
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: ShoppingCart,
    achievements: [
      'Reduced integration times by 40%',
      'Refactored legacy apps for better performance',
      'Implemented modern deployment strategies',
    ],
  },
  {
    title: 'Transportation Management System',
    company: 'Servicios de Autotransporte Mochcun',
    description:
      'Designed and developed a full web application from scratch using Vue.js and Node.js. Created REST APIs and CI/CD pipelines for automated deployment.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'Vue.js',
      'Node.js',
      'REST APIs',
      'CI/CD',
      'PostgreSQL',
      'Express',
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: Building2,
    achievements: [
      'Cut deployment time by 50% through automation',
      'Enhanced UX/UI with user-centric improvements',
      'Streamlined internal business processes',
    ],
  },
  {
    title: 'CRM System Modules',
    company: 'Grupo Humanitta',
    description:
      'Developed CRM modules from scratch to enhance accountability and tracking. Integrated third-party APIs and optimized complex SQL queries.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'JavaScript',
      'SQL',
      'Third-party APIs',
      'CRM',
      'Database Optimization',
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: Users,
    achievements: [
      'Improved operational efficiency via automation',
      'Set technical standards for new modules',
      'Proposed modular architecture patterns',
    ],
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50"></div>

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
            Real-world projects from my 8+ years of experience building scalable
            B2B and B2C solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 lg:grid-cols-1 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="elegant-card border-white/10 overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                      <h3 className="text-2xl font-bold text-gradient mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {project.company}
                      </p>
                      <p className="text-base leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm"
                          >
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
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="elegant-card border-white/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="text-white flex-1" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Case Study
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="elegant-card border-white/20 hover:bg-white/10 bg-transparent"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Additional Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="elegant-card border-white/10 overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 rounded-full elegant-card flex items-center justify-center">
                      <project.icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-gradient text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium">
                    {project.company}
                  </CardDescription>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements
                          .slice(0, 2)
                          .map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-xs"
                            >
                              <span className="text-gradient mt-0.5">•</span>
                              {achievement}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="elegant-card border-white/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs opacity-60">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" className="text-white text-xs" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="elegant-card border-white/20 hover:bg-white/10 text-xs bg-transparent"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="mr-1 h-3 w-3" />
                      Info
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
