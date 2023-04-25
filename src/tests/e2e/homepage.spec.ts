import { test, expect } from "@playwright/test";

test("should render HomePage", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new page should contain an h1
  await expect(page.locator("h1")).toContainText("Systems Engineer / Full Stack Web Developer");
});

