import { expect } from "@playwright/test";
import { AddEmployeeLocator } from "../locators/addEmployeeLocator";
import addEmployeeData from "../utils/addEmployee_data.json";

export class AddEmployeePage {
  /** @param {import ('@playwright/test').Page}page */
  // /** @param {import('@playwright/test').Page} page */


  constructor(page) {
    this.page = page;
    this.employeeLocators = new AddEmployeeLocator(page);
  }

  async navigateToemployeeLocators() {
    await this.employeeLocators.pimwmodule.click();
    await expect(this.employeeLocators.isEmployeePageDisplayed).toBeVisible();
    await this.employeeLocators.addEmployeewidget.click();
    await expect(this.employeeLocators.isAddEmployeeDisplayed).toBeVisible();
  }

  async fillAddEmployeeForm(firstName, lastName, employee_Id){
    await this.employeeLocators.firtName.fill(firstName);
    await this.employeeLocators.lastName.fill(lastName);
    await this.employeeLocators.employeeId.fill(employee_Id);
  }

  async cancelEmployeeCreation(){
    await this.navigateToemployeeLocators();
    await this.fillAddEmployeeForm(addEmployeeData.firstname, addEmployeeData.lastname, addEmployeeData.employee_Id);
    await this.employeeLocators.cancelButton.click();
  }

  async createEmployee(firstName, lastName, employeeId){
    await this.navigateToemployeeLocators();
    await this.fillAddEmployeeForm(firstName, lastName, employeeId);
    await this.employeeLocators.saveButton.click();
  }
}

      