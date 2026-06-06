import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/snapshots/{platform}/{projectName}/{testName}/{arg}{ext}',
  webServer: {
    command: 'npm run build && npx vite preview --port 3001 --host',
    port: 3001,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3001',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
