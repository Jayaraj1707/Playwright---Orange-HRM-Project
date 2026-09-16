import { test, expect } from "@playwright/test";
import { AddEmployeePage } from "../pages/addEmployeePage";
import addEmployeeData from "../utils/addEmployee_data.json";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test ("Cancel adding a new employee", async({page}) => {
  const addEmployee = new AddEmployeePage(page);
  await addEmployee.cancelEmployeeCreation();
  await expect(addEmployee.employeeLocators.isEmployeePageDisplayed).toBeVisible();
})

test("Create a new employee with the FirstName field left empty", async({page}) => {
  const addEmployee = new AddEmployeePage(page);
  await addEmployee.createEmployee("", addEmployeeData.lastname, addEmployeeData.employee_Id);
  await expect(addEmployee.employeeLocators.errorMessage).toBeVisible();
})

test("Create a new employee with the LasttName field left empty", async({page}) => {
  const addEmployee = new AddEmployeePage(page);
  await addEmployee.createEmployee(addEmployeeData.firstname, "", addEmployeeData.employee_Id);
  await expect(addEmployee.employeeLocators.errorMessage).toBeVisible();
})