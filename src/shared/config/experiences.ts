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
    company: 'OutSolve',
    location: 'Remote',
    period: 'Oct 2025 - Present',
    type: 'Contractor',
    description:
      'Working on the I-9 Solution platform, streamlining compliance processes with modern web technologies.',
    achievements: [
      'Contributing to the I-9 compliance solution platform',
      'Implementing robust frontend features using React.js',
      'Optimizing CI/CD pipelines for faster deployments',
    ],
    technologies: [
      'React.js',
      'Databases',
      'REST APIs',
      'CI/CD',
      'Front-End Development',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'MGM Resorts International',
    location: 'Remote',
    period: 'Apr 2019 - Present',
    type: 'Associated with FullStack Labs',
    description:
      'Leading frontend initiatives for Global Gaming and Entertainment systems, modernizing the tech stack.',
    achievements: [
      'Migrating legacy systems to modern React/Next.js architecture',
      'Implementing CI/CD workflows on Microsoft Azure',
      'Building scalable component libraries',
    ],
    technologies: ['CI/CD', 'Microsoft Azure', 'React.js', 'Next.js'],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'AlertD',
    location: 'Remote',
    period: 'May 2023 - July 2025',
    type: 'Associated with AlertD',
    description:
      'Building Agentic AI solutions for SRE & DevOps on AWS, enhancing automation and monitoring capabilities.',
    achievements: [
      'Developed AI agents for automated DevOps tasks',
      'Integrated AWS services for scalable infrastructure',
      'Implemented complex prompt engineering strategies',
    ],
    technologies: ['AWS', 'Prompt Engineering', 'React.js', 'Node.js'],
  },
  {
    title: 'Project Lead & Developer',
    company: 'Mochcun',
    location: 'Cancún, Mexico',
    period: 'Dates to be confirmed', // Please update with correct dates
    type: 'Associated with Serv. de Autotransporte Mochcun',
    description:
      'Managed and developed the Verificadora Federal de Cancun system for physical-mechanical inspections.',
    achievements: [
      'Led the development of the inspection management system',
      'Managed infrastructure and deployment pipelines',
      'Connected legacy verification processes with digital solutions',
    ],
    technologies: [
      'Project Management',
      'Vue.js',
      'Laravel',
      'CI/CD',
      'Infrastructure',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Teachers Pay Teachers',
    location: 'Remote',
    period: 'Dates to be confirmed', // Please update with correct dates
    type: 'Associated with FullStack Labs',
    description:
      'Contributed to the world’s most popular marketplace for original educational resources.',
    achievements: [
      'Enhanced the lesson planning and resource sharing platform',
      'Collaborated with distributed teams to ship user-facing features',
    ],
    technologies: ['React.js', 'TypeScript', 'Web Development'],
  },
];
