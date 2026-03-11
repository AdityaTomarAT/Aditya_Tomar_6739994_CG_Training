import test from "@playwright/test";

test("get by methods", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username",{exact:true}).fill("student")
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()
    // await page.getByRole("textbox", { name: "username", exact: true }).fill("Florence")
    // await page.getByPlaceholder("Enter your name")
    // await page.getByTestId("")
    await page.getByLabel("Username",{exact:true}).type("student")    
    await page.getByLabel("Username",{exact:true}).type("student1")
    await page.getByLabel("Password").fill("Password123")
    await page.getByLabel("Password").fill("Password1234")
})