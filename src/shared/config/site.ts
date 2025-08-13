/**
 * Site configuration for Astro
 * Contains all site-wide settings and environment variables
 */
export const siteConfig = {
  // Personal Information
  name: import.meta.env.PUBLIC_NAME || "Irving de Jesús Caamal Alcocer",
  title: import.meta.env.PUBLIC_TITLE || "Senior Software Engineer",
  description:
    import.meta.env.PUBLIC_DESCRIPTION ||
    "Software Engineer with over 8 years of experience building robust, scalable B2B and B2C digital products. Specialized in frontend development, UI architecture, and full-stack solutions.",
  tagline: import.meta.env.PUBLIC_TAGLINE || "Available for new opportunities",

  // Contact Information
  email: import.meta.env.PUBLIC_EMAIL || "contact@irvingcaamal.com",
  phone: import.meta.env.PUBLIC_PHONE || "+52 998 419 6633",
  location: import.meta.env.PUBLIC_LOCATION || "Cancún, Quintana Roo, México",

  // Social Media Links
  social: {
    github: import.meta.env.PUBLIC_GITHUB_URL || "https://github.com/irving-caamal",
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/irving-caamal/",
    twitter: import.meta.env.PUBLIC_TWITTER_URL || "https://twitter.com/irvingcaamal",
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || "https://instagram.com/irvingcaamal",
    website: import.meta.env.PUBLIC_WEBSITE_URL || "https://irvingcaamal.com",
  },

  // Professional Information
  experience: {
    years: import.meta.env.PUBLIC_YEARS_EXPERIENCE || "8+",
    projectsCompleted: import.meta.env.PUBLIC_PROJECTS_COMPLETED || "50+",
    happyClients: import.meta.env.PUBLIC_HAPPY_CLIENTS || "15+",
    successRate: import.meta.env.PUBLIC_SUCCESS_RATE || "99%",
  },

  // Resume/CV
  resumeUrl: import.meta.env.PUBLIC_RESUME_URL || "/resume.pdf",

  // Company/Current Role
  currentCompany: import.meta.env.PUBLIC_CURRENT_COMPANY || "AlertD & FullStack Labs",
  currentRole: import.meta.env.PUBLIC_CURRENT_ROLE || "Senior Full-Stack Engineer",

  // Education
  education: {
    degree: import.meta.env.PUBLIC_DEGREE || "Computer Systems Engineer",
    school: import.meta.env.PUBLIC_SCHOOL || "Universidad del Sur Campus Cancún",
    graduationYear: import.meta.env.PUBLIC_GRADUATION_YEAR || "2015",
    location: import.meta.env.PUBLIC_EDUCATION_LOCATION || "Cancún, Quintana Roo, México",
  },

  // About Section
  about: {
    journey:
      import.meta.env.PUBLIC_ABOUT_JOURNEY ||
      "Software Engineer with over 8 years of experience building robust, scalable B2B and B2C digital products. I specialize in frontend development, UI architecture, and full-stack solutions, with a passion for clean code, web accessibility, and testing.",
    philosophy:
      import.meta.env.PUBLIC_ABOUT_PHILOSOPHY ||
      "I'm a collaborative contributor in fast-paced, distributed engineering teams, always focused on developer experience and delivering high-quality solutions. I believe in continuous learning and applying modern best practices to create exceptional digital experiences.",
  },

  // SEO
  seo: {
    keywords:
      import.meta.env.PUBLIC_SEO_KEYWORDS ||
      "Senior Software Engineer, React, Next.js, Vue.js, TypeScript, Node.js, Full-Stack Developer, Frontend Architecture, UI Development",
    author: import.meta.env.PUBLIC_AUTHOR || "Irving de Jesús Caamal Alcocer",
  },
} as const

/**
 * Navigation configuration
 */
export const navigationConfig = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const
