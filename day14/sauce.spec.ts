import test from "@playwright/test";

test("get by methods", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    // await page.getByLabel("Username",{exact:true}).fill("student")
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()
    await page.getByRole("textbox", { name: "username", exact: true }).fill("Florence")
    await page.getByPlaceholder("Enter your name")
    await page.getByTestId("")
})