const merge = require('deepmerge');
const wdioConfig = require('./wdio.conf.js');

exports.config = merge(wdioConfig.config, {
  specs: ['./tests/e2e/groups/mobile/**/*.spec.js'],
  capabilities: [{
    maxInstances: 8,
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--window-size=360,620',
        '--user-agent=Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Mobile Safari/537.36',
      ] },
  }],
  logLevel: 'silent',
  coloredLogs: false,
  bail: 0,
  reporters: ['json'],
  reporterOptions: {
    outputDir: './tests/e2e/reports/',
  },
}, { clone: false });
