import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "GraphQL", level: 75 },
    ],
  },
]

const technologies = [
  { name: "React", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", color: "from-blue-600 to-blue-800" },
  { name: "Node.js", color: "from-green-500 to-green-700" },
  { name: "Python", color: "from-yellow-400 to-yellow-600" },
  { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
  { name: "MongoDB", color: "from-green-400 to-green-600" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
  { name: "Docker", color: "from-blue-400 to-blue-600" },
  { name: "AWS", color: "from-orange-400 to-orange-600" },
  { name: "GraphQL", color: "from-pink-500 to-pink-700" },
  { name: "REST APIs", color: "from-purple-500 to-purple-700" },
  { name: "Git", color: "from-red-500 to-red-700" },
  { name: "Jest", color: "from-red-400 to-red-600" },
  { name: "Cypress", color: "from-gray-600 to-gray-800" },
  { name: "Figma", color: "from-purple-400 to-purple-600" },
  { name: "Vercel", color: "from-black to-gray-800" },
  { name: "Supabase", color: "from-green-400 to-green-600" },
]

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
            A comprehensive skill set covering the full spectrum of modern web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="elegant-card border-white/10 group">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <CardTitle className="text-gradient">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gradient font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2 bg-gray-200" />
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
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
          <h3 className="text-2xl font-bold mb-8 text-gradient">Technologies I Work With</h3>
          <div className="elegant-card rounded-3xl p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-medium shadow-lg cursor-pointer`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
