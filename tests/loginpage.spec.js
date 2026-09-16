import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { creds } from "../utils/credentials";
import logindata from "../utils/login_data.json";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("Login with valid credentials", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.login(creds.loginusername, creds.password);
  await expect(page).toHaveURL(/dashboard/);
});

test("Login with Invalid credentials", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.login(logindata.Invalid.username, logindata.Invalid.password);
  await expect(loginpage.locators.errorMessage).toBeVisible();
});

test("Login with an invalid username and a valid password", async ({
  page,
}) => {
  const loginpage = new LoginPage(page);
  await loginpage.login(logindata.Invalid.username, creds.password);
  await expect(loginpage.locators.errorMessage).toBeVisible();
});

test("Login with a valid username and an invalid password", async ({
  page,
}) => {
  const loginpage = new LoginPage(page);
  await loginpage.login(creds.loginusername, logindata.Invalid.password);
  await expect(loginpage.locators.errorMessage).toBeVisible();
});

test("Login with an empty username and a valid password", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.login("", creds.password);
  await expect(loginpage.locators.requiredMessage).toBeVisible();
});

test("Login with a valid username and an empty password", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.login(creds.loginusername, "");
  await expect(loginpage.locators.requiredMessage).toBeVisible();
});

test("Login with an empty username and an empty password", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.login("", "");
  await expect(loginpage.locators.emptyFields).toBeVisible();
});

test("Submit Forgot Password with an empty username", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.submitForgotPassword("");
  await expect(loginpage.locators.requiredMessage).toBeVisible();
});

test("Submit Forgot Password with a valid username", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.submitForgotPassword(logindata.ForgotPassword);
  await expect(loginpage.locators.resetPasswordSuccessMessage).toBeVisible();
});

test("Cancel Forgot Password with a valid username", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.cancelForgotPassword(logindata.ForgotPassword);
  await expect(loginpage.locators.loginPage).toBeVisible();
});
