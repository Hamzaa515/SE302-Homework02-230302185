class BasketPage {
  constructor(page) {
    this.page = page;

    this.totalLabel = page.getByText('Total (GBP)');
    this.emptyBasketLink = page.getByText('Empty Basket', { exact: true });

    this.checkoutBtn = page.locator('button', { hasText: 'Continue' });

    this.requiredMessages = page.locator('text=/required/i');
  }

  async open() {
    await this.page.goto('/basket');
  }

  async continueToCheckout() {
    await this.checkoutBtn.click();
  }

  async requiredFieldCount() {
    return await this.requiredMessages.count();
  }
}

module.exports = BasketPage;
