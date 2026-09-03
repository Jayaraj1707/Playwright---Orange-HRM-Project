export class LoginPageLocator {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    this.username = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });

    this.errorMessage = this.page.getByText("Invalid credentials");
    this.requiredMessage = this.page.getByText("Required");
    this.emptyFields = this.page.locator(
      "//span[text()='Required']/parent::div//input[@name='password']",
    );

    //Naviagte to the Forgot password page
    this.forgotPasswordLink = this.page.getByText("Forgot your password?");
    this.resetPasswordModal = this.page.locator(
      "//h6[text()='Reset Password']",
    );
    this.loginPage = this.page.locator("//h5[text()='Login']");
    this.cancelButton = this.page.getByRole("button", { name: "Cancel" });
    this.resetpasswordButton = this.page.getByRole("button", {
      name: "Reset Password",
    });
    this.resetPasswordSuccessMessage = this.page.getByText(
      "Reset Password link sent successfully",
    );
  }
}
