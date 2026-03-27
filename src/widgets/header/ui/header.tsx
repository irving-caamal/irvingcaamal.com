'use client';
import { siteConfig } from '~/shared/config/site';
import { ProfileAvatar } from '~/entities/profile/ui/profile-avatar';
import { ThemeToggle } from '~/features/theme/ui/theme-toggle';
import { DesktopNav } from '~/features/navigation/ui/desktop-nav';
import { MobileMenu } from '~/features/navigation/ui/mobile-menu';

/**
 * Main header widget
 * Contains site branding, navigation, and theme toggle
 */
import { useTranslations } from '~/shared/i18n/utils';

interface HeaderProps {
  lang?: 'en' | 'es';
}

export function Header({ lang = 'en' }: HeaderProps) {
  const t = useTranslations(lang);
  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ];
  const mobileFeaturedItems = [
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.about'), href: '#about' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full elegant-card border-b border-white/10 backdrop-blur-xl">
      <div className="container py-3 md:py-0">
        {/* Brand */}
        <div className="flex min-h-16 items-center justify-between gap-3 md:gap-4">
          <a href="/" data-testid="logo-link" className="flex items-center space-x-2">
            <ProfileAvatar size="sm" className="elegant-card p-1" />
            <span className="text-xl font-bold text-gradient sm:text-2xl">
              {siteConfig.shortName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <DesktopNav items={navItems} />

          {/* Actions */}
          <div className="flex items-center space-x-1.5 md:space-x-2">
            <div className="mr-1 flex items-center gap-1.5 text-xs font-medium sm:mr-2 sm:gap-2 sm:text-sm">
              <a href="/en" className="hover:text-primary transition-colors">
                EN
              </a>
              <span className="text-muted-foreground/30">|</span>
              <a href="/es" className="hover:text-primary transition-colors">
                ES
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <MobileMenu
            items={navItems}
            featuredItems={mobileFeaturedItems}
            openLabel={t('nav.open')}
            menuTitle={t('nav.moreTitle')}
            menuDescription={t('nav.moreDescription')}
          />
        </div>
      </div>
    </header>
  );
}
