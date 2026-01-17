'use client';

import { useUnit } from 'effector-react';
import { Github, Linkedin, Mail, BookOpen, Heart } from 'lucide-react';

import { Button } from '~/shared/ui/button';
import { $profile } from '~/entities/profile/model/profile';

/**
 * Footer widget
 * Contains copyright and social links
 */
import { useTranslations } from '~/shared/i18n/utils';
import { navigationConfig } from '~/shared/config/site';

interface FooterProps {
  lang?: 'en' | 'es';
}

export function Footer({ lang = 'en' }: FooterProps) {
  const profile = useUnit($profile);
  const t = useTranslations(lang);

  return (
    <footer className="border-t border-white/10 elegant-card bg-background/50 backdrop-blur-md">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Copyright */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-gradient">{profile.name}</h3>
            <p className="text-muted-foreground max-w-sm">{profile.tagline}</p>
            <p className="text-sm text-muted-foreground pt-4">
              © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navigationConfig.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect & Tech Stack */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="elegant-card w-9 h-9"
                asChild
              >
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="elegant-card w-9 h-9"
                asChild
              >
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="elegant-card w-9 h-9"
                asChild
              >
                <a
                  href={profile.social.medium}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="sr-only">Medium</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="elegant-card w-9 h-9"
                asChild
              >
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-xs text-muted-foreground flex items-center">
                Built with{' '}
                <Heart className="w-3 h-3 mx-1 text-red-500 fill-red-500" />{' '}
                using
              </p>
              <p className="text-xs font-semibold text-muted-foreground mt-1">
                Astro & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
