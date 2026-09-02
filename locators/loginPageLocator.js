export class LoginPageLocator {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    this.username = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }
}
