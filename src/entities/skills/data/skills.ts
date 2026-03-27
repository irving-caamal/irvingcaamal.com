export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  description: string;
  connections: string[];
  yearsOfExperience: number;
}

export const skillCategories = {
  frontend: { label: 'Frontend & Frameworks' },
  backend: { label: 'Backend & APIs' },
  testing: { label: 'Testing & QA' },
  devops: { label: 'DevOps & Delivery' },
  architecture: { label: 'Architecture & Collaboration' },
} as const;

export const skills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 96,
    category: 'frontend',
    description:
      'Core language for modern web applications, asynchronous workflows, and maintainable product code.',
    connections: ['typescript', 'react', 'nodejs'],
    yearsOfExperience: 9,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 95,
    category: 'frontend',
    description:
      'Typed frontends and backend services with strong tooling, contracts, and scalable refactors.',
    connections: ['javascript', 'react', 'nextjs', 'nodejs'],
    yearsOfExperience: 8,
  },
  {
    id: 'react',
    name: 'React',
    level: 96,
    category: 'frontend',
    description:
      'Component-driven UI architecture for product surfaces, design systems, and complex flows.',
    connections: ['typescript', 'nextjs', 'tailwind', 'rtl'],
    yearsOfExperience: 8,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 91,
    category: 'frontend',
    description:
      'SSR and app platform work across migrations, micro-frontends, and SEO-sensitive experiences.',
    connections: ['react', 'typescript', 'micro-frontends', 'headless-cms'],
    yearsOfExperience: 5,
  },
  {
    id: 'vue',
    name: 'Vue.js',
    level: 90,
    category: 'frontend',
    description:
      'Frontend delivery for operations systems and product migrations with strong DX foundations.',
    connections: ['nuxt', 'tailwind', 'laravel'],
    yearsOfExperience: 4,
  },
  {
    id: 'nuxt',
    name: 'Nuxt.js',
    level: 84,
    category: 'frontend',
    description:
      'Universal Vue applications used in framework migrations and SEO-driven commerce experiences.',
    connections: ['vue', 'javascript'],
    yearsOfExperience: 2,
  },
  {
    id: 'vite',
    name: 'Vite',
    level: 82,
    category: 'frontend',
    description:
      'Fast local development and build tooling for modern React applications.',
    connections: ['react', 'typescript', 'vitest'],
    yearsOfExperience: 1,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 89,
    category: 'frontend',
    description:
      'Design system implementation, token-driven styling, and reusable component composition.',
    connections: ['react', 'vue', 'design-systems'],
    yearsOfExperience: 2,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 94,
    category: 'backend',
    description:
      'Backend services, BFF layers, SSR support, and integration-heavy product work.',
    connections: ['express', 'graphql', 'postgresql', 'aws'],
    yearsOfExperience: 7,
  },
  {
    id: 'express',
    name: 'Express',
    level: 91,
    category: 'backend',
    description:
      'Custom APIs, SSR gateways, and service composition for web applications at scale.',
    connections: ['nodejs', 'graphql', 'postgresql'],
    yearsOfExperience: 6,
  },
  {
    id: 'laravel',
    name: 'Laravel',
    level: 88,
    category: 'backend',
    description:
      'API-first backend development, business workflows, and maintainable MVC foundations.',
    connections: ['mysql', 'postgresql', 'vue'],
    yearsOfExperience: 6,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    level: 87,
    category: 'backend',
    description:
      'Relational data modeling, migrations, and dependable backend persistence layers.',
    connections: ['nodejs', 'express', 'laravel'],
    yearsOfExperience: 5,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    level: 84,
    category: 'backend',
    description:
      'SQL-heavy backend work for CRM, operations, and Laravel-based applications.',
    connections: ['laravel', 'javascript'],
    yearsOfExperience: 7,
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    level: 81,
    category: 'backend',
    description:
      'Service integration and data orchestration for large product surfaces and shared platforms.',
    connections: ['nodejs', 'express', 'nextjs'],
    yearsOfExperience: 3,
  },
  {
    id: 'rtl',
    name: 'React Testing Library',
    level: 90,
    category: 'testing',
    description:
      'Component testing focused on behavior, accessibility, and realistic user workflows.',
    connections: ['react', 'jest', 'vitest', 'cypress'],
    yearsOfExperience: 4,
  },
  {
    id: 'jest',
    name: 'Jest',
    level: 87,
    category: 'testing',
    description:
      'Unit and integration testing for React applications and frontend platform migrations.',
    connections: ['rtl', 'react', 'cypress'],
    yearsOfExperience: 4,
  },
  {
    id: 'vitest',
    name: 'Vitest',
    level: 82,
    category: 'testing',
    description:
      'Modern test runner for Vite-based applications with fast local feedback loops.',
    connections: ['vite', 'rtl', 'playwright'],
    yearsOfExperience: 1,
  },
  {
    id: 'playwright',
    name: 'Playwright',
    level: 81,
    category: 'testing',
    description:
      'End-to-end coverage for critical user journeys and regression-sensitive flows.',
    connections: ['vitest', 'github-actions', 'react'],
    yearsOfExperience: 1,
  },
  {
    id: 'cypress',
    name: 'Cypress',
    level: 86,
    category: 'testing',
    description:
      'E2E testing and regression protection for rebrands, design systems, and app platforms.',
    connections: ['rtl', 'jest', 'github-actions'],
    yearsOfExperience: 4,
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    level: 89,
    category: 'devops',
    description:
      'Automated test, build, and deployment pipelines that improve release confidence.',
    connections: ['docker', 'playwright', 'cypress', 'aws'],
    yearsOfExperience: 5,
  },
  {
    id: 'docker',
    name: 'Docker',
    level: 84,
    category: 'devops',
    description:
      'Containerized environments for repeatable local development and delivery workflows.',
    connections: ['github-actions', 'laravel', 'nodejs'],
    yearsOfExperience: 4,
  },
  {
    id: 'aws',
    name: 'AWS',
    level: 83,
    category: 'devops',
    description:
      'Practical cloud usage across EC2 and S3 for deployments, storage, and multi-environment workflows.',
    connections: ['nodejs', 'docker', 'github-actions', 'azure'],
    yearsOfExperience: 5,
  },
  {
    id: 'azure',
    name: 'Azure',
    level: 76,
    category: 'devops',
    description:
      'Identity, secrets management, and cloud fundamentals applied to secure product delivery.',
    connections: ['github-actions', 'aws'],
    yearsOfExperience: 2,
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    level: 72,
    category: 'devops',
    description:
      'Continuous integration maintenance for legacy and transitional frontend platforms.',
    connections: ['jest', 'cypress', 'feature-flags'],
    yearsOfExperience: 2,
  },
  {
    id: 'design-systems',
    name: 'Design Systems',
    level: 92,
    category: 'architecture',
    description:
      'Reusable component strategies that improve consistency, accessibility, and team velocity.',
    connections: ['react', 'tailwind', 'storybook'],
    yearsOfExperience: 4,
  },
  {
    id: 'storybook',
    name: 'Storybook',
    level: 88,
    category: 'architecture',
    description:
      'Component documentation and cross-team collaboration for UI platforms and rebrands.',
    connections: ['design-systems', 'react', 'chromatic'],
    yearsOfExperience: 4,
  },
  {
    id: 'chromatic',
    name: 'Chromatic',
    level: 79,
    category: 'architecture',
    description:
      'Visual validation workflows that support safer UI changes across shared component libraries.',
    connections: ['storybook', 'cypress'],
    yearsOfExperience: 3,
  },
  {
    id: 'micro-frontends',
    name: 'Micro-Frontends',
    level: 87,
    category: 'architecture',
    description:
      'Frontend platform patterns that enable team autonomy and gradual migrations.',
    connections: ['nextjs', 'react', 'feature-flags'],
    yearsOfExperience: 2,
  },
  {
    id: 'headless-cms',
    name: 'Headless CMS',
    level: 86,
    category: 'architecture',
    description:
      'Contentstack and Contentful integrations that support dynamic publishing workflows.',
    connections: ['nextjs', 'react', 'feature-flags'],
    yearsOfExperience: 3,
  },
  {
    id: 'feature-flags',
    name: 'Feature Flags',
    level: 84,
    category: 'architecture',
    description:
      'Controlled rollout strategies for rebrands, phased releases, and platform migrations.',
    connections: ['headless-cms', 'micro-frontends', 'jenkins'],
    yearsOfExperience: 3,
  },
];

/** Map from skill ID to Skill object for O(1) lookups */
export const skillById = new Map<string, Skill>(
  skills.map((skill) => [skill.id, skill])
);
