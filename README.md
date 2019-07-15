# Introduction

A repo focused on expadning my skills, trying out new tools.

<p align="center">
  <img src="https://media.giphy.com/media/UtsfKvIicVzDZ47KPy/giphy.gif"></img>
</p>

<p align="center">
  Mobile web/Mobile native app/Desktop testing
  </p>
<p align="center">
  <img src="https://media.giphy.com/media/IbOOE3MK6IZu3pqcUD/giphy.gif"></img>
    <img src="https://media.giphy.com/media/Yl51C5o6G4PavkkEtU/giphy.gif"></img>
</p>


# Installation
# ----------Packages----------
Install packages

```
npm i
```
# ----------Protractor----------
Install protractor: https://www.npmjs.com/package/protractor

```
npm i -g protractor
```
After installing protractor update the webdriver-manager to the lastest version.
*NOTE* only Chrome and Firefox will be installed by default

```
webdriver-manager update
```
*(Optional) if you want to also install Internet explorer or Edge*.
In order to run Edge the driver must be called manually unlike chrome, firefox and ie.

```
webdriver-manager update --ie
webdriver-manager update --edge
```
How to start up the Edge driver
```
webdriver-manager start --edge "C:\path_to_the_driver\MicrosoftWebDriver.exe"
OR
Manually open the driver.exe in the <download path>
```

Now run the following command to run up the webdriver server

```
webdriver-manager start
```
If you want more information about protractor follow this URL: http://www.protractortest.org/#/

# ----------BackstopJS----------
Install BackstopJS: https://github.com/garris/BackstopJS

```
npm i -g backstopjs
```

# ----------Appium----------
Install Appium: https://github.com/appium/appium/blob/master/docs/en/about-appium/getting-started.md

```
npm install -g appium
```

# Running Test
# ----------Run E2E Test----------
To run the E2E test while in the following directory `automation` run the following:

```
protractor config/config.js
```

To run a particular E2E test while in the following directory `automation` for example running `simpletest1` run the following:

```
protractor config/config.js --suite simpletest1
```

To run a android web E2E test while in the following directory `automation` run the following:

```
protractor config/android-browser-config.js
```

To run a android native app E2E test while in the following directory `automation` run the following:

```
./node_modules/.bin/wdio Config/android-app-config.js
```

# ----------Run UI Test----------
To run the UI test while in the following directory `automation` run the following:

Will run backstop and test against the references set
```
backstop test --configPath=config/backstop-config.js --pathfile=backstop-test
```
Will run backstop and create a reference set of screenshots
```
backstop reference --configPath=config/backstop-config.js --pathfile=backstop-test
```
Will run backstop and will update your reference files with the results from your last test. Future tests are compared against your most recent approved test screenshots.
```
backstop approve --configPath=config/backstop-config.js --pathfile=backstop-test
```
