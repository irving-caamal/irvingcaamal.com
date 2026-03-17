'use client';

import { useUnit } from 'effector-react';
import { useState, useEffect } from 'react';
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
const ROLES = [
  'Software Engineer',
  'Backend Engineer',
  'Full Stack Developer',
  'Tech Lead',
];

function useTypewriter(words: string[], typeSpeed = 80, deleteSpeed = 45, pauseMs = 2200) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const id = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        const next = text.slice(0, -1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

interface HeroSectionProps {
  lang?: 'en' | 'es';
}

export function HeroSection({ lang = 'en' }: HeroSectionProps) {
  void lang; // accepted by parent for i18n routing, not used in this component yet
  const profile = useUnit($profile);
  const typedRole = useTypewriter(ROLES);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Aurora mesh background */}
      <div className="hero-mesh" aria-hidden="true" />

      {/* Animated orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center space-y-10 text-center">
          {/* Profile Avatar */}
          <div className="relative opacity-0 animate-fade-in animate-float">
            <ProfileAvatar size="lg" className="elegant-card glow-cyan p-1" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 w-full">
            {/* Status Badge */}
            <div className="opacity-0 animate-fade-in-delayed">
              <Badge
                variant="secondary"
                className="elegant-card border-white/20 px-4 py-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>{profile.tagline}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="opacity-0 animate-fade-in-delayed-2">
              {/* Name — identity label */}
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
                {profile.name}
              </p>

              {/* Role — the visual hero */}
              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-gradient">{typedRole}</span>
                <span className="type-cursor" aria-hidden="true" />
              </h1>
            </div>

            {/* Description — one tight line */}
            <p className="opacity-0 animate-fade-in-delayed-3 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              8+ years building high-quality, well-tested applications
              across MERN &amp; MEVN stacks.
            </p>

            {/* Metrics */}
            <div className="opacity-0 animate-fade-in-delayed-3">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {metrics.map((metric, index) => (
                  <div key={index} className="elegant-card px-5 py-3">
                    <span className="font-semibold">{metric.value}</span>
                    <span className="text-muted-foreground ml-2">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-delayed-4">
            <Button size="lg" className="btn-elegant px-8" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="elegant-card px-8 bg-transparent"
              asChild
            >
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 opacity-0 animate-fade-in-delayed-5">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="elegant-card glow-cyan w-10 h-10"
                asChild
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8">
            <div className="w-10 h-10 elegant-card flex items-center justify-center cursor-pointer">
              <ArrowDown className="h-4 w-4 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
