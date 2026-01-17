import { createEvent, createStore } from 'effector';

/**
 * Navigation feature model
 * Manages mobile menu state and active section tracking
 */

// Events
export const mobileMenuToggled = createEvent();
export const mobileMenuClosed = createEvent();
export const activeSectionChanged = createEvent<string>();

// Stores
export const $isMobileMenuOpen = createStore(false)
  .on(mobileMenuToggled, (isOpen) => !isOpen)
  .on(mobileMenuClosed, () => false);

export const $activeSection = createStore<string>('home').on(
  activeSectionChanged,
  (_, section) => section
);
