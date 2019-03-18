// ================= DECLARE =================
var cowsay = require('cowsay');


// ================= WEBDRIVER SETTINGS =================
exports.config = {
  framework: 'jasmine',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  maxInstances: 1,

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
    // //Firefox
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        'args': ['--safe-mode']
      }
    },
    // //Edge
    {
      browserName: 'MicrosoftEdge',
      seleniumAddress: 'http://localhost:17556/',
      maxInstances: 1,
    },
    //Internet Explorer
    // {
    //   browserName: 'internet explorer',
    //   ignoreProtectedModeSettings: true,
    // }
  ],

  // ================= SPECS =================
  specs: '../Test/simpletest-1.js',


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

  },

  //When complete do something
  onComplete: function () {
    browser.quit();
  }
}