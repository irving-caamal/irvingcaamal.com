"use client"

import { useUnit } from "effector-react"
import { Button } from "~/shared/ui/button"
import { Menu, X } from "lucide-react"
import { navigationConfig } from "~/shared/config/site"
import { $isMobileMenuOpen, mobileMenuToggled, mobileMenuClosed } from "../model/navigation"

/**
 * Mobile navigation menu component
 */
export function MobileMenu() {
  const [isOpen, toggleMenu, closeMenu] = useUnit([$isMobileMenuOpen, mobileMenuToggled, mobileMenuClosed])

  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 border-t border-white/10 elegant-card">
          <nav className="flex flex-col space-y-4 p-4">
            {navigationConfig.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
