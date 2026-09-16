import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { creds } from "../utils/credentials";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  const loginpage = new LoginPage(page);

  await setup.step("login with valid credentials", async () => {
    await loginpage.login(creds.loginusername, creds.password);
  });

  await setup.step("assert dashboard reached", async () => {
    await expect(page).toHaveURL(/dashboard/);
  });

  await page.context().storageState({ path: authFile });
});
