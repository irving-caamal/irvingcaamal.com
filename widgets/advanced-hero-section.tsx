import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { CodePlayground } from '@/components/code-playground'
import { PerformanceMonitor } from '@/components/performance-monitor'

export function AdvancedHeroSection() {
  // Get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg">
      {/* Elegant floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-mesh rounded-full opacity-10 blur-3xl floating"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-mesh-alt rounded-full opacity-10 blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-mesh rounded-full opacity-5 blur-3xl"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-32 right-32 morphism-card p-4 rounded-lg floating opacity-40 hidden lg:block">
          <Code2 className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-32 morphism-card p-4 rounded-lg floating-delayed opacity-40 hidden lg:block">
          <Rocket className="w-6 h-6" />
        </div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Refined profile */}
          <div className="relative group opacity-0 animate-fade-in">
            <div className="w-32 h-32 rounded-full morphism-card p-1 glow group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full gradient-mesh flex items-center justify-center relative overflow-hidden">
                <span className="text-4xl font-bold text-white z-10">{getInitials(siteConfig.name)}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 animate-pulse">
              <Sparkles className="w-6 h-6 text-muted-foreground opacity-60" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <div className="w-4 h-4 gradient-mesh rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-8 w-full">
            {/* Status indicator */}
            <div className="opacity-0 animate-fade-in-delayed">
              <div className="inline-flex items-center px-6 py-3 rounded-full morphism-card text-sm font-medium glow-hover group">
                <span className="w-2 h-2 gradient-mesh rounded-full mr-3 animate-pulse"></span>
                <span className="group-hover:text-gradient-subtle transition-colors">{siteConfig.tagline}</span>
                <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
            </div>
            
            {/* Main heading */}
            <div className="space-y-6 opacity-0 animate-fade-in-delayed-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="block mb-2">Hi, I'm</span>
                <span className="text-gradient block">
                  {siteConfig.name}
                </span>
              </h1>
              
              {/* Refined description */}
              <div className="relative max-w-4xl mx-auto">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed space-y-3">
                  <span className="block mb-4">
                    <span className="text-gradient-subtle font-semibold">+6 years of experience</span> developing sophisticated software solutions across B2B and B2C industries.
                  </span>
                  <span className="block mb-4">
                    Specialized in architecting <span className="font-semibold">high-quality, well-tested, and resilient applications</span> that deliver exceptional business value.
                  </span>
                  <span className="block mb-4">
                    Expert in <span className="text-gradient-subtle font-semibold">MERN and MEVN stacks</span> with advanced TypeScript proficiency across React.js, Vue.js, Next.js, and Nuxt.js ecosystems.
                  </span>
                  <span className="block mb-4">
                    Deep expertise in database design and optimization with <span className="font-semibold">PostgreSQL, MySQL, MSSQL</span>, and <span className="font-semibold">MongoDB</span>.
                  </span>
                  <span className="block">
                    Committed to <span className="text-gradient-subtle font-semibold">continuous learning and professional excellence</span>.
                  </span>
                </p>
              </div>
            </div>

            {/* Refined performance metrics */}
            <div className="opacity-0 animate-fade-in-delayed-3">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="morphism-card px-6 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                  <span className="text-gradient-subtle font-semibold text-base">99.9%</span>
                  <span className="text-muted-foreground ml-2">Uptime</span>
                </div>
                <div className="morphism-card px-6 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                  <span className="text-gradient-subtle font-semibold text-base">{'<100ms'}</span>
                  <span className="text-muted-foreground ml-2">Response</span>
                </div>
                <div className="morphism-card px-6 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                  <span className="text-gradient-subtle font-semibold text-base">A+</span>
                  <span className="text-muted-foreground ml-2">Performance</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Refined action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delayed-4">
            <Button 
              size="lg" 
              className="btn-elegant group relative overflow-hidden px-8 py-4 text-white" 
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="morphism-card border-white/20 hover:bg-white/5 group px-8 py-4" 
              asChild
            >
              <Link href={siteConfig.resumeUrl} target="_blank">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Link>
            </Button>
          </div>

          {/* Refined social links */}
          <div className="flex items-center space-x-6 opacity-0 animate-fade-in-delayed-5">
            {[
              { icon: Github, href: siteConfig.social.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" }
            ].map((social, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                className="morphism-card glow-hover group transition-all duration-300 hover:scale-110 w-12 h-12" 
                asChild
              >
                <Link href={social.href} target="_blank">
                  <social.icon className="h-6 w-6 group-hover:animate-pulse" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Elegant scroll indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <div className="w-12 h-12 rounded-full morphism-card flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer">
              <ArrowDown className="h-5 w-5 text-muted-foreground group-hover:text-gradient-subtle transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Refined showcase section */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/95 to-transparent hidden xl:block">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-3 opacity-0 animate-fade-in-delayed-5">
            <PerformanceMonitor />
            <div className="md:col-span-2">
              <CodePlayground />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
