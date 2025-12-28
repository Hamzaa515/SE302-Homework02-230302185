class HomePage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('h1');
  }

  async open() {
    await this.page.goto('/');
  }

  async isLoaded() {
    return await this.pageTitle.isVisible();
  }
}

module.exports = HomePage;
