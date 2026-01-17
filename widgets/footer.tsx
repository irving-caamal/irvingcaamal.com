import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '~/shared/config/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 elegant-card">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024{' '}
              <span className="text-gradient font-semibold">
                {siteConfig.name}
              </span>
              . All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="elegant-card"
              asChild
            >
              <Link href={siteConfig.social.github} target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="elegant-card"
              asChild
            >
              <Link href={siteConfig.social.linkedin} target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="elegant-card"
              asChild
            >
              <Link href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
