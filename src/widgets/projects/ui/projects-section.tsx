'use client';

import { useState, useEffect, useCallback } from 'react';
import { Badge } from '~/shared/ui/badge';
import { Button } from '~/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/shared/ui/card';
import { ExternalLink, Github, Star, Zap } from 'lucide-react';
import { projects } from '~/entities/projects/data/projects';
import { siteConfig } from '~/shared/config/site';
import {
  PROJECT_HIGHLIGHT_EVENT,
  type ProjectHighlightDetail,
  emitSkillHighlight,
  scrollToSection,
} from '~/shared/lib/project-skill-events';

interface TechBadgeProps {
  name: string;
  skillId?: string;
}

function TechBadge({ name, skillId }: TechBadgeProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!skillId) return;
      e.stopPropagation();
      scrollToSection('skills');
      setTimeout(() => emitSkillHighlight(skillId), 300);
    },
    [skillId]
  );

  if (!skillId) {
    return (
      <Badge
        variant="outline"
        className="elegant-card border-white/20 text-xs select-none"
      >
        {name}
      </Badge>
    );
  }

  return (
    <Badge
      variant="outline"
      onClick={handleClick}
      title={`View "${name}" in Skills section`}
      className="elegant-card border-white/20 text-xs cursor-pointer hover:border-primary/50 hover:bg-primary/10 hover:text-foreground transition-all duration-200 select-none"
    >
      {name}
    </Badge>
  );
}

export function ProjectsSection() {
  const [highlightedProjectId, setHighlightedProjectId] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // Listen for project-highlight events from the Skills section
  useEffect(() => {
    const handler = (e: Event) => {
      const { projectId } = (e as CustomEvent<ProjectHighlightDetail>).detail;
      setHighlightedProjectId(projectId);
      setTimeout(() => setHighlightedProjectId(null), 3000);
    };
    window.addEventListener(PROJECT_HIGHLIGHT_EVENT, handler);
    return () => window.removeEventListener(PROJECT_HIGHLIGHT_EVENT, handler);
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50" />

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
            Real-world product work from my {siteConfig.experience.years} of
            experience building scalable B2B and B2C solutions.{' '}
            <span className="text-foreground/60 text-sm">
              Click any tech badge to explore that skill.
            </span>
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 lg:grid-cols-1 mb-16">
          {featuredProjects.map((project) => {
            const isHighlighted = highlightedProjectId === project.id;
            return (
              <Card
                key={project.id}
                id={`project-${project.id}`}
                className={`elegant-card overflow-hidden group transition-all duration-500 ${
                  isHighlighted
                    ? 'border-primary/60 ring-2 ring-primary/40 scale-[1.005]'
                    : 'border-white/10'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
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
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
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
                          {project.technologies.map((tech, i) => (
                            <TechBadge key={i} name={tech.name} skillId={tech.skillId} />
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
            );
          })}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Additional Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => {
              const isHighlighted = highlightedProjectId === project.id;
              return (
                <Card
                  key={project.id}
                  id={`project-${project.id}`}
                  className={`elegant-card overflow-hidden group transition-all duration-500 ${
                    isHighlighted
                      ? 'border-primary/60 ring-2 ring-primary/40 scale-[1.01]'
                      : 'border-white/10'
                  }`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 rounded-full elegant-card flex items-center justify-center">
                        <project.icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-gradient text-lg">{project.title}</CardTitle>
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
                          {project.achievements.slice(0, 2).map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs">
                              <span className="text-gradient mt-0.5">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <TechBadge key={i} name={tech.name} skillId={tech.skillId} />
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
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        View
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="elegant-card border-white/20 hover:bg-white/10 text-xs bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Info
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
