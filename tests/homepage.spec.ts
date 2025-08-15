import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Irving/);
  });

  test('displays hero section', async ({ page }) => {
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText('Irving');
  });

  test('displays navigation menu', async ({ page }) => {
    const navigation = page.locator('nav').first();
    await expect(navigation).toBeVisible();
  });

  test('has contact information', async ({ page }) => {
    const email = page.getByText('contact@irvingcaamal.com');
    await expect(email).toBeVisible();
  });

  test('displays social media links', async ({ page }) => {
    const linkedinLink = page.getByRole('link', { name: /linkedin/i });
    const githubLink = page.getByRole('link', { name: /github/i });
    
    await expect(linkedinLink).toBeVisible();
    await expect(githubLink).toBeVisible();
  });

  test('has skills section', async ({ page }) => {
    const skillsSection = page.getByText('Skills').first();
    await expect(skillsSection).toBeVisible();
  });

  test('has experience section', async ({ page }) => {
    const experienceSection = page.getByText('Experience').first();
    await expect(experienceSection).toBeVisible();
  });

  test('has projects section', async ({ page }) => {
    const projectsSection = page.getByText('Projects').first();
    await expect(projectsSection).toBeVisible();
  });

  test('displays current role and company', async ({ page }) => {
    const roleText = page.getByText(/Senior.*Engineer/i);
    await expect(roleText).toBeVisible();
  });

  test('contact section is functional', async ({ page }) => {
    const contactSection = page.getByText('Contact').first();
    await expect(contactSection).toBeVisible();
  });
});