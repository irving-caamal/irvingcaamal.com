import { createEvent, createStore } from 'effector';

/**
 * Navigation feature model
 * Manages mobile menu state and active section tracking
 */

// Events
export const mobileMenuOpenChanged = createEvent<boolean>();
export const mobileMenuClosed = createEvent();
export const activeSectionChanged = createEvent<string>();

// Stores
export const $isMobileMenuOpen = createStore(false)
  .on(mobileMenuOpenChanged, (_, isOpen) => isOpen)
  .on(mobileMenuClosed, () => false);

export const $activeSection = createStore<string>('home').on(
  activeSectionChanged,
  (_, section) => section
);
