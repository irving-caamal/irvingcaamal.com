import { Button } from "../../../shared/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "../../../shared/lib/config"

export function HeroSection() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Clean profile */}
          <div className="relative opacity-0 animate-fade-in">
            <div className="w-32 h-32 rounded-full elegant-card p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center">
                <span className="text-4xl font-bold text-background">{getInitials(siteConfig.name)}</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-8 w-full">
            {/* Status indicator */}
            <div className="opacity-0 animate-fade-in-delayed">
              <div className="inline-flex items-center px-6 py-3 rounded-full elegant-card text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>{siteConfig.tagline}</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-6 opacity-0 animate-fade-in-delayed-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="block mb-2">Hi, I'm</span>
                <span className="text-gradient block">{siteConfig.name}</span>
              </h1>

              {/* Clean description */}
              <div className="relative max-w-4xl mx-auto">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed space-y-3">
                  <span className="block mb-4">
                    <span className="font-semibold">8+ years of experience</span> developing sophisticated software
                    solutions across B2B and B2C industries.
                  </span>
                  <span className="block mb-4">
                    Specialized in architecting{" "}
                    <span className="font-semibold">high-quality, well-tested, and resilient applications</span> that
                    deliver exceptional business value.
                  </span>
                  <span className="block mb-4">
                    Expert in <span className="font-semibold">MERN and MEVN stacks</span> with advanced TypeScript
                    proficiency across React.js, Vue.js, Next.js, and Nuxt.js ecosystems.
                  </span>
                  <span className="block">
                    Committed to <span className="font-semibold">continuous learning and professional excellence</span>.
                  </span>
                </p>
              </div>
            </div>

            {/* Clean metrics */}
            <div className="opacity-0 animate-fade-in-delayed-3">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="elegant-card px-6 py-4 rounded-full">
                  <span className="font-semibold text-base">99.9%</span>
                  <span className="text-muted-foreground ml-2">Uptime</span>
                </div>
                <div className="elegant-card px-6 py-4 rounded-full">
                  <span className="font-semibold text-base">{"<100ms"}</span>
                  <span className="text-muted-foreground ml-2">Response</span>
                </div>
                <div className="elegant-card px-6 py-4 rounded-full">
                  <span className="font-semibold text-base">A+</span>
                  <span className="text-muted-foreground ml-2">Performance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delayed-4">
            <Button size="lg" className="btn-elegant px-8 py-4" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="elegant-card px-8 py-4 bg-transparent" asChild>
              <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Clean social links */}
          <div className="flex items-center space-x-6 opacity-0 animate-fade-in-delayed-5">
            {[
              { icon: Github, href: siteConfig.social.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
            ].map((social, index) => (
              <Button key={index} variant="ghost" size="icon" className="elegant-card w-12 h-12" asChild>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Clean scroll indicator */}
          <div className="absolute bottom-8">
            <div className="w-12 h-12 rounded-full elegant-card flex items-center justify-center cursor-pointer">
              <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
