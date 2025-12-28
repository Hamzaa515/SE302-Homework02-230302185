const { test, expect } = require('@playwright/test');
const BasketPage = require('../pages/BasketPage');

test('TC10 - Checkout blocks when required fields are missing', async ({ page }) => {
  const basket = new BasketPage(page);

  await basket.open();
  await expect(page.getByText('Your Basket')).toBeVisible();

  await basket.continueToCheckout();

  const requiredCount = await basket.requiredFieldCount();
  expect(requiredCount).toBeGreaterThan(0);
});
