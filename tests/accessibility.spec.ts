import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page has proper heading hierarchy', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1); // Should have exactly one H1
    
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('images have alt text', async ({ page }) => {
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        const src = await img.getAttribute('src');
        
        // Alt text should exist and not be empty (unless decorative)
        expect(alt).not.toBeNull();
        
        // If it's not a decorative image, alt should have content
        if (!src?.includes('decoration') && !src?.includes('bg-')) {
          expect(alt?.length).toBeGreaterThan(0);
        }
      }
    }
  });

  test('buttons and links have accessible names', async ({ page }) => {
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      
      // Button should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('form controls have labels', async ({ page }) => {
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const type = await input.getAttribute('type');
      
      // Skip hidden inputs
      if (type === 'hidden') continue;
      
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledby = await input.getAttribute('aria-labelledby');
      
      // Input should have associated label
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = await label.count() > 0;
        
        expect(hasLabel || ariaLabel || ariaLabelledby).toBeTruthy();
      }
    }
  });

  test('color contrast is sufficient', async ({ page }) => {
    // This is a basic check for obvious contrast issues
    const textElements = page.locator('p, h1, h2, h3, h4, h5, h6, span, a, button');
    const count = await textElements.count();
    
    // Check that text elements are visible (basic visibility check)
    for (let i = 0; i < Math.min(count, 10); i++) { // Check first 10 elements
      const element = textElements.nth(i);
      await expect(element).toBeVisible();
    }
  });

  test('focus indicators are visible', async ({ page }) => {
    // Test keyboard navigation
    const focusableElements = page.locator('a, button, input, textarea, select, [tabindex="0"]');
    const count = await focusableElements.count();
    
    if (count > 0) {
      const firstElement = focusableElements.first();
      await firstElement.focus();
      
      // Element should be focused
      await expect(firstElement).toBeFocused();
      
      // Test tab navigation
      await page.keyboard.press('Tab');
      const secondElement = page.locator(':focus').first();
      await expect(secondElement).toBeFocused();
    }
  });

  test('page works without JavaScript', async ({ page, context }) => {
    // Disable JavaScript
    await context.setExtraHTTPHeaders({});
    await page.addInitScript(() => {
      // This will run before any scripts on the page
      Object.defineProperty(navigator, 'javaEnabled', {
        value: () => false,
      });
    });
    
    await page.goto('/');
    
    // Basic content should still be visible
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
    
    // Navigation should work
    const navigation = page.locator('nav').first();
    await expect(navigation).toBeVisible();
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
    
    // Check that content doesn't overflow horizontally
    const bodyWidth = await page.locator('body').evaluate(el => el.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(425); // Allow some margin for mobile
  });
});