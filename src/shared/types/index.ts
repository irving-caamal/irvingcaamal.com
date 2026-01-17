/**
 * Common types used across the application
 */

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  achievements: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  description: string;
  connections: string[];
  yearsOfExperience: number;
}

export type Theme = 'light' | 'dark';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
