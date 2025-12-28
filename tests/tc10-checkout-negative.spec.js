const { test, expect } = require('@playwright/test');
const BasketPage = require('../pages/BasketPage');

test('TC10 - Checkout blocks when required fields are missing', async ({ page }) => {
  const basket = new BasketPage(page);

  await basket.open();
  await basket.continueToCheckout();

  const missingRequired = await basket.requiredFieldCount();
  expect(missingRequired).toBeGreaterThan(0);
});
