"use client"

import { useUnit } from "effector-react"
import { navigationConfig } from "~/shared/config/site"
import { $activeSection } from "../model/navigation"
import { cn } from "~/shared/lib/utils"

/**
 * Desktop navigation component
 */
export function DesktopNav() {
  const activeSection = useUnit($activeSection)

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navigationConfig.map((item) => {
        const isActive = activeSection === item.href.replace("#", "")

        return (
          <a
            key={item.name}
            href={item.href}
            className={cn("text-sm font-medium transition-colors hover:text-primary", isActive && "text-primary")}
          >
            {item.name}
          </a>
        )
      })}
    </nav>
  )
}
