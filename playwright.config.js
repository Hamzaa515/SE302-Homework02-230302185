const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    baseURL: 'https://sweetshop.netlify.app/',
    viewport: { width: 1280, height: 720 }
  }
});
