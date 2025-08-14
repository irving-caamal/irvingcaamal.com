"use client"

import { useUnit } from "effector-react"
import { Button } from "~/shared/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/shared/ui/sheet"
import { Menu } from "lucide-react"
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
    <Sheet open={isOpen} onOpenChange={toggleMenu}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4 mt-8">
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
      </SheetContent>
    </Sheet>
  )
}
