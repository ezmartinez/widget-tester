const merge = require ('deepmerge');
const wdioConfig = require('./wdio.conf.js');

exports.config = merge(wdioConfig.config, {
  specs: ['./tests/e2e/groups/desktop/**/*.spec.js'],
  capabilities: [{
    maxInstances: 8,
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--no-sandbox',
        '--window-size=1280,800',
        '--disable-gpu',
      ] },
  }],
  logLevel: 'silent',
  coloredLogs: false,
  bail: 0,
  reporters: ['json'],
  reporterOptions: {
    outputDir: './tests/e2e/reports/',
  },
});
