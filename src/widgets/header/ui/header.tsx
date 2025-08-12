"use client"
import { siteConfig } from "~/shared/config/site"
import { ProfileAvatar } from "~/entities/profile/ui/profile-avatar"
import { ThemeToggle } from "~/features/theme/ui/theme-toggle"
import { DesktopNav } from "~/features/navigation/ui/desktop-nav"
import { MobileMenu } from "~/features/navigation/ui/mobile-menu"

/**
 * Main header widget
 * Contains site branding, navigation, and theme toggle
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full elegant-card border-b border-white/10 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center space-x-2">
          <ProfileAvatar size="sm" className="elegant-card p-1" />
          <span className="text-2xl font-bold text-gradient">{siteConfig.name}</span>
        </a>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
