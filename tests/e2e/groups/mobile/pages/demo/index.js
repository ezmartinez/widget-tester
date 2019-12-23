const Page = require('../../../page');

class DemoPage extends Page {
  isLoaded() {
    this.open('demo');
    const pageTitle = browser.getTitle();
    expect(pageTitle).to.equal('Demo Page');
  }
}

module.exports = new DemoPage();
