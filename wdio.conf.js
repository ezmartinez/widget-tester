const chai = require('chai');
const chaiWebdriverIO = require('chai-webdriverio').default;

chai.use(chaiWebdriverIO);
global.chai = chai;

exports.config = {
  exclude: [],
  sync: true,
  deprecationWarnings: true,
  screenshotPath: './tests/e2e/errorshots/',
  baseUrl: 'dev.mercadolibre.com.ar:8443',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: '/',
  port: 4444,
  services: ['chromedriver'],
  reporters: ['spec'],
  chromeDriverArgs: [
    '--port=4444',
  ],
  framework: 'mocha',
  before: () => {
    global.expect = chai.expect;
    chai.Should();
  },
};
