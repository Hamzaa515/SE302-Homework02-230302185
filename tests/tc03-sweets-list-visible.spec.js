const { test, expect } = require('@playwright/test');
const SweetsPage = require('../pages/SweetsPage');

test('TC03 - Sweets page shows product list with add-to-basket actions', async ({ page }) => {
  const sweets = new SweetsPage(page);

  await sweets.open();

  await expect(page.getByText('Browse sweets')).toBeVisible();

  const count = await sweets.addButtonCount();
  expect(count).toBeGreaterThan(0);
});
