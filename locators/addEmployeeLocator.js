export class AddEmployeeLocator {
  /** @param {import('@playwright/test').Page} page */

  constructor(page) {
    this.page = page;

    //Create Employee
    this.pimwmodule = this.page.locator("//span[text()='PIM']");
    this.isEmployeePageDisplayed = this.page.getByText("Employee Information");
    this.employeelistWidget = this.page.getByText("Employee List");
    this.addEmployeewidget = this.page.getByText("Add Employee");
    this.isAddEmployeeDisplayed = this.page.locator(
      "//h6[text()='Add Employee']",
    );
    this.firtName = this.page.getByRole("textbox", { name: "First Name" });
    this.lastName = this.page.getByRole("textbox", { name: "Last Name" });
    this.employeeId = this.page.locator("//label[normalize-space()='Employee Id']/ancestor::div[contains(@class,'oxd-input-group')]//input");
    this.uploadimage = this.page.locator(".employee-image-wrapper");
    this.saveButton = this.page.getByRole("button", { name: "Save" });
    this.cancelButton = this.page.getByRole("button", { name: "Cancel" });
    this.errorMessage = this.page.getByText("Required");

    //Enable Create login Toggle & Create User
    this.createLoginToggle = this.page.locator("oxd-switch-wrapper");
  }
}
