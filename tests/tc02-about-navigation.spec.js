const { test, expect } = require('@playwright/test');
const Header = require('../pages/Header');
const HomePage = require('../pages/HomePage');

test('TC02 - About navigation opens correct route', async ({ page }) => {
  const home = new HomePage(page);
  const header = new Header(page);

  await home.open();
  await header.goToAbout();

  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator('h1')).toBeVisible();
});

