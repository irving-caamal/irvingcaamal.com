import { test, expect } from "@playwright/test";

test("should render Stack Page", async ({ page }) => {
  await page.goto("/stack");
  await expect(page.locator("h1")).toContainText(
    "My tech stack"
  );
});
