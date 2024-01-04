import { test, expect } from '@playwright/test';

// eslint-disable-next-line jest/no-done-callback
test(`z-index tests`, async ({ page }) => {
  await page.goto(getTestUrl('z-index', 'z-index'), { waitUntil: 'networkidle' });
  await page.waitForSelector('groupui-text.hydrated');
  await expect(page).toHaveScreenshot({ fullPage: true });
});

const getTestUrl = (folder: string, filename: string) =>
  `http://localhost:3333/template-tests/${folder}/${filename}.html`;
