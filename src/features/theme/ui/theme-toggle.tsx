"use client"

import { useUnit } from "effector-react"
import { Button } from "~/shared/ui/button"
import { Moon, Sun } from "lucide-react"
import { themeToggled } from "../model/theme"

/**
 * Theme toggle component
 * Provides UI for switching between light and dark themes
 */
export function ThemeToggle() {
  const toggleTheme = useUnit(themeToggled)

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
