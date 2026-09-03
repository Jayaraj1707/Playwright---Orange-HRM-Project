import { expect } from "@playwright/test";
import { LoginPageLocator } from "../locators/loginPageLocator";

export class LoginPage {
  /** @param {import('@playwright/test').Page} page */

  constructor(page) {
    this.page = page;
    this.locators = new LoginPageLocator(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.goto();
    await this.locators.username.fill(username);
    await this.locators.password.fill(password);
    await this.locators.loginButton.click();
  }

  async openForgotPasswordModal() {
    await this.goto();
    await this.locators.forgotPasswordLink.click();
    await expect(this.locators.resetPasswordModal).toBeVisible();
  }

  async submitForgotPassword(password) {
    await this.openForgotPasswordModal();
    await this.locators.username.fill(password);
    await this.locators.resetpasswordButton.click();
  }

  async cancelForgotPassword(password) {
    await this.openForgotPasswordModal();
    await this.locators.username.fill(password);
    await this.locators.cancelButton.click();
  }
}
