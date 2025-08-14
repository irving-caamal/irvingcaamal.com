import { test, expect } from '@playwright/test';

test('homepage loads and has title', async ({ page }) => {
  await page.goto('/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Irving/);
});

test('homepage has hero section', async ({ page }) => {
  await page.goto('/');

  // Look for common elements that should be on the homepage
  const heroSection = page.locator('h1, [data-testid="hero"], .hero');
  await expect(heroSection.first()).toBeVisible();
});

test('navigation is accessible', async ({ page }) => {
  await page.goto('/');

  // Check if there's navigation present
  const nav = page.locator('nav, [role="navigation"]');
  await expect(nav.first()).toBeVisible();
});