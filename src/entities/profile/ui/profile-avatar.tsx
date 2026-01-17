'use client';

import { useUnit } from 'effector-react';
import { $profile } from '../model/profile';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Profile avatar component displaying user initials
 */
export function ProfileAvatar({
  size = 'md',
  className = '',
}: ProfileAvatarProps) {
  const profile = useUnit($profile);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-32 h-32 text-4xl',
  };

  return (
    <div
      className={`rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <span className="font-bold text-background">{profile.initials}</span>
    </div>
  );
}
