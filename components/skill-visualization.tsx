'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Code, Database, Settings, Globe, ChevronRight, Layers, TestTube, Cloud } from 'lucide-react'

interface Skill {
  id: string
  name: string
  level: number
  category: string
  description: string
  connections: string[]
  yearsOfExperience: number
}

const skillCategories = {
  frontend: { icon: Code, label: 'Frontend & Frameworks' },
  backend: { icon: Database, label: 'Backend & APIs' },
  testing: { icon: TestTube, label: 'Testing & QA' },
  devops: { icon: Cloud, label: 'DevOps & Deployment' },
  architecture: { icon: Layers, label: 'Architecture & Tooling' }
}

const skills: Skill[] = [
  // Frontend & Frameworks
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    level: 95, 
    category: 'frontend',
    description: 'Advanced ES6+, async programming, and modern JavaScript patterns',
    connections: ['typescript', 'react', 'vue', 'nodejs'],
    yearsOfExperience: 8
  },
  { 
    id: 'typescript', 
    name: 'TypeScript', 
    level: 92, 
    category: 'frontend',
    description: 'Advanced type systems, generics, and large-scale application architecture',
    connections: ['javascript', 'react', 'vue', 'nodejs'],
    yearsOfExperience: 6
  },
  { 
    id: 'react', 
    name: 'React.js', 
    level: 95, 
    category: 'frontend',
    description: 'Advanced component architecture, hooks, performance optimization, and state management',
    connections: ['nextjs', 'typescript', 'testing-library'],
    yearsOfExperience: 7
  },
  { 
    id: 'nextjs', 
    name: 'Next.js', 
    level: 90, 
    category: 'frontend',
    description: 'Full-stack applications with SSR, SSG, Micro-Frontend architecture, and Webpack Module Federation',
    connections: ['react', 'typescript', 'vercel'],
    yearsOfExperience: 5
  },
  { 
    id: 'vue', 
    name: 'Vue.js', 
    level: 88, 
    category: 'frontend',
    description: 'Composition API, reactive systems, and enterprise-scale applications',
    connections: ['nuxt', 'typescript'],
    yearsOfExperience: 6
  },
  { 
    id: 'nuxt', 
    name: 'Nuxt.js', 
    level: 85, 
    category: 'frontend',
    description: 'Universal Vue applications with advanced module ecosystem and e-commerce migrations',
    connections: ['vue', 'typescript'],
    yearsOfExperience: 4
  },
  { 
    id: 'tailwind', 
    name: 'TailwindCSS', 
    level: 90, 
    category: 'frontend',
    description: 'Design systems, component libraries, and modern CSS architecture',
    connections: ['react', 'vue'],
    yearsOfExperience: 4
  },

  // Backend & APIs
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    level: 88, 
    category: 'backend',
    description: 'Scalable server architecture, microservices, and performance optimization',
    connections: ['express', 'typescript', 'postgresql'],
    yearsOfExperience: 7
  },
  { 
    id: 'express', 
    name: 'Express.js', 
    level: 85, 
    category: 'backend',
    description: 'RESTful APIs, middleware architecture, and security best practices',
    connections: ['nodejs', 'postgresql'],
    yearsOfExperience: 6
  },
  { 
    id: 'postgresql', 
    name: 'PostgreSQL', 
    level: 82, 
    category: 'backend',
    description: 'Complex queries, indexing strategies, and database optimization',
    connections: ['nodejs', 'express'],
    yearsOfExperience: 5
  },

  // Testing & QA
  { 
    id: 'jest', 
    name: 'Jest', 
    level: 88, 
    category: 'testing',
    description: 'Unit testing, mocking, and test-driven development practices',
    connections: ['testing-library', 'react'],
    yearsOfExperience: 5
  },
  { 
    id: 'testing-library', 
    name: 'Testing Library', 
    level: 85, 
    category: 'testing',
    description: 'Component testing with focus on user behavior and accessibility',
    connections: ['jest', 'react', 'cypress'],
    yearsOfExperience: 4
  },
  { 
    id: 'cypress', 
    name: 'Cypress', 
    level: 80, 
    category: 'testing',
    description: 'End-to-end testing, visual regression testing, and CI/CD integration',
    connections: ['testing-library'],
    yearsOfExperience: 3
  },

  // DevOps & Deployment
  { 
    id: 'git', 
    name: 'Git & GitHub', 
    level: 95, 
    category: 'devops',
    description: 'Advanced workflows, branching strategies, and team collaboration',
    connections: ['github-actions'],
    yearsOfExperience: 8
  },
  { 
    id: 'github-actions', 
    name: 'CI/CD (GitHub Actions)', 
    level: 85, 
    category: 'devops',
    description: 'Automated deployment pipelines, testing workflows, and DevOps practices',
    connections: ['git', 'docker', 'aws'],
    yearsOfExperience: 4
  },
  { 
    id: 'docker', 
    name: 'Docker', 
    level: 78, 
    category: 'devops',
    description: 'Container orchestration, multi-stage builds, and deployment strategies',
    connections: ['nodejs', 'github-actions'],
    yearsOfExperience: 3
  },
  { 
    id: 'aws', 
    name: 'AWS', 
    level: 75, 
    category: 'devops',
    description: 'Cloud infrastructure, serverless architecture, and scalable deployments',
    connections: ['azure', 'docker'],
    yearsOfExperience: 3
  },
  { 
    id: 'azure', 
    name: 'Azure', 
    level: 70, 
    category: 'devops',
    description: 'Microsoft cloud services and Azure fundamentals certification',
    connections: ['aws'],
    yearsOfExperience: 2
  },

  // Architecture & Tooling
  { 
    id: 'design-systems', 
    name: 'Design Systems', 
    level: 90, 
    category: 'architecture',
    description: 'Component libraries, design tokens, and accessibility compliance (A11y)',
    connections: ['react', 'tailwind'],
    yearsOfExperience: 5
  },
  { 
    id: 'micro-frontends', 
    name: 'Micro-Frontends', 
    level: 85, 
    category: 'architecture',
    description: 'Module Federation, scalable frontend architecture, and team autonomy',
    connections: ['nextjs', 'webpack'],
    yearsOfExperience: 3
  },
  { 
    id: 'headless-cms', 
    name: 'Headless CMS', 
    level: 80, 
    category: 'architecture',
    description: 'Contentful, Sanity integration, and content team autonomy solutions',
    connections: ['react', 'nextjs'],
    yearsOfExperience: 3
  }
]

export function SkillVisualization() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  const getConnectedSkills = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId)
    if (!skill) return []
    return skill.connections.map(connId => skills.find(s => s.id === connId)).filter(Boolean)
  }

  const getExpertiseLevel = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Proficient'
    return 'Intermediate'
  }

  return (
    <Card className="morphism-card border-white/10 glow-hover overflow-hidden">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="w-8 h-8 rounded-lg morphism-card flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </CardTitle>
            <p className="text-muted-foreground mt-2 text-base">
              {skills.length} core technologies with {Math.round(skills.reduce((acc, skill) => acc + skill.yearsOfExperience, 0) / skills.length)} years average experience
            </p>
          </div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Button
            variant={selectedCategory === null ? "default" : "ghost"}
            onClick={() => setSelectedCategory(null)}
            className={`morphism-card border-white/10 transition-all duration-200 ${
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
            const count = skills.filter(s => s.category === key).length
            const isSelected = selectedCategory === key
            return (
              <Button
                key={key}
                variant="ghost"
                onClick={() => setSelectedCategory(key)}
                className={`morphism-card border-white/10 transition-all duration-200 ${
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
            )
          })}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Skills Grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredSkills.map((skill, index) => {
            const category = skillCategories[skill.category as keyof typeof skillCategories]
            const isHovered = hoveredSkill === skill.id
            const connectedSkills = getConnectedSkills(skill.id)
            const expertiseLevel = getExpertiseLevel(skill.level)
            
            return (
              <div
                key={skill.id}
                className={`group morphism-card rounded-xl p-6 transition-all duration-300 hover:bg-white/5 cursor-pointer border border-white/5 ${
                  isHovered ? 'ring-1 ring-white/20 bg-white/5' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl morphism-card flex items-center justify-center group-hover:bg-white/10 transition-colors duration-200">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant="outline" 
                          className="morphism-card border-white/20 text-xs font-medium"
                        >
                          {expertiseLevel}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {skill.yearsOfExperience}+ years
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    isHovered ? 'rotate-90' : ''
                  }`} />
                </div>

                {/* Proficiency Level */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-white/10"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-foreground/80 to-foreground/60 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Connected Skills */}
                {connectedSkills.length > 0 && (
                  <div className={`transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-70'
                  }`}>
                    <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wide">
                      Integrates with
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {connectedSkills.map(connSkill => (
                        <Badge 
                          key={connSkill!.id} 
                          variant="secondary" 
                          className="morphism-card border-white/10 text-xs hover:bg-white/10 transition-colors"
                        >
                          {connSkill!.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Category Summary */}
        {selectedCategory && (
          <div className="morphism-card rounded-xl p-8 border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const category = skillCategories[selectedCategory as keyof typeof skillCategories]
                return (
                  <>
                    <div className="w-16 h-16 rounded-xl morphism-card flex items-center justify-center">
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
                )
              })()}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {Math.round(filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length)}%
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Average Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {filteredSkills.filter(s => s.level >= 90).length}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {Math.round(filteredSkills.reduce((acc, skill) => acc + skill.yearsOfExperience, 0) / filteredSkills.length)}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Avg. Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {new Set(filteredSkills.flatMap(s => s.connections)).size}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Connected Technologies</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
