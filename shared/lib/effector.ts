import { createStore, createEvent } from 'effector'

// Theme store
export const themeChanged = createEvent<'light' | 'dark' | 'system'>()
export const $theme = createStore<'light' | 'dark' | 'system'>('system')
  .on(themeChanged, (_, theme) => theme)

// Navigation store
export const navigationToggled = createEvent()
export const $isNavigationOpen = createStore(false)
  .on(navigationToggled, (state) => !state)

// Contact form store
export const contactFormSubmitted = createEvent<{
  name: string
  email: string
  subject: string
  message: string
}>()

export const $contactFormStatus = createStore<'idle' | 'loading' | 'success' | 'error'>('idle')
  .on(contactFormSubmitted, () => 'loading')
