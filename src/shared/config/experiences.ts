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

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Vtwo.inc (Client: OutSolve)',
    location: 'Remote',
    period: 'Oct 2025 - Present',
    type: 'Contractor',
    description:
      'Building a high-performance interface that modernizes legacy compliance flows with a React/Vite frontend and Node.js/Express backend.',
    achievements: [
      'Reworked complex form-driven experiences with a modular React architecture',
      'Added reliable test coverage with Vitest, RTL, and Playwright',
      'Strengthened delivery and security with GitHub Actions plus Azure Identity and Key Vault',
    ],
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Vitest',
      'Playwright',
      'Azure',
      'GitHub Actions',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'HomLista',
    location: 'Remote',
    period: 'Aug 2025 - Feb 2026',
    type: 'Freelance',
    description:
      'Created the design system and backend foundation for a subscriber-focused web builder platform.',
    achievements: [
      'Designed a reusable UI system with React, TypeScript, and Tailwind',
      'Implemented Laravel backend workflows backed by PostgreSQL',
      'Automated page generation and deployment with GitHub Actions and Docker',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Laravel',
      'PostgreSQL',
      'Vitest',
      'Cypress',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'AlertD',
    location: 'Remote',
    period: 'May 2025 - Aug 2025',
    type: 'Contractor',
    description:
      'Delivered asynchronous product capabilities for an event-driven platform using React, Node.js, and PostgreSQL services.',
    achievements: [
      'Built decoupled services on top of an event-oriented architecture',
      'Integrated AWS environments and custom SDK flows across EC2 and S3',
      'Improved real-time processing with Apache Pulsar and JSONata-based mappings',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Apache Pulsar',
      'JSONata',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'FullStack Labs (Client: MGM Resorts International)',
    location: 'Remote',
    period: 'May 2023 - Apr 2025',
    type: 'Contractor',
    description:
      'Maintained and extended a micro-frontend platform in Next.js for large-scale hospitality and gaming experiences.',
    achievements: [
      'Supported migration of critical pages into a scalable micro-frontend setup',
      'Maintained shared libraries, GraphQL integrations, and reusable packages',
      'Shipped CMS-driven and feature-flagged experiences with Storybook and Chromatic workflows',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'GraphQL',
      'Contentstack',
      'LaunchDarkly',
      'Storybook',
      'Chromatic',
      'AWS',
    ],
  },
  {
    title: 'Mid-Level Software Engineer',
    company: 'FullStack Labs (Client: Teachers Pay Teachers)',
    location: 'Remote',
    period: 'Feb 2022 - May 2023',
    type: 'Contractor',
    description:
      'Partnered with design and platform teams to ship accessible components, CMS-backed content, and phased rebrand releases.',
    achievements: [
      'Built accessible components from scratch and documented them in Storybook',
      'Migrated unit tests from Enzyme to RTL with Jest and maintained Cypress coverage',
      'Integrated Contentful into a Node/Express SSR setup and supported phased launches with Jenkins',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Storybook',
      'Chromatic',
      'Contentful',
      'Node.js',
      'Express',
      'Jest',
      'Cypress',
      'Jenkins',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Servicios de Autotransporte Mochcun',
    location: 'Cancún, Mexico',
    period: 'Jan 2018 - Feb 2022',
    type: 'Full-time',
    description:
      'Led end-to-end development of an internal operations platform with an API-first Laravel backend and Vue.js frontend.',
    achievements: [
      'Built the product from scratch around MVC and SOLID architecture decisions',
      'Standardized environments and deployments with Docker and GitHub Actions',
      'Used AWS S3 and EC2 to support media workflows and test environments',
    ],
    technologies: [
      'Laravel',
      'Vue.js',
      'MySQL',
      'Docker',
      'GitHub Actions',
      'AWS',
      'REST APIs',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Cancun Airport Transportation',
    location: 'Cancún, Mexico',
    period: 'Jan 2018 - Feb 2022',
    type: 'Freelance',
    description:
      'Modernized e-commerce sites through framework migrations and backend-for-frontend patterns focused on SEO and maintainability.',
    achievements: [
      'Migrated legacy storefronts to Next.js and Nuxt.js',
      'Implemented Node.js BFF modules with custom Express integrations',
      'Improved delivery consistency with GitHub Actions, artifacts, and Dockerized workflows',
    ],
    technologies: [
      'Next.js',
      'Nuxt.js',
      'Vue.js',
      'Node.js',
      'Express',
      'Docker',
      'GitHub Actions',
    ],
  },
];
