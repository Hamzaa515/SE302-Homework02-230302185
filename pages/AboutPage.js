class AboutPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h1');
  }

  async isLoaded() {
    return await this.heading.isVisible();
  }
}

module.exports = AboutPage;
