'use client';

import { useState, useEffect } from 'react';
import { Home, User, Zap, FolderOpen, Briefcase, Mail } from 'lucide-react';
import { cn } from '~/shared/lib/utils';

const SECTION_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  home: Home,
  about: User,
  skills: Zap,
  projects: FolderOpen,
  experience: Briefcase,
  contact: Mail,
};

interface MobileNavBarProps {
  items: { name: string; href: string }[];
}

/**
 * Mobile bottom tab bar — replaces the generic drawer.
 * Fixed to the bottom of the screen with section icons and
 * an active top-indicator that tracks the current scroll position.
 */
export function MobileNavBar({ items }: MobileNavBarProps) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = items.map((i) => i.href.replace('#', ''));

    const onScroll = () => {
      let current = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }
      }

      // Activate last section when at page bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        current = sections[sections.length - 1];
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 elegant-card border-t border-white/10 backdrop-blur-xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Main navigation"
    >
      <div className="flex items-stretch justify-around h-16">
        {items.map((item) => {
          const section = item.href.replace('#', '');
          const Icon = SECTION_ICONS[section] ?? Home;
          const isActive = activeSection === section;

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1 flex-1',
                'transition-all duration-200 active:scale-95',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {/* Top active bar */}
              <span
                className={cn(
                  'absolute top-0 inset-x-3 h-[2px] rounded-b-full bg-primary transition-all duration-300',
                  isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                )}
              />

              <Icon
                className={cn(
                  'transition-all duration-200',
                  isActive ? 'h-[22px] w-[22px]' : 'h-5 w-5'
                )}
              />

              <span
                className={cn(
                  'text-[10px] font-medium leading-none transition-all duration-200',
                  isActive ? 'opacity-100' : 'opacity-50'
                )}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
