// ================= DECLARE =================
var cowsay = require('cowsay');


// ================= WEBDRIVER SETTINGS =================
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  maxInstances: 1,

  // Browser Captabilities 
  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [
    {
      browserName: 'chrome',
      'chromeOptions': {
        'args': [
          '--start-maximized',
          '--incognito',
          'disable-infobars'
        ]
      }
    },
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        'args': [
          '--safe-mode'
        ]
      }
    }
  ],

  //{
  //Internet Explorer
  //browserName: 'internet explorer'
  //},

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },


// ================= SPECS =================
  specs: '../Test/simpletest-1.js',


  //On start up do something
  onPrepare: function () {

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

  }
}