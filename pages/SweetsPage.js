class SweetsPage {
  constructor(page) {
    this.page = page;
    this.browseHeading = page.locator('h2', { hasText: 'Browse sweets' });
    this.addButtons = page.locator('button', { hasText: 'Add to Basket' });
  }

  async open() {
    await this.page.goto('/');
  }

  async isLoaded() {
    return await this.browseHeading.isVisible();
  }

  async addFirstItemToBasket() {
    await this.addButtons.first().click();
  }

  async addButtonCount() {
    return await this.addButtons.count();
  }
}

module.exports = SweetsPage;

