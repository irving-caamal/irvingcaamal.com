import { Badge } from '~/shared/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/shared/ui/card';
import { CalendarDays, MapPin, GraduationCap } from 'lucide-react';
import { siteConfig } from '~/shared/config/site';

import { experiences } from '~/shared/config/experiences';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <Badge variant="secondary" className="elegant-card border-white/20">
            <CalendarDays className="w-3 h-3 mr-1" />
            Professional Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-gradient">8+ Years</span> of Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            My career progression from junior developer to senior engineer,
            building scalable solutions across various industries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="elegant-card border-white/10">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-gradient">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge
                          variant="outline"
                          className="elegant-card border-white/20 text-xs"
                        >
                          {exp.period}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="text-sm space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2"
                            >
                              <span className="text-gradient mt-1 font-bold">
                                •
                              </span>
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="elegant-card border-white/10 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Education
              </h3>
              <Card className="elegant-card border-white/10">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl elegant-card flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gradient">
                        {siteConfig.education.degree}
                      </CardTitle>
                      <CardDescription className="font-semibold mt-1">
                        {siteConfig.education.school}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <CalendarDays className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          February 2012 - June{' '}
                          {siteConfig.education.graduationYear}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {siteConfig.education.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
