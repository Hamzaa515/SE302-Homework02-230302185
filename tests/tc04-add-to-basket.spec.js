const { test, expect } = require('@playwright/test');
const SweetsPage = require('../pages/SweetsPage');
const Header = require('../pages/Header');

test('TC04 - Adding an item updates basket state', async ({ page }) => {
  const sweets = new SweetsPage(page);
  const header = new Header(page);

  await sweets.open();
  await sweets.addFirstItemToBasket();

  await header.goToBasket();

  await expect(page.getByText('Your Basket')).toBeVisible();
  await expect(page.getByText('Total (GBP)')).toBeVisible();
});
