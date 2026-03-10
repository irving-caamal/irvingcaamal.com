import {
  Building2,
  Users,
  BarChart3,
  ShoppingCart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProjectTech {
  /** Display label for the technology */
  name: string;
  /**
   * Optional reference to a skill ID in the skills data.
   * When set, the badge becomes interactive and links to that skill.
   */
  skillId?: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  technologies: ProjectTech[];
  github: string;
  demo: string;
  featured: boolean;
  icon: LucideIcon;
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: 'mgm-design-system',
    title: 'MGM Resorts - Design System Migration',
    company: 'FullStack Labs (Client: MGM Resorts International)',
    description:
      'Led migration from legacy design system to modern architecture using Micro-Frontend patterns with Next.js and Webpack Module Federation. Built 10+ accessible, high-performance components.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'Next.js', skillId: 'nextjs' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Micro-Frontends', skillId: 'micro-frontends' },
      { name: 'Webpack Module Federation', skillId: 'micro-frontends' },
      { name: 'A11y', skillId: 'design-systems' },
      { name: 'Headless CMS', skillId: 'headless-cms' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Building2,
    achievements: [
      'Improved maintainability through modern design system',
      'Built A11y compliant components',
      'Reduced dev cycle times through DX enhancements',
    ],
  },
  {
    id: 'tpt-rebranding',
    title: 'Teachers Pay Teachers - Platform Rebranding',
    company: 'FullStack Labs (Client: Teachers Pay Teachers)',
    description:
      'Led platform-wide rebranding effort, updating design tokens, UI assets, and integrating Headless CMS. Built accessible design system components in partnership with design teams.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'React', skillId: 'react' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Design Systems', skillId: 'design-systems' },
      { name: 'Headless CMS', skillId: 'headless-cms' },
      { name: 'Feature Flags' },
      { name: 'A11y', skillId: 'design-systems' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Users,
    achievements: [
      'Launched rebrand in phases using feature flags',
      'Built fully accessible components from scratch',
      'Resolved production issues proactively',
    ],
  },
  {
    id: 'alertd-dashboard',
    title: 'AlertD - AI-Powered Dashboard',
    company: 'AlertD',
    description:
      'Developed full-stack features for real-time metrics dashboards with advanced prompt engineering for AI-powered user experiences. Built POCs for chat history visualization.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'React', skillId: 'react' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'AI Integration' },
      { name: 'Real-time Data' },
      { name: 'Dashboard UI' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: BarChart3,
    achievements: [
      'Improved product alignment by 30% through POCs',
      'Developed reusable React components',
      'Applied advanced prompt engineering techniques',
    ],
  },
  {
    id: 'ecommerce-migration',
    title: 'E-commerce Platform Migration',
    company: 'Cancun Airport Transportation',
    description:
      'Migrated multiple e-commerce sites to Next.js and Nuxt.js for modern performance. Built CI/CD pipelines and containerized development environments.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'Next.js', skillId: 'nextjs' },
      { name: 'Nuxt.js', skillId: 'nuxt' },
      { name: 'Vue.js', skillId: 'vue' },
      { name: 'CI/CD', skillId: 'github-actions' },
      { name: 'Docker', skillId: 'docker' },
      { name: 'E-commerce' },
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: ShoppingCart,
    achievements: [
      'Reduced integration times by 40%',
      'Refactored legacy apps for better performance',
      'Implemented modern deployment strategies',
    ],
  },
  {
    id: 'transportation-system',
    title: 'Transportation Management System',
    company: 'Servicios de Autotransporte Mochcun',
    description:
      'Designed and developed a full web application from scratch using Vue.js and Node.js. Created REST APIs and CI/CD pipelines for automated deployment.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'Vue.js', skillId: 'vue' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'REST APIs', skillId: 'express' },
      { name: 'CI/CD', skillId: 'github-actions' },
      { name: 'PostgreSQL', skillId: 'postgresql' },
      { name: 'Express', skillId: 'express' },
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: Building2,
    achievements: [
      'Cut deployment time by 50% through automation',
      'Enhanced UX/UI with user-centric improvements',
      'Streamlined internal business processes',
    ],
  },
  {
    id: 'crm-modules',
    title: 'CRM System Modules',
    company: 'Grupo Humanitta',
    description:
      'Developed CRM modules from scratch to enhance accountability and tracking. Integrated third-party APIs and optimized complex SQL queries.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'JavaScript', skillId: 'javascript' },
      { name: 'SQL', skillId: 'postgresql' },
      { name: 'PostgreSQL', skillId: 'postgresql' },
      { name: 'Third-party APIs' },
      { name: 'Database Optimization', skillId: 'postgresql' },
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: Users,
    achievements: [
      'Improved operational efficiency via automation',
      'Set technical standards for new modules',
      'Proposed modular architecture patterns',
    ],
  },
];

/** Map from project ID to Project for O(1) lookups */
export const projectById = new Map<string, Project>(
  projects.map((p) => [p.id, p])
);

/**
 * Returns all project IDs that reference the given skill ID.
 */
export function getProjectsForSkill(skillId: string): Project[] {
  return projects.filter((project) =>
    project.technologies.some((tech) => tech.skillId === skillId)
  );
}
