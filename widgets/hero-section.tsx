import { Button } from '@/components/ui/button';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '~/shared/config/site';

export function HeroSection() {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-mesh rounded-full opacity-20 blur-3xl floating"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-mesh-alt rounded-full opacity-20 blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-mesh rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Profile image with glass effect */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full morphism-card p-1 glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {getInitials(siteConfig.name)}
                </span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full morphism-card text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {siteConfig.tagline}
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="text-gradient block mt-2">
                {siteConfig.name}
              </span>
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="glow-hover bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="morphism-card border-white/20 hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href={siteConfig.resumeUrl} target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="morphism-card glow-hover"
              asChild
            >
              <Link href={siteConfig.social.github} target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="morphism-card glow-hover"
              asChild
            >
              <Link href={siteConfig.social.linkedin} target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="morphism-card glow-hover"
              asChild
            >
              <Link href={`mailto:${siteConfig.email}`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          <div className="absolute bottom-8 animate-bounce">
            <div className="w-12 h-12 rounded-full morphism-card flex items-center justify-center">
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
