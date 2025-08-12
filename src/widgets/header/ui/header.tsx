"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/features/theme-toggle/ui/theme-toggle"
import { siteConfig } from "@/shared/lib/config"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <header className="sticky top-0 z-50 w-full elegant-card border-b border-white/10 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-sm">{getInitials(siteConfig.name)}</span>
          </div>
          <span className="text-2xl font-bold text-gradient">{siteConfig.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 elegant-card">
          <nav className="flex flex-col space-y-4 p-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
