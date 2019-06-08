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

    seleniumAddress: 'http://localhost:4723/wd/hub',
    maxInstances: 1,
    maxSessions: 1,

    // Browser Captabilities 
    // Capabilities to be passed to the webdriver instance.

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '9.0',
        deviceName: 'Pixel',
        adbPort: 5037,
        chromedriverUseSystemExecutable: true
    },

    baseUrl: 'http://10.0.2.2:8000',

    // ================= SPECS =================
    specs: '../specs/e2e/*.js',

    suites: {

        simpletest1: '../specs/e2e/simpletest-1*',
        // simpletest2: '../specs/e2e/simpletest-2*',
        // simpletest3: '../specs/e2e/simpletest-3*',
        // simpletest4: '../specs/e2e/simpletest-4*',
        // simpletest5: '../specs/e2e/simpletest-5*',
        // simpletest6: '../specs/e2e/simpletest-6*',
        // simpletest7: '../specs/e2e/simpletest-7*',
        // simpletest8: '../specs/e2e/simpletest-8*',

    },

    //On start up do something
    onPrepare: function () {

        console.log(cowsay.say({
            text: "Automated test are running!",
            e: "oO",
            T: "U",
        }));

        //Jasmine spec report for clean reporting of test
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },

    //When complete do something
    onComplete: function () {

    }
}