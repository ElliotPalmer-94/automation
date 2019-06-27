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

    // Android Captabilities 
    // Capabilities to be passed to the webdriver instance.

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '8.1',
        deviceName: 'Pixel',
        automationName: 'UiAutomator2',
        chromedriverExecutableDir: process.cwd() + '\\resources\\chromedrivers' //path to chromedrviers

    },

    baseUrl: 'http://10.0.2.2:8000',

    // ================= SPECS =================
    specs: '../specs/e2e/*.js',

    exclude: ['../specs/e2e/simpletest-5*','../specs/e2e/simpletest-8*','../specs/e2e/simpletest-9*'], //exclude these 2 test as these deal with uploading/removing media and SQL locally

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