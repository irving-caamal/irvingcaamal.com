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
  return (
    <header className="sticky top-0 z-50 w-full elegant-card border-b border-white/10 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center space-x-2">
          <ProfileAvatar size="sm" className="elegant-card p-1" />
          <span className="text-2xl font-bold text-gradient">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <DesktopNav items={navItems} />

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-2 mr-2 text-sm font-medium">
            <a href="/en" className="hover:text-primary transition-colors">
              EN
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a href="/es" className="hover:text-primary transition-colors">
              ES
            </a>
          </div>
          <ThemeToggle />
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
