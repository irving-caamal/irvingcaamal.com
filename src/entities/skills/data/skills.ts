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
  devops: { label: 'DevOps & Deployment' },
  architecture: { label: 'Architecture & Tooling' },
} as const;

export const skills: Skill[] = [
  // Frontend & Frameworks
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 95,
    category: 'frontend',
    description:
      'Advanced ES6+, async programming, and modern JavaScript patterns',
    connections: ['typescript', 'react', 'vue', 'nodejs'],
    yearsOfExperience: 8,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 92,
    category: 'frontend',
    description:
      'Advanced type systems, generics, and large-scale application architecture',
    connections: ['javascript', 'react', 'vue', 'nodejs'],
    yearsOfExperience: 6,
  },
  {
    id: 'react',
    name: 'React.js',
    level: 95,
    category: 'frontend',
    description:
      'Advanced component architecture, hooks, performance optimization, and state management',
    connections: ['nextjs', 'typescript', 'testing-library'],
    yearsOfExperience: 7,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    description:
      'Full-stack applications with SSR, SSG, Micro-Frontend architecture, and Webpack Module Federation',
    connections: ['react', 'typescript', 'vercel'],
    yearsOfExperience: 5,
  },
  {
    id: 'vue',
    name: 'Vue.js',
    level: 88,
    category: 'frontend',
    description:
      'Composition API, reactive systems, and enterprise-scale applications',
    connections: ['nuxt', 'typescript'],
    yearsOfExperience: 6,
  },
  {
    id: 'nuxt',
    name: 'Nuxt.js',
    level: 85,
    category: 'frontend',
    description:
      'Universal Vue applications with advanced module ecosystem and e-commerce migrations',
    connections: ['vue', 'typescript'],
    yearsOfExperience: 4,
  },
  {
    id: 'tailwind',
    name: 'TailwindCSS',
    level: 90,
    category: 'frontend',
    description:
      'Design systems, component libraries, and modern CSS architecture',
    connections: ['react', 'vue'],
    yearsOfExperience: 4,
  },

  // Backend & APIs
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 88,
    category: 'backend',
    description:
      'Scalable server architecture, microservices, and performance optimization',
    connections: ['express', 'typescript', 'postgresql'],
    yearsOfExperience: 7,
  },
  {
    id: 'express',
    name: 'Express.js',
    level: 85,
    category: 'backend',
    description:
      'RESTful APIs, middleware architecture, and security best practices',
    connections: ['nodejs', 'postgresql'],
    yearsOfExperience: 6,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    level: 82,
    category: 'backend',
    description:
      'Complex queries, indexing strategies, and database optimization',
    connections: ['nodejs', 'express'],
    yearsOfExperience: 5,
  },

  // Testing & QA
  {
    id: 'jest',
    name: 'Jest',
    level: 88,
    category: 'testing',
    description: 'Unit testing, mocking, and test-driven development practices',
    connections: ['testing-library', 'react'],
    yearsOfExperience: 5,
  },
  {
    id: 'testing-library',
    name: 'Testing Library',
    level: 85,
    category: 'testing',
    description:
      'Component testing with focus on user behavior and accessibility',
    connections: ['jest', 'react', 'cypress'],
    yearsOfExperience: 4,
  },
  {
    id: 'cypress',
    name: 'Cypress',
    level: 80,
    category: 'testing',
    description:
      'End-to-end testing, visual regression testing, and CI/CD integration',
    connections: ['testing-library'],
    yearsOfExperience: 3,
  },

  // DevOps & Deployment
  {
    id: 'git',
    name: 'Git & GitHub',
    level: 95,
    category: 'devops',
    description:
      'Advanced workflows, branching strategies, and team collaboration',
    connections: ['github-actions'],
    yearsOfExperience: 8,
  },
  {
    id: 'github-actions',
    name: 'CI/CD (GitHub Actions)',
    level: 85,
    category: 'devops',
    description:
      'Automated deployment pipelines, testing workflows, and DevOps practices',
    connections: ['git', 'docker', 'aws'],
    yearsOfExperience: 4,
  },
  {
    id: 'docker',
    name: 'Docker',
    level: 78,
    category: 'devops',
    description:
      'Container orchestration, multi-stage builds, and deployment strategies',
    connections: ['nodejs', 'github-actions'],
    yearsOfExperience: 3,
  },
  {
    id: 'aws',
    name: 'AWS',
    level: 75,
    category: 'devops',
    description:
      'Cloud infrastructure, serverless architecture, and scalable deployments',
    connections: ['azure', 'docker'],
    yearsOfExperience: 3,
  },
  {
    id: 'azure',
    name: 'Azure',
    level: 70,
    category: 'devops',
    description:
      'Microsoft cloud services and Azure fundamentals certification',
    connections: ['aws'],
    yearsOfExperience: 2,
  },

  // Architecture & Tooling
  {
    id: 'design-systems',
    name: 'Design Systems',
    level: 90,
    category: 'architecture',
    description:
      'Component libraries, design tokens, and accessibility compliance (A11y)',
    connections: ['react', 'tailwind'],
    yearsOfExperience: 5,
  },
  {
    id: 'micro-frontends',
    name: 'Micro-Frontends',
    level: 85,
    category: 'architecture',
    description:
      'Module Federation, scalable frontend architecture, and team autonomy',
    connections: ['nextjs', 'webpack'],
    yearsOfExperience: 3,
  },
  {
    id: 'headless-cms',
    name: 'Headless CMS',
    level: 80,
    category: 'architecture',
    description:
      'Contentful, Sanity integration, and content team autonomy solutions',
    connections: ['react', 'nextjs'],
    yearsOfExperience: 3,
  },
];

/** Map from skill ID to Skill object for O(1) lookups */
export const skillById = new Map<string, Skill>(
  skills.map((skill) => [skill.id, skill])
);
