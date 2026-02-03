import { createStore } from 'effector';
import { siteConfig } from '~/shared/config/site';
import { experiences } from '~/shared/config/experiences';
import { getInitials } from '~/shared/lib/utils';

/**
 * Profile entity model
 * Contains user profile information and computed values
 */

export interface ProfileData {
  name: string;
  title: string;
  description: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  initials: string;
  social: typeof siteConfig.social;
  experience: typeof siteConfig.experience;
  resumeUrl: string;
  currentCompany: string;
  currentRole: string;
  education: typeof siteConfig.education;
  about: typeof siteConfig.about;
}

// Profile store with computed initials
export const $profile = createStore<ProfileData>({
  name: siteConfig.name,
  title: siteConfig.title,
  description: siteConfig.description,
  tagline: siteConfig.tagline,
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.location,
  initials: getInitials(siteConfig.name),
  social: siteConfig.social,
  experience: {
    ...siteConfig.experience,
    projectsCompleted: `${experiences.length}+`,
  },
  resumeUrl: siteConfig.resumeUrl,
  currentCompany: siteConfig.currentCompany,
  currentRole: siteConfig.currentRole,
  education: siteConfig.education,
  about: siteConfig.about,
});
