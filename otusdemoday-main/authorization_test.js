 const playwright = require ('playwright');

Feature('authorization');

Scenario('test something', async ({ I }) => {
    const browserType = ['chromium'];
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginButton = page.locator('.is-primary');
    const passwordField = page.locator('#password');
    const profileNameField = page.locator('.user > .dropdown > .dropdown-trigger > .button > .username');
    const usernameField = page.locator('#username');
    await page.goto('https://try.vikunja.io/login');
    await usernameField.click();
    await usernameField.type('demo');
    await passwordField.click();
    await passwordField.type('demo');
    await loginButton.click();
    console.log(await profileNameField.innerText());
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
});
