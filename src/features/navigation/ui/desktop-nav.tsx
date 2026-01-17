'use client';

import { useUnit } from 'effector-react';

import { $activeSection } from '../model/navigation';
import { cn } from '~/shared/lib/utils';

/**
 * Desktop navigation component
 */
interface DesktopNavProps {
  items: { name: string; href: string }[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const activeSection = useUnit($activeSection);

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {items.map((item) => {
        const isActive = activeSection === item.href.replace('#', '');

        return (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive && 'text-primary'
            )}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}
