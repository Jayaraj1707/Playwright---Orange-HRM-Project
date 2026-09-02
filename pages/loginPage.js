import { expect } from "@playwright/test";
import { LoginPageLocator } from "../locators/loginPageLocator";
import { creds } from "../utils/credentials";

export class LoginPage {
  /** @param {import('@playwright/test').Page} page */

  constructor(page) {
    this.page = page;
    this.locators = new LoginPageLocator(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async loginWithValidCreds() {
    await this.goto();
    await this.locators.username.fill(creds.loginusername);
  }
}
