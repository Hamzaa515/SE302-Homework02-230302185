const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('TC08 - Login blocks empty submit with validation messages', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.submitEmpty();

  await expect(login.emailValidation).toBeVisible();
  await expect(login.passwordValidation).toBeVisible();
});
