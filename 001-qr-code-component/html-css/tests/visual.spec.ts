import { test, expect } from '@playwright/test';

test('desktop layout', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/html-css/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('desktop.png');
});

test('mobile layout', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/html-css/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('mobile.png');
});
