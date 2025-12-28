class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.emailValidation = page.getByText(/valid email/i);
    this.passwordValidation = page.getByText(/valid password/i);
  }

  async open() {
    await this.page.goto('/login');
  }

  async submitEmpty() {
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
