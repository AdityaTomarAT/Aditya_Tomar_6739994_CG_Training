import { test, expect } from '@playwright/test';

test('Auto retry assertions demo', async ({ page }) => {

  await page.goto('https://playwright.dev');

  const getStarted = page.locator('text=Get started');
  const searchBox = page.locator('.DocSearch-Button');
  const navBar = page.locator('.navbar');
  const heading = page.locator('h1').first();

  await expect(getStarted).toBeAttached()

  await expect(getStarted).toBeVisible()

  await expect(getStarted).toBeEnabled()

  await expect(searchBox).toBeEditable()

  await expect(navBar).toContainText('Playwright')

  await expect(heading).toContainClass('hero__title')

  await expect(getStarted).toBeInViewport()

  await expect(navBar).toBeVisible()

  await expect(navBar).toBeEmpty({ timeout: 1 }).catch(()=>{})

  await expect(page).toHaveTitle(/Playwright/)

  await expect(page).toHaveURL(/playwright.dev/)

})