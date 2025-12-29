class SweetsPage {
  constructor(page) {
    this.page = page;

    this.productCards = page.locator('.card');
    this.actionControls = page.locator('.card button, .card a');
  }

  async open() {
    await this.page.goto('/sweets', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle');
    await this.productCards.first().waitFor({ state: 'visible' });
    await this.actionControls.first().waitFor({ state: 'visible' });
  }

  async addFirstItemToBasket() {
    await this.open();
    await this.actionControls.first().click();
  }

  async addButtonCount() {
    return await this.actionControls.count();
  }
}

module.exports = SweetsPage;
