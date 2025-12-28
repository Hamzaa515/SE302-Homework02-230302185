class BasketPage {
  constructor(page) {
    this.page = page;

    this.totalLabel = page.getByText('Total (GBP)');
    this.emptyBasketLink = page.getByText('Empty Basket', { exact: true });

    this.promoCodeInput = page.locator('input[placeholder="Promo code"]');
    this.redeemBtn = page.getByRole('button', { name: 'Redeem' });

    this.checkoutBtn = page.locator('button', { hasText: 'Continue' });

    this.requiredMessages = page.locator('text=Required');
    this.invalidPromoMessage = page.locator('text=Invalid');
  }

  async open() {
    await this.page.goto('/basket');
  }

  async isLoaded() {
    return await this.totalLabel.isVisible();
  }

  async emptyBasket() {
    await this.emptyBasketLink.click();
  }

  async redeemPromo(code) {
    await this.promoCodeInput.fill(code);
    await this.redeemBtn.click();
  }

  async continueToCheckout() {
    await this.checkoutBtn.click();
  }

  async requiredFieldCount() {
    return await this.requiredMessages.count();
  }
}

module.exports = BasketPage;
