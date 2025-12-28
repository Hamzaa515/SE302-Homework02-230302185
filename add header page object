class Header {
  constructor(page) {
    this.page = page;
    this.sweetsLink = page.locator('a[href="/"]');
    this.aboutLink = page.locator('a[href="/about"]');
    this.loginLink = page.locator('a[href="/login"]');
    this.basketLink = page.locator('a[href="/basket"]');
  }

  async goToSweets() {
    await this.sweetsLink.click();
  }

  async goToAbout() {
    await this.aboutLink.click();
  }

  async goToLogin() {
    await this.loginLink.click();
  }

  async goToBasket() {
    await this.basketLink.click();
  }
}

module.exports = Header;
