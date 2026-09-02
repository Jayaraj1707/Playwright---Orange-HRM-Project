import {test} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";


test.describe("Login the Application", async() => {
    test("Login with valid creds", async({page}) => {
        const loginpage = new LoginPage(page);
        await loginpage.loginWithValidCreds();
    })
})