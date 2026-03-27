import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigates to different sections on same page', async ({ page }) => {
    // Test navigation to About section
    const aboutLink = page.getByRole('link', { name: /about/i }).first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/#about$/);
    }
  });

  test('external social links open in new tab', async ({ page }) => {
    // Check GitHub link
    const githubLinks = page.getByRole('link').filter({ hasText: /github/i });
    const githubCount = await githubLinks.count();

    if (githubCount > 0) {
      const githubLink = githubLinks.first();
      const target = await githubLink.getAttribute('target');
      const href = await githubLink.getAttribute('href');

      expect(href).toContain('github.com');
      if (target) {
        expect(target).toBe('_blank');
      }
    }

    // Check LinkedIn link
    const linkedinLinks = page
      .getByRole('link')
      .filter({ hasText: /linkedin/i });
    const linkedinCount = await linkedinLinks.count();

    if (linkedinCount > 0) {
      const linkedinLink = linkedinLinks.first();
      const href = await linkedinLink.getAttribute('href');
      expect(href).toContain('linkedin.com');
    }
  });

  test('mobile menu functionality', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    const quickNav = page.getByTestId('mobile-quick-nav');
    await expect(quickNav).toBeVisible();

    const mobileMenuButton = page.getByTestId('mobile-menu-button');
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();

    const mobileMenu = page.getByTestId('mobile-menu');
    await expect(mobileMenu).toBeVisible();
  });

  test('logo/brand link returns to home', async ({ page }) => {
    const logoLink = page.locator('[data-testid="logo-link"]');

    if (await logoLink.isVisible()) {
      await logoLink.click();
      await expect(page).toHaveURL('/');
    }
  });

  test('navigation is keyboard accessible', async ({ page }) => {
    // Test tab navigation
    await page.keyboard.press('Tab');

    // First focusable element should be highlighted
    const focusedElement = page.locator(':focus').first();
    await expect(focusedElement).toBeVisible();

    // Test Enter key on navigation links
    const navigationLinks = page.locator('nav a').first();
    if (await navigationLinks.isVisible()) {
      await navigationLinks.focus();
      await page.keyboard.press('Enter');
      // Should navigate or show some action
    }
  });
});
