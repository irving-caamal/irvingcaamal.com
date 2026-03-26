'use client';

import { Badge } from '~/shared/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/card';
import { Code2, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'GraphQL', level: 75 },
    ],
  },
];

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Docker', 'AWS',
  'GraphQL', 'REST APIs', 'Git', 'Jest', 'Cypress',
  'Figma', 'Vercel', 'Supabase',
];

/**
 * Skills section widget
 * Displays technical skills and technologies
 */
export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <Badge variant="secondary" className="border-white/20">
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            A comprehensive skill set covering the full spectrum of modern web
            development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="elegant-card border-white/10 group">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <CardTitle className="text-gradient">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-semibold text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1 bg-muted">
                      <div
                        className="absolute top-0 left-0 h-full bg-foreground"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">
            Technologies I Work With
          </h3>
          <div className="elegant-card p-8">
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border border-border text-sm font-medium cursor-pointer hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
