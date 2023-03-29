const { test, expect, chromium } = require('@playwright/test');
const home = require('../pages/home');
const BasePage = require('../pages/BasePage');

test.describe('home page tests', () => {
  let browser = null;
  let context = null;
  let page = null;
  let homePage = null;
  let basePage = null;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new home(page);
    basePage = new BasePage(page);
    await basePage.navigate();
  });

  test.afterAll(async () => {
    await context.close();
    await browser.close();
  });

  test('select a country', async () => {
    await homePage.selectCountry();
    await page.waitForSelector(homePage.litePackage);
    await page.waitForSelector(homePage.liteCurrency);
    const litePackageElement = await homePage.page.$(homePage.litePackage);
    const liteCurrencyElement = await homePage.page.$(homePage.liteCurrency);
    const litePlan = await litePackageElement.textContent();
    const litePackage = await liteCurrencyElement.textContent();
     expect(litePlan).toContain('Lite');
     expect (litePackage).toContain ('USD');
  });
});