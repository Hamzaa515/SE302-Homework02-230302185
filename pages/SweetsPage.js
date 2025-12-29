class SweetsPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.card');
    this.firstAddButton = this.products.first().locator('button');
  }

  async open() {
    await this.page.goto('/sweets');
    await this.products.first().waitFor({ state: 'visible' });
  }

  async addFirstItemToBasket() {
    await this.open();
    await this.firstAddButton.click();
  }

  async addButtonCount() {
    return await this.page.locator('.card button').count();
  }
}

module.exports = SweetsPage;

