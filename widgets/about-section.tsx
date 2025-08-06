import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Lightbulb, Users, Zap, Star } from 'lucide-react'
import { siteConfig } from '@/lib/config'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Analytical thinking to solve complex problems with innovative solutions.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative approach with excellent communication and leadership skills.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape.',
    gradient: 'from-purple-500 to-pink-500'
  }
]

export function AboutSection() {
  const stats = [
    { number: siteConfig.experience.projectsCompleted, label: 'Projects Completed' },
    { number: siteConfig.experience.years, label: 'Years Experience' },
    { number: siteConfig.experience.happyClients, label: 'Happy Clients' },
    { number: siteConfig.experience.successRate, label: 'Success Rate' }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <Badge variant="secondary" className="morphism-card border-white/20">
            <Star className="w-3 h-3 mr-1" />
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Passionate <span className="text-gradient">Developer</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            With over {siteConfig.experience.years.replace('+', '')} years of experience in full-stack development, I specialize in creating
            robust web applications using modern technologies and frameworks.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="morphism-card rounded-2xl p-6 glow-hover">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="morphism-card border-white/10 glow-hover group">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${highlight.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-gradient">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About content with glass effect */}
        <div className="max-w-4xl mx-auto">
          <div className="morphism-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gradient">My Journey</h3>
                <p className="text-lg leading-relaxed">
                  {siteConfig.about.journey}
                </p>
                <p className="text-lg leading-relaxed">
                  {siteConfig.about.philosophy}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-1">
                  <div className="w-full h-full rounded-3xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <div className="text-lg font-semibold text-gradient">Always Learning</div>
                      <div className="text-sm text-muted-foreground">Staying ahead of the curve</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-4 h-4 text-yellow-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
