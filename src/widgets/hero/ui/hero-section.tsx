'use client';

import { useUnit } from 'effector-react';
import { Button } from '~/shared/ui/button';
import { Badge } from '~/shared/ui/badge';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  BookOpen,
} from 'lucide-react';
import { ProfileAvatar } from '~/entities/profile/ui/profile-avatar';
import { $profile } from '~/entities/profile/model/profile';

/**
 * Hero section widget
 * Main landing section with profile information and call-to-actions
 */
import { useTranslations } from '~/shared/i18n/utils';

interface HeroSectionProps {
  lang?: 'en' | 'es';
}

export function HeroSection({ lang = 'en' }: HeroSectionProps) {
  const profile = useUnit($profile);
  const t = useTranslations(lang);

  const socialLinks = [
    { icon: Github, href: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: BookOpen, href: profile.social.medium, label: 'Medium' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  const metrics = [
    { value: '99.9%', label: 'Uptime' },
    { value: '<100ms', label: 'Response' },
    { value: 'A+', label: 'Performance' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Profile Avatar */}
          <div className="relative opacity-0 animate-fade-in">
            <ProfileAvatar size="lg" className="elegant-card p-1" />
          </div>

          {/* Main Content */}
          <div className="space-y-8 w-full">
            {/* Status Badge */}
            <div className="opacity-0 animate-fade-in-delayed">
              <Badge
                variant="secondary"
                className="elegant-card border-white/20 px-6 py-3"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>{profile.tagline}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 opacity-0 animate-fade-in-delayed-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="block mb-2">{t('hero.greeting')}</span>
                <span className="text-gradient block">{profile.name}</span>
              </h1>

              {/* Description */}
              <div className="relative max-w-4xl mx-auto">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed space-y-3">
                  <span className="block mb-4">
                    <span className="font-semibold">
                      8+ years of experience
                    </span>{' '}
                    developing sophisticated software solutions across B2B and
                    B2C industries.
                  </span>
                  <span className="block mb-4">
                    Specialized in architecting{' '}
                    <span className="font-semibold">
                      high-quality, well-tested, and resilient applications
                    </span>{' '}
                    that deliver exceptional business value.
                  </span>
                  <span className="block mb-4">
                    Expert in{' '}
                    <span className="font-semibold">MERN and MEVN stacks</span>{' '}
                    with advanced TypeScript proficiency across React.js,
                    Vue.js, Next.js, and Nuxt.js ecosystems.
                  </span>
                  <span className="block">
                    Committed to{' '}
                    <span className="font-semibold">
                      continuous learning and professional excellence
                    </span>
                    .
                  </span>
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="opacity-0 animate-fade-in-delayed-3">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="elegant-card px-6 py-4 rounded-full"
                  >
                    <span className="font-semibold text-base">
                      {metric.value}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delayed-4">
            <Button size="lg" className="btn-elegant px-8 py-4" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="elegant-card px-8 py-4 bg-transparent"
              asChild
            >
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 opacity-0 animate-fade-in-delayed-5">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="elegant-card w-12 h-12"
                asChild
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8">
            <div className="w-12 h-12 rounded-full elegant-card flex items-center justify-center cursor-pointer">
              <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
