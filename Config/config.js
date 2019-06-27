// ================= DECLARE =================
const cowsay = require('cowsay');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// ================= WEBDRIVER SETTINGS =================
exports.config = {
  framework: 'jasmine',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    print: function () { }
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  maxInstances: 1,
  maxSessions: 1, // Number of browsers which can run at any one time.

  // Browser Captabilities 
  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [

    //Chrome
    {
      browserName: 'chrome',
      'chromeOptions': {
        'args': ['--start-maximized', '--incognito', 'disable-infobars']
      }
    },
    //Firefox
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {

        'args': ['--safe-mode'],
        "prefs": {

          //Disable the download prompt
          'browser.download.manager.alertOnEXEOpen': false,
          'browser.download.manager.closeWhenDone': true,
          'browser.download.manager.focusWhenStarting': false,
          'browser.download.manager.showWhenStarting': false,
          'browser.helperApps.alwaysAsk.force': false,
          'browser.download.manager.showAlertOnComplete': false,
          'browser.download.manager.useWindow': false,
          "browser.helperApps.neverAsk.saveToDisk": 'text/plain,text/csv,application/csv;text/comma-separat‌​ed-values;application/excel;application/octet-stream;application/xlsx;application/xls;application/vnd.ms-excel;application/vnd.ms-excel.addin.macroenabled.12;application/vnd.ms-excel.sheet.binary.macroenabled.12;application/vnd.ms-excel.template.macroenabled.12;application/vnd.ms-excel.sheet.macroenabled.12;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        }
      }
    },

    //To Enable the Edge driver manually open the Edge driver 
    // //Edge
    // {
    //   browserName: 'MicrosoftEdge',
    //   seleniumAddress: 'http://localhost:17556/',
    //   maxInstances: 1,
    // },

    //Leaving this off as the IE driver and IE are so broken
    //Internet Explorer
    // {
    //   browserName: 'internet explorer',
    //   ignoreProtectedModeSettings: true,
    // }
  ],

  // ================= SPECS =================
  specs: '../specs/e2e/*.js',

  exclude: ['../specs/e2e/simpletest-9*'], //exclude this test as this is running SQL commands locally


  suites: {

    simpletest1: '../specs/e2e/simpletest-1*',
    simpletest2: '../specs/e2e/simpletest-2*',
    simpletest3: '../specs/e2e/simpletest-3*',
    simpletest4: '../specs/e2e/simpletest-4*',
    simpletest5: '../specs/e2e/simpletest-5*',
    simpletest6: '../specs/e2e/simpletest-6*',
    simpletest7: '../specs/e2e/simpletest-7*',
    simpletest8: '../specs/e2e/simpletest-8*',
    simpletest9: '../specs/e2e/simpletest-9*',

  },

  //On start up do something
  onPrepare: function () {

    //Ignore angular = TRUE
    browser.ignoreSynchronization = true;

    console.log(cowsay.say({
      text: "Automated test are running!",
      e: "oO",
      T: "U",
    }));

    // Maximize window for Firefox 
    browser.manage().window().maximize();

    //Jasmine spec report for clean reporting of test
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },

  //When complete do something
  onComplete: function () {
    browser.executeScript('window.localStorage.clear();');
    browser.executeScript('window.sessionStorage.clear();');
    browser.driver.manage().deleteAllCookies();
    browser.quit();
  }
}
