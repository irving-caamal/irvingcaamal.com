'use client';

import { useUnit } from 'effector-react';
import { Card, CardContent } from '~/shared/ui/card';
import { Badge } from '~/shared/ui/badge';
import { Code, Lightbulb, Users, Zap, Star } from 'lucide-react';
import { $profile } from '~/entities/profile/model/profile';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description:
      'Analytical thinking to solve complex problems with innovative solutions.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description:
      'Collaborative approach with excellent communication and leadership skills.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description:
      'Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape.',
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
      number: profile.experience.projectsCompleted,
      label: 'Projects Completed',
    },
    { number: profile.experience.years, label: 'Years Experience' },
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
            Passionate <span className="text-gradient">Developer</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            With over {profile.experience.years.replace('+', '')} years of
            experience in full-stack development, I specialize in creating
            robust web applications using modern technologies and frameworks.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-16">
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
                        Always Learning
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Staying ahead of the curve
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
