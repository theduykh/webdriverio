require('@babel/register');

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  services: ['selenium-standalone'],
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
  }],
  specs: [
    './src/specs/TestSpec001.js',
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  logLevel: 'trace',
  bail: 0,
  baseUrl: 'https://the-internet.herokuapp.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  outputDir: './report/',
  reporters: [
    'spec',
    ['junit', {
      outputDir: './report/junit/',
      outputFileFormat(opts) {
        return `results-${opts.cid}.xml`;
      },
    }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  seleniumInstallArgs: {
    version: '3.141.5',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        version: '75.0.3770.8',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
    }
  },
  seleniumLogs: './report/selenium-standalone.log',
  seleniumArgs: {
    version: '3.141.5',
    drivers: {
      chrome: {
        version: '75.0.3770.8',
        arch: process.arch,
      }
    }
  },
  before() {
    browser.setWindowSize(1360, 768);
  },
};
