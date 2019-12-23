const Page = require('../../../page');

class DemoPage extends Page {
  isLoaded() {
    this.open('demo');
    const pageTitle = browser.getTitle();
    expect(pageTitle).to.equal('Demo Page');
  }
  clickDemoButton() {
    browser.click('#demo-button');
  }
  validateAlertDisplay() {
    browser.waitUntil(() => browser.alertText() === 'Click using React!', 2000);
  }
  dismissAlert() {
    browser.alertDismiss();
  }
}

module.exports = new DemoPage();
