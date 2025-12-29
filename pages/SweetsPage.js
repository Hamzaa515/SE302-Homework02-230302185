class SweetsPage {
  constructor(page) {
    this.page = page;
    this.addButtons = page.locator('button', { hasText: 'Add to Basket' });
  }

  async open() {
    await this.page.goto('/sweets');
  }

  async addFirstItemToBasket() {
    await this.addButtons.first().waitFor({ state: 'visible' });
    await this.addButtons.first().click();
  }

  async addButtonCount() {
    return await this.addButtons.count();
  }
}

module.exports = { SweetsPage };


