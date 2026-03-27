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
    id: 'outsolve-modernization',
    title: 'OutSolve Form Platform Modernization',
    company: 'Vtwo.inc',
    description:
      'Modernized a complex compliance workflow with a React/Vite frontend, Node.js services, stronger testing, and a more modular product architecture.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'React', skillId: 'react' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Vite', skillId: 'vite' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'Express', skillId: 'express' },
      { name: 'PostgreSQL', skillId: 'postgresql' },
      { name: 'Vitest', skillId: 'vitest' },
      { name: 'Playwright', skillId: 'playwright' },
      { name: 'Azure', skillId: 'azure' },
      { name: 'GitHub Actions', skillId: 'github-actions' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Building2,
    achievements: [
      'Reworked legacy-heavy form flows into a faster modular frontend',
      'Added dependable automated coverage around critical user paths',
      'Improved security and delivery workflows with Azure and GitHub Actions',
    ],
  },
  {
    id: 'homlista-web-builder',
    title: 'HomLista Subscriber Web Builder',
    company: 'HomLista',
    description:
      'Built the design system and backend delivery workflow for a page-generation platform, reducing duplication and standardizing UI across the product.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'React', skillId: 'react' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Tailwind CSS', skillId: 'tailwind' },
      { name: 'Design Systems', skillId: 'design-systems' },
      { name: 'Laravel', skillId: 'laravel' },
      { name: 'PostgreSQL', skillId: 'postgresql' },
      { name: 'Vitest', skillId: 'vitest' },
      { name: 'Cypress', skillId: 'cypress' },
      { name: 'Docker', skillId: 'docker' },
      { name: 'GitHub Actions', skillId: 'github-actions' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Users,
    achievements: [
      'Created a reusable UI foundation from scratch for faster feature delivery',
      'Implemented the backend workflows powering generated pages and subscriber flows',
      'Automated deployments with Dockerized CI/CD pipelines',
    ],
  },
  {
    id: 'mgm-platform-migration',
    title: 'MGM Resorts Platform Migration',
    company: 'FullStack Labs (Client: MGM Resorts International)',
    description:
      'Maintained and extended a micro-frontend platform in Next.js, with GraphQL services, CMS integrations, and design system tooling for large-scale experiences.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'Next.js', skillId: 'nextjs' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Micro-Frontends', skillId: 'micro-frontends' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'GraphQL', skillId: 'graphql' },
      { name: 'Headless CMS', skillId: 'headless-cms' },
      { name: 'Storybook', skillId: 'storybook' },
      { name: 'Chromatic', skillId: 'chromatic' },
      { name: 'Feature Flags', skillId: 'feature-flags' },
      { name: 'AWS', skillId: 'aws' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: Building2,
    achievements: [
      'Supported gradual migration of critical pages into a shared platform',
      'Maintained shared packages that improved consistency across teams',
      'Enabled safer releases with CMS, Storybook, Chromatic, and feature flags',
    ],
  },
  {
    id: 'alertd-event-platform',
    title: 'AlertD Event-Driven Platform',
    company: 'AlertD',
    description:
      'Delivered decoupled product capabilities for a real-time platform using React, Node.js, PostgreSQL, and AWS-backed event processing.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'React', skillId: 'react' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'Express', skillId: 'express' },
      { name: 'PostgreSQL', skillId: 'postgresql' },
      { name: 'AWS', skillId: 'aws' },
      { name: 'Apache Pulsar' },
      { name: 'JSONata' },
    ],
    github: '#',
    demo: '#',
    featured: true,
    icon: BarChart3,
    achievements: [
      'Built asynchronous features on top of an event-oriented backend',
      'Integrated cloud environments and service flows across AWS',
      'Improved real-time processing reliability with stream-based tooling',
    ],
  },
  {
    id: 'tpt-rebrand-platform',
    title: 'Teachers Pay Teachers Rebrand',
    company: 'FullStack Labs (Client: Teachers Pay Teachers)',
    description:
      'Partnered with design and platform teams to ship accessible UI, a CMS-backed rebrand, and stronger testing workflows on a custom SSR stack.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'React', skillId: 'react' },
      { name: 'TypeScript', skillId: 'typescript' },
      { name: 'Design Systems', skillId: 'design-systems' },
      { name: 'Storybook', skillId: 'storybook' },
      { name: 'Chromatic', skillId: 'chromatic' },
      { name: 'Contentful', skillId: 'headless-cms' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'Express', skillId: 'express' },
      { name: 'Jest', skillId: 'jest' },
      { name: 'Cypress', skillId: 'cypress' },
      { name: 'Jenkins', skillId: 'jenkins' },
      { name: 'Feature Flags', skillId: 'feature-flags' },
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: Users,
    achievements: [
      'Built accessible components from scratch in close collaboration with design',
      'Migrated testing patterns from Enzyme toward RTL and Jest',
      'Supported phased launches through CMS integration and controlled releases',
    ],
  },
  {
    id: 'mochcun-operations-platform',
    title: 'Transportation Operations Platform',
    company: 'Servicios de Autotransporte Mochcun',
    description:
      'Led development of an internal operations product from scratch with Laravel, Vue.js, Docker, and AWS-backed environments.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'Laravel', skillId: 'laravel' },
      { name: 'Vue.js', skillId: 'vue' },
      { name: 'MySQL', skillId: 'mysql' },
      { name: 'REST APIs', skillId: 'express' },
      { name: 'Docker', skillId: 'docker' },
      { name: 'GitHub Actions', skillId: 'github-actions' },
      { name: 'AWS', skillId: 'aws' },
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: Building2,
    achievements: [
      'Built the product end to end around an API-first architecture',
      'Standardized environments with Docker and automated delivery pipelines',
      'Improved process traceability across internal business operations',
    ],
  },
  {
    id: 'airport-commerce-migration',
    title: 'Airport Transportation Commerce Migration',
    company: 'Cancun Airport Transportation',
    description:
      'Migrated e-commerce experiences to Next.js and Nuxt.js while introducing a backend-for-frontend layer for performance and SEO-sensitive pages.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      { name: 'Next.js', skillId: 'nextjs' },
      { name: 'Nuxt.js', skillId: 'nuxt' },
      { name: 'Vue.js', skillId: 'vue' },
      { name: 'Node.js', skillId: 'nodejs' },
      { name: 'Express', skillId: 'express' },
      { name: 'Docker', skillId: 'docker' },
      { name: 'GitHub Actions', skillId: 'github-actions' },
    ],
    github: '#',
    demo: '#',
    featured: false,
    icon: ShoppingCart,
    achievements: [
      'Migrated legacy storefronts to modern JavaScript frameworks',
      'Built BFF modules to improve SEO-oriented page performance',
      'Containerized delivery workflows to reduce change risk',
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
