'use client';

import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { Button } from '~/shared/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/shared/ui/sheet';
import {
  ArrowUpRight,
  BrainCircuit,
  FolderKanban,
  LayoutGrid,
  Mail,
  UserRound,
  BriefcaseBusiness,
  House,
} from 'lucide-react';

import {
  $activeSection,
  $isMobileMenuOpen,
  activeSectionChanged,
  mobileMenuOpenChanged,
  mobileMenuClosed,
} from '../model/navigation';
import { cn } from '~/shared/lib/utils';

/**
 * Mobile navigation menu component
 */
interface MobileMenuProps {
  items: { name: string; href: string }[];
  featuredItems?: { name: string; href: string }[];
  openLabel?: string;
  menuTitle?: string;
  menuDescription?: string;
}

export function MobileMenu({
  items,
  featuredItems = [],
  openLabel = 'Open',
  menuTitle = 'More sections',
  menuDescription = 'Navigate the full portfolio.',
}: MobileMenuProps) {
  const [isOpen, activeSection, setMenuOpen, closeMenu, setActiveSection] = useUnit([
    $isMobileMenuOpen,
    $activeSection,
    mobileMenuOpenChanged,
    mobileMenuClosed,
    activeSectionChanged,
  ]);
  const quickItems = featuredItems.length > 0 ? featuredItems : items.slice(0, 3);

  useEffect(() => {
    const getSectionId = (href: string) => href.replace('#', '');

    const updateCurrentSection = () => {
      let current = '';

      for (const item of items) {
        const sectionId = getSectionId(item.href);
        const element = document.getElementById(sectionId);

        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = sectionId;
          break;
        }
      }

      if (
        !current &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80
      ) {
        current = getSectionId(items[items.length - 1]?.href ?? '#home');
      }

      if (!current && window.location.hash) {
        current = window.location.hash.replace('#', '');
      }

      if (current) {
        setActiveSection(current);
      }
    };

    updateCurrentSection();
    window.addEventListener('scroll', updateCurrentSection, { passive: true });
    window.addEventListener('hashchange', updateCurrentSection);

    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
      window.removeEventListener('hashchange', updateCurrentSection);
    };
  }, [items, setActiveSection]);

  const handleLinkClick = () => {
    closeMenu();
  };

  const handleQuickLinkClick = (href: string) => {
    setActiveSection(href.replace('#', ''));
  };

  const getTabIcon = (href: string) => {
    switch (href) {
      case '#home':
        return House;
      case '#about':
        return UserRound;
      case '#skills':
        return BrainCircuit;
      case '#projects':
        return FolderKanban;
      case '#experience':
        return BriefcaseBusiness;
      case '#contact':
        return Mail;
      default:
        return LayoutGrid;
    }
  };

  const isOpenActive =
    activeSection.length > 0 &&
    !quickItems.some((item) => item.href.replace('#', '') === activeSection);

  return (
    <Sheet open={isOpen} onOpenChange={setMenuOpen}>
      <nav
        className="fixed inset-x-0 bottom-0 z-50 md:hidden"
        aria-label="Mobile quick navigation"
        data-testid="mobile-quick-nav"
      >
        <div className="border-t border-white/10 bg-background/92 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.7rem)] shadow-[0_-18px_45px_-30px_rgba(0,0,0,0.82)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/80">
          <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-white/10" />
          <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
            {quickItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const Icon = getTabIcon(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative flex min-h-14 flex-col items-center justify-center gap-1 overflow-hidden rounded-[1.15rem] border px-2 text-center transition-all duration-200',
                    isActive
                      ? 'border-primary/25 bg-primary/12 text-primary shadow-[0_10px_26px_-18px_hsl(var(--primary))]'
                      : 'border-transparent bg-white/[0.04] text-muted-foreground hover:border-white/15 hover:bg-white/[0.1] hover:text-foreground'
                  )}
                  onClick={() => handleQuickLinkClick(item.href)}
                >
                  <span
                    className={cn(
                      'absolute inset-x-5 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/65 to-transparent transition-opacity',
                      isActive ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  <Icon className={cn('h-4 w-4', isActive ? 'scale-105' : '')} />
                  <span className="text-[0.62rem] font-semibold uppercase leading-none tracking-[0.18em]">
                    {item.name}
                  </span>
                </a>
              );
            })}

            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'relative min-h-14 flex-col gap-1 rounded-[1.15rem] border px-2 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.18em] transition-all duration-200',
                  isOpen || isOpenActive
                    ? 'border-primary/25 bg-primary text-primary-foreground shadow-[0_12px_28px_-18px_hsl(var(--primary))]'
                    : 'border-white/15 bg-white/[0.08] text-foreground hover:border-white/25 hover:bg-white/[0.16] hover:text-primary'
                )}
                aria-label="Open full navigation"
                data-testid="mobile-menu-button"
              >
                <LayoutGrid className="h-4 w-4" />
                {openLabel}
              </Button>
            </SheetTrigger>
          </div>
        </div>
      </nav>

      <SheetContent side="right" className="border-white/10 bg-background/95">
        <div className="mt-8 space-y-6" data-testid="mobile-menu">
          <div className="space-y-2 border-b border-white/10 pb-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/80">
              {menuTitle}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {menuDescription}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {items.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base font-medium transition-all duration-200',
                  'hover:border-white/20 hover:bg-white/[0.08] hover:text-primary'
                )}
                onClick={handleLinkClick}
              >
                <span>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1} {item.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
