'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/card';
import { Badge } from '~/shared/ui/badge';
import { Button } from '~/shared/ui/button';
import { Progress } from '~/shared/ui/progress';
import {
  Code,
  Database,
  Globe,
  ChevronRight,
  Layers,
  TestTube,
  Cloud,
  FolderOpen,
} from 'lucide-react';
import { skills, skillCategories as skillCategoryMeta } from '~/entities/skills/data/skills';
import { getProjectsForSkill } from '~/entities/projects/data/projects';
import {
  SKILL_HIGHLIGHT_EVENT,
  type SkillHighlightDetail,
  emitProjectHighlight,
  scrollToSection,
} from '~/shared/lib/project-skill-events';

const categoryIcons = {
  frontend: Code,
  backend: Database,
  testing: TestTube,
  devops: Cloud,
  architecture: Layers,
};

const skillCategories = Object.fromEntries(
  Object.entries(skillCategoryMeta).map(([key, val]) => [
    key,
    { ...val, icon: categoryIcons[key as keyof typeof categoryIcons] },
  ])
) as Record<
  string,
  { label: string; icon: React.ComponentType<{ className?: string }> }
>;

export function SkillVisualization() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [highlightedSkillId, setHighlightedSkillId] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  const getConnectedSkills = (skillId: string) => {
    const skill = skills.find((s) => s.id === skillId);
    if (!skill) return [];
    return skill.connections
      .map((connId) => skills.find((s) => s.id === connId))
      .filter(Boolean);
  };

  const getExpertiseLevel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  const toggleProjectExpand = (skillId: string) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(skillId)) {
        next.delete(skillId);
      } else {
        next.add(skillId);
      }
      return next;
    });
  };

  const handleProjectClick = useCallback((projectId: string) => {
    scrollToSection('projects');
    // Small delay lets the scroll start before the highlight fires
    setTimeout(() => emitProjectHighlight(projectId), 300);
  }, []);

  // Listen for skill-highlight events from the Projects section
  useEffect(() => {
    const handler = (e: Event) => {
      const { skillId } = (e as CustomEvent<SkillHighlightDetail>).detail;
      setHighlightedSkillId(skillId);
      // Clear the highlight after 3 s so it doesn't stay forever
      setTimeout(() => setHighlightedSkillId(null), 3000);
    };
    window.addEventListener(SKILL_HIGHLIGHT_EVENT, handler);
    return () => window.removeEventListener(SKILL_HIGHLIGHT_EVENT, handler);
  }, []);

  return (
    <Card className="elegant-card border-white/10 overflow-hidden">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="w-8 h-8 rounded-lg elegant-card flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </CardTitle>
            <p className="text-muted-foreground mt-2 text-base">
              {skills.length} core technologies with{' '}
              {Math.round(
                skills.reduce((acc, skill) => acc + skill.yearsOfExperience, 0) /
                  skills.length
              )}{' '}
              years average experience
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Button
            variant={selectedCategory === null ? 'default' : 'ghost'}
            onClick={() => setSelectedCategory(null)}
            className={`elegant-card border-white/10 transition-all duration-200 ${
              selectedCategory === null
                ? 'bg-foreground/10 text-foreground'
                : 'hover:bg-white/5'
            }`}
          >
            All Skills
            <Badge variant="secondary" className="ml-2 bg-white/10 text-xs">
              {skills.length}
            </Badge>
          </Button>
          {Object.entries(skillCategories).map(([key, category]) => {
            const count = skills.filter((s) => s.category === key).length;
            const isSelected = selectedCategory === key;
            return (
              <Button
                key={key}
                variant="ghost"
                onClick={() => setSelectedCategory(key)}
                className={`elegant-card border-white/10 transition-all duration-200 ${
                  isSelected
                    ? 'bg-foreground/10 text-foreground'
                    : 'hover:bg-white/5'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-white/10 text-xs">
                  {count}
                </Badge>
              </Button>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Skills Grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredSkills.map((skill, index) => {
            const category =
              skillCategories[skill.category as keyof typeof skillCategories];
            const isHovered = hoveredSkill === skill.id;
            const isHighlighted = highlightedSkillId === skill.id;
            const connectedSkills = getConnectedSkills(skill.id);
            const expertiseLevel = getExpertiseLevel(skill.level);
            const relatedProjects = getProjectsForSkill(skill.id);
            const projectsExpanded = expandedProjects.has(skill.id);

            return (
              <div
                key={skill.id}
                id={`skill-${skill.id}`}
                className={`group elegant-card min-w-0 rounded-xl border p-5 transition-all duration-300 hover:bg-white/5 sm:p-6 ${
                  isHighlighted
                    ? 'border-primary/60 ring-2 ring-primary/40 bg-primary/5 scale-[1.01]'
                    : 'border-white/5'
                } ${isHovered ? 'ring-1 ring-white/20 bg-white/5' : ''} cursor-pointer`}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Skill Header */}
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl elegant-card transition-colors duration-200 group-hover:bg-white/10">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1 break-words text-lg font-semibold">
                        {skill.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <Badge
                          variant="outline"
                          className="elegant-card border-white/20 text-xs font-medium"
                        >
                          {expertiseLevel}
                        </Badge>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {skill.yearsOfExperience}+ years
                        </span>
                        {relatedProjects.length > 0 && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <FolderOpen className="w-3 h-3" />
                            {relatedProjects.length} project
                            {relatedProjects.length !== 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      isHovered ? 'rotate-90' : ''
                    } hidden sm:block`}
                  />
                </div>

                {/* Proficiency Level */}
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="shrink-0 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.level} className="h-2 bg-white/10" />
                    <div
                      className="absolute top-0 left-0 h-2 rounded-full bg-foreground transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 break-words text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>

                {/* Connected Skills */}
                {connectedSkills.length > 0 && (
                  <div
                    className={`transition-all duration-300 mb-3 ${isHovered ? 'opacity-100' : 'opacity-70'}`}
                  >
                    <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wide">
                      Integrates with
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {connectedSkills.map((connSkill) => (
                        <Badge
                          key={connSkill!.id}
                          variant="secondary"
                          className="elegant-card border-white/10 text-xs hover:bg-white/10 transition-colors"
                        >
                          {connSkill!.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                  <div className="border-t border-white/5 pt-3 mt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProjectExpand(skill.id);
                      }}
                      className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide hover:text-foreground transition-colors w-full"
                    >
                      <FolderOpen className="w-3.5 h-3.5" />
                      Used in {relatedProjects.length} project
                      {relatedProjects.length !== 1 ? 's' : ''}
                      <ChevronRight
                        className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                          projectsExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {projectsExpanded && (
                      <div className="mt-2 flex flex-col gap-1.5">
                        {relatedProjects.map((project) => (
                          <button
                            key={project.id}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectClick(project.id);
                            }}
                            className="text-left text-xs px-3 py-1.5 rounded-lg elegant-card border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-muted-foreground hover:text-foreground"
                          >
                            <span className="font-medium">{project.title}</span>
                            <span className="block text-[10px] opacity-60 mt-0.5">
                              {project.company}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Category Summary */}
        {selectedCategory && (
          <div className="elegant-card rounded-xl p-8 border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const category =
                  skillCategories[selectedCategory as keyof typeof skillCategories];
                return (
                  <>
                    <div className="w-16 h-16 rounded-xl elegant-card flex items-center justify-center">
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {category.label}
                        </span>
                      </h3>
                      <p className="text-muted-foreground">
                        {filteredSkills.length} technologies in this domain
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {Math.round(
                      filteredSkills.reduce((acc, skill) => acc + skill.level, 0) /
                        filteredSkills.length
                    )}
                    %
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Average Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {filteredSkills.filter((s) => s.level >= 90).length}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {Math.round(
                      filteredSkills.reduce(
                        (acc, skill) => acc + skill.yearsOfExperience,
                        0
                      ) / filteredSkills.length
                    )}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Avg. Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {new Set(filteredSkills.flatMap((s) => s.connections)).size}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Connected Technologies</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
