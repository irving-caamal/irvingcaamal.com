import { test, expect } from "@playwright/test";

test("should render HomePage", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new page should contain an h1
  await expect(page.locator("h1")).toContainText("Hi, I'm Irving Caamal");
  // The new page should contain an h2
  await expect(page.locator("h2")).toContainText(
    "Systems Engineer / Full Stack Web Developer - Focused on FrontEnd Development"
  );
});

test("should navigate to the stack page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'Technologies I'm currently working with' and click on it
  await page.click(`text=Technologies I'm currently working with`);
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/stack");
  // The new page should contain the h1 according to the route
  await expect(page.locator("h1")).toContainText(
    `Currently Stack I'm working with`
  );
});
