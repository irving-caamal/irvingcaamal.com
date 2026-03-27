'use client';

import { Badge } from '~/shared/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/card';
import { Code2, Database, Wrench, Layers } from 'lucide-react';
import {
  skills,
  skillCategories as skillCategoryMeta,
} from '~/entities/skills/data/skills';

const categoryIcons = {
  frontend: Code2,
  backend: Database,
  testing: Wrench,
  devops: Wrench,
  architecture: Layers,
} as const;

const orderedCategories = [
  'frontend',
  'backend',
  'testing',
  'devops',
  'architecture',
] as const;

const skillCategories = orderedCategories.map((categoryId) => ({
  title: skillCategoryMeta[categoryId].label,
  icon: categoryIcons[categoryId],
  skills: skills
    .filter((skill) => skill.category === categoryId)
    .sort((a, b) => b.level - a.level)
    .slice(0, 4),
}));

const technologies = [...skills]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((skill) => skill.name);

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
            Current stack coverage shaped by production work across frontend,
            backend, testing, and delivery systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="elegant-card border-white/10 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <CardTitle className="text-gradient">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between text-sm gap-4">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-semibold text-muted-foreground shrink-0">
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
              {technologies.map((tech) => (
                <div
                  key={tech}
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
