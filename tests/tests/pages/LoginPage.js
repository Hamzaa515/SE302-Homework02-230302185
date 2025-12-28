class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.validationEmail = page.getByText('Please enter a valid email address.');
    this.validationPassword = page.getByText('Please enter a valid password.');
  }

  async open() {
    await this.page.goto('/login');
  }

  async submitEmpty() {
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;
