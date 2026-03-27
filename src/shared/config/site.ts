/**
 * Site configuration
 * Contains all site-wide settings and environment variables
 */
export const siteConfig = {
  // Personal Information
  name: process.env.NEXT_PUBLIC_NAME || 'Irving de Jesús Caamal Alcocer',
  title: process.env.NEXT_PUBLIC_TITLE || 'Senior Software Engineer',
  description:
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    'Senior Software Engineer with 9+ years of experience building resilient B2B and B2C products across React, Next.js, Vue, Node.js, and Laravel ecosystems.',
  tagline:
    process.env.NEXT_PUBLIC_TAGLINE ||
    'Building well-tested products for distributed teams',

  // Contact Information
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@irvingcaamal.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+52 998 419 6633',
  location: process.env.NEXT_PUBLIC_LOCATION || 'Cancún, Quintana Roo, México',

  // Social Media Links
  social: {
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/irving-caamal',
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://www.linkedin.com/in/irving-caamal/',
    twitter:
      process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/irvingcaamal',
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      'https://instagram.com/irvingcaamal',
    website: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://irvingcaamal.com',
    medium:
      process.env.NEXT_PUBLIC_MEDIUM_URL || 'https://medium.com/@irveloper',
  },

  // Professional Information
  experience: {
    years: process.env.NEXT_PUBLIC_YEARS_EXPERIENCE || '9+',
    domains: process.env.NEXT_PUBLIC_DOMAINS || 'B2B + B2C',
    stack: process.env.NEXT_PUBLIC_CORE_STACK || 'React + Node + Laravel',
    delivery:
      process.env.NEXT_PUBLIC_DELIVERY_FOCUS || 'Testing, CI/CD, Cloud',
  },

  // Resume/CV
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ||
    '/Irving-Caamal-Alcocer-Resume.docx',

  // Company/Current Role
  currentCompany: process.env.NEXT_PUBLIC_CURRENT_COMPANY || 'Vtwo.inc',
  currentRole:
    process.env.NEXT_PUBLIC_CURRENT_ROLE || 'Senior Software Engineer',

  // Education
  education: {
    degree: process.env.NEXT_PUBLIC_DEGREE || 'Computer Systems Engineer',
    school:
      process.env.NEXT_PUBLIC_SCHOOL || 'Universidad del Sur Campus Cancún',
    graduationYear: process.env.NEXT_PUBLIC_GRADUATION_YEAR || '2015',
    location:
      process.env.NEXT_PUBLIC_EDUCATION_LOCATION ||
      'Cancún, Quintana Roo, México',
  },

  // About Section
  about: {
    journey:
      process.env.NEXT_PUBLIC_ABOUT_JOURNEY ||
      'I build resilient full-stack products for B2B and B2C teams, with deep experience in React, TypeScript, Next.js, Vue, Node.js, and Laravel. My work usually sits at the intersection of product delivery, frontend architecture, and backend reliability.',
    philosophy:
      process.env.NEXT_PUBLIC_ABOUT_PHILOSOPHY ||
      'I care about scalable systems, strong testing foundations, and release confidence. That means accessible interfaces, clear component boundaries, pragmatic CI/CD, and collaboration patterns that give teams autonomy without sacrificing quality.',
  },

  // SEO
  seo: {
    keywords:
      process.env.NEXT_PUBLIC_SEO_KEYWORDS ||
      'Senior Software Engineer, React, Next.js, Vue.js, TypeScript, Node.js, Laravel, PostgreSQL, Design Systems, CI/CD, Playwright, Storybook, Full-Stack Developer',
    author: process.env.NEXT_PUBLIC_AUTHOR || 'Irving de Jesús Caamal Alcocer',
  },
} as const;

/**
 * Navigation configuration
 */
export const navigationConfig = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
] as const;
