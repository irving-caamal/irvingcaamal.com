import { createEvent, createStore, createEffect } from "effector"
import type { Theme } from "~/shared/types"

/**
 * Theme feature model using Effector
 * Manages application theme state and persistence
 */

// Events
export const themeToggled = createEvent()
export const themeSet = createEvent<Theme>()
export const themeInitialized = createEvent<Theme>()

// Effects
export const saveThemeFx = createEffect<Theme, void>((theme: Theme) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }
})

export const loadThemeFx = createEffect<void, Theme>(() => {
  if (typeof window === "undefined") return "light"

  const savedTheme = localStorage.getItem("theme") as Theme | null
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  return savedTheme || (prefersDark ? "dark" : "light")
})

// Store
export const $theme = createStore<Theme>("light")
  .on(themeSet, (_, theme) => theme)
  .on(themeInitialized, (_, theme) => theme)
  .on(themeToggled, (currentTheme) => (currentTheme === "light" ? "dark" : "light"))

// Reactions
$theme.watch(saveThemeFx)

// Initialize theme on app start
loadThemeFx().then(themeInitialized)
