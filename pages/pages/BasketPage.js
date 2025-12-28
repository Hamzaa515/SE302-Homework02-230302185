class BasketPage {
  constructor(page) {
    this.page = page;

    this.totalLabel = page.locator('text=Total');
    this.emptyBasketBtn = page.locator('button', { hasText: 'Empty Basket' });

    this.promoCodeInput = page.locator('input[placeholder="Promo code"]');
    this.redeemBtn = page.locator('button', { hasText: 'Redeem' });

    this.checkoutBtn = page.locator('button', { hasText: 'Continue to checkout' });

    this.requiredMessages = page.locator('text=Required');
    this.promoInvalidMsg = page.locator('text=Invalid promo code');
  }

  async open() {
    await this.page.goto('/basket');
  }

  async isLoaded() {
    return await this.totalLabel.isVisible();
  }

  async emptyBasket() {
    await this.emptyBasketBtn.click();
  }

  async redeemPromo(code) {
    await this.promoCodeInput.fill(code);
    await this.redeemBtn.click();
  }

  async continueToCheckout() {
    await this.checkoutBtn.click();
  }

  async requiredCount() {
    return await this.requiredMessages.count();
  }
}

module.exports = BasketPage;
