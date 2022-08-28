import type { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000"
  },
  testDir: "./src/tests/e2e"
};
export default config;
