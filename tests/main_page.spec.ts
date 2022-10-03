const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    // Go to url
    await page.goto('https://playwright.dev/');
    // Get Selector
    const name = await page.innerText('.navbar__title');
    // Assert Selector value
    expect(name).toBe('Playwright');
})