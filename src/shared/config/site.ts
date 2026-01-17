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
    'Software Engineer with over 8 years of experience building robust, scalable B2B and B2C digital products. Specialized in frontend development, UI architecture, and full-stack solutions.',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || 'Available for new opportunities',

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
    years: process.env.NEXT_PUBLIC_YEARS_EXPERIENCE || '8+',
    projectsCompleted: process.env.NEXT_PUBLIC_PROJECTS_COMPLETED || '50+',
    happyClients: process.env.NEXT_PUBLIC_HAPPY_CLIENTS || '15+',
    successRate: process.env.NEXT_PUBLIC_SUCCESS_RATE || '99%',
  },

  // Resume/CV
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf',

  // Company/Current Role
  currentCompany:
    process.env.NEXT_PUBLIC_CURRENT_COMPANY || 'AlertD & FullStack Labs',
  currentRole:
    process.env.NEXT_PUBLIC_CURRENT_ROLE || 'Senior Full-Stack Engineer',

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
      'Software Engineer with over 8 years of experience building robust, scalable B2B and B2C digital products. I specialize in frontend development, UI architecture, and full-stack solutions, with a passion for clean code, web accessibility, and testing.',
    philosophy:
      process.env.NEXT_PUBLIC_ABOUT_PHILOSOPHY ||
      "I'm a collaborative contributor in fast-paced, distributed engineering teams, always focused on developer experience and delivering high-quality solutions. I believe in continuous learning and applying modern best practices to create exceptional digital experiences.",
  },

  // SEO
  seo: {
    keywords:
      process.env.NEXT_PUBLIC_SEO_KEYWORDS ||
      'Senior Software Engineer, React, Next.js, Vue.js, TypeScript, Node.js, Full-Stack Developer, Frontend Architecture, UI Development',
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
