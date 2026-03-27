'use client';

import { useUnit } from 'effector-react';
import { Card, CardContent } from '~/shared/ui/card';
import { Badge } from '~/shared/ui/badge';
import { Code, Lightbulb, Users, Zap, Star } from 'lucide-react';
import { $profile } from '~/entities/profile/model/profile';

const highlights = [
  {
    icon: Code,
    title: 'Scalable Frontends',
    description:
      'Building resilient interfaces, component systems, and maintainable product surfaces.',
  },
  {
    icon: Lightbulb,
    title: 'Architecture Mindset',
    description:
      'Balancing delivery speed with long-term system clarity, testing, and extensibility.',
  },
  {
    icon: Users,
    title: 'Team Autonomy',
    description:
      'Creating shared patterns that help distributed teams ship safely and independently.',
  },
  {
    icon: Zap,
    title: 'Release Confidence',
    description:
      'Using CI/CD, observability, feature flags, and QA to reduce delivery risk.',
  },
];

/**
 * About section widget
 * Displays personal information, stats, and highlights
 */
export function AboutSection() {
  const profile = useUnit($profile);

  const stats = [
    {
      number: profile.experience.years,
      label: 'Years Experience',
    },
    { number: profile.experience.domains, label: 'Product Domains' },
    { number: profile.experience.stack, label: 'Core Stack' },
    { number: profile.experience.delivery, label: 'Delivery Focus' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <Badge variant="secondary" className="border-white/20">
            <Star className="w-3 h-3 mr-1" />
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Product-Minded <span className="text-gradient">Engineer</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            With over {profile.experience.years.replace('+', '')} years of
            experience, I focus on building reliable full-stack products with
            strong frontend architecture, backend pragmatism, and disciplined
            delivery practices.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="elegant-card p-6">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="elegant-card border-white/10 group">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-foreground">
                    <highlight.icon className="h-6 w-6 text-background" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-gradient">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About content */}
        <div className="max-w-4xl mx-auto">
          <div className="elegant-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gradient">My Journey</h3>
                <p className="text-lg leading-relaxed">
                  {profile.about.journey}
                </p>
                <p className="text-lg leading-relaxed">
                  {profile.about.philosophy}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square border border-border p-1">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <div className="text-lg font-semibold text-gradient">
                        Built for Scale
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Systems, teams, and delivery workflows
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
