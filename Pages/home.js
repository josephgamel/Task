const { chromium } = require('playwright');
const BasePage = require ('./BasePage');
class home extends BasePage{
  constructor(page) {
    super(page);
    this.countrySelectionButton  = '//*[@class="arrow"][@id="arrow"]';
    this.countryName = '#ae' ; 
    this.litePackage = '#name-lite';
    this.liteCurrency = '#currency-lite';
  }


  async selectCountry() {
    await this.page.waitForSelector(this.countrySelectionButton);
    await this.page.click(this.countrySelectionButton);
    await this.page.waitForSelector(this.countryName);
    await this.page.click(this.countryName);

  
  }



  async close() {
    await this.browser.close();
  }
}

module.exports = home;