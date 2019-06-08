
//Commands:
//backstop test --configPath=config/backstop-config.js --pathfile=backstop-test || Will run backstop and test against the references set
//backstop reference --configPath=config/backstop-config.js --pathfile=backstop-test || Will run backstop and create a reference set of screenshots
//backstop approve --configPath=config/backstop-config.js --pathfile=backstop-test || Will run backstop and will update your reference files with the results from your last test. Future tests are compared against your most recent approved test screenshots.

//HTML Report:
//If you want to view a HTML report of the last test go to: ./backstop_data/html_report/index.html
//Some test will always fails as the screens are dynamic or random which will be picked up from backstop.js

var arguments = require('minimist')(process.argv.slice(2));
var pathConfig = require('../specs/ui/'+arguments.pathfile+'.js');
var scenarios = pathConfig.array;

module.exports = 

{
    "id": "Backstop Test",
    "viewports": [
      {
        "label": "Desktop",
        "width": 1920,
        "height": 1080
      },
      {
        "label": "Galaxy S5",
        "width": 360,
        "height": 640
      },
      {
        "label": "Pixel 2",
        "width": 411,
        "height": 731
      },
      {
        "label": "iPhone X",
        "width": 375,
        "height": 812
      },
      {
        "label": "iPad Pro",
        "width": 1024,
        "height": 1366
      }
    ],

    "scenarios":
    scenarios,
    
    "paths": {
      "bitmaps_reference": "./backstop_data/bitmaps_reference",
      "bitmaps_test": "./backstop_data/bitmaps_test",
      "engine_scripts": "./backstop_data/engine_scripts",
      "html_report": "./backstop_data/html_report",
      "ci_report": "./backstop_data/ci_report"
    },
    "report": ["CI"],
    "engine": "puppeteer",
    "engineOptions": {
      "args": ["--no-sandbox"]
    },

    "misMatchThreshold": 0.4,
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
    
  }
  