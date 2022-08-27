import { test, expect } from "@playwright/test";

test("should render Stack Page", async ({ page }) => {
    await page.goto("http://localhost:3000/stack");
    await expect(page.locator("h1")).toContainText(
        "Currently Stack I'm working with"
      );    
});