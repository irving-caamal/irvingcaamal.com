'use client';

import type { ReactNode } from 'react';

interface EffectorProviderProps {
  children: ReactNode;
}

/**
 * Effector provider component
 * Initializes Effector stores and effects
 */
export function EffectorProvider({ children }: EffectorProviderProps) {
  // Initialize theme on mount
  if (typeof window !== 'undefined') {
    import('~/features/theme/model/theme').then(
      ({ loadThemeFx, themeInitialized }) => {
        loadThemeFx().then(themeInitialized);
      }
    );
  }

  return <>{children}</>;
}
