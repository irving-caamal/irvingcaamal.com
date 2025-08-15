import { siteConfig } from '../site';

describe('shared/config/site', () => {
  describe('siteConfig', () => {
    it('has required personal information fields', () => {
      expect(siteConfig.name).toBeDefined();
      expect(siteConfig.title).toBeDefined();
      expect(siteConfig.description).toBeDefined();
      expect(siteConfig.email).toBeDefined();
      expect(siteConfig.location).toBeDefined();
    });

    it('has valid email format', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(siteConfig.email).toMatch(emailRegex);
    });

    it('has social media links object', () => {
      expect(siteConfig.social).toBeDefined();
      expect(typeof siteConfig.social).toBe('object');
      
      expect(siteConfig.social.github).toContain('github.com');
      expect(siteConfig.social.linkedin).toContain('linkedin.com');
      expect(siteConfig.social.website).toContain('irvingcaamal.com');
    });

    it('has experience information', () => {
      expect(siteConfig.experience).toBeDefined();
      expect(siteConfig.experience.years).toBeDefined();
      expect(siteConfig.experience.projectsCompleted).toBeDefined();
    });

    it('has professional information', () => {
      expect(siteConfig.currentCompany).toBeDefined();
      expect(siteConfig.currentRole).toBeDefined();
    });

    it('has education information', () => {
      expect(siteConfig.education).toBeDefined();
      expect(siteConfig.education.degree).toBeDefined();
      expect(siteConfig.education.school).toBeDefined();
      expect(siteConfig.education.graduationYear).toBeDefined();
    });

    it('has SEO configuration', () => {
      expect(siteConfig.seo).toBeDefined();
      expect(siteConfig.seo.keywords).toBeDefined();
      expect(siteConfig.seo.author).toBeDefined();
      expect(Array.isArray(siteConfig.seo.keywords.split(','))).toBe(true);
    });

    it('has non-empty string values for required fields', () => {
      expect(siteConfig.name.length).toBeGreaterThan(0);
      expect(siteConfig.title.length).toBeGreaterThan(0);
      expect(siteConfig.description.length).toBeGreaterThan(0);
    });
  });
});