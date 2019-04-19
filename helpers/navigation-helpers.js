const screenurls = require("./screenurl-helpers");

module.exports = {

    navtosite: async function () {
        
        browser.get(screenurls.the_internet_url);

        browser.wait(protractor.ExpectedConditions.urlContains(screenurls.the_internet_url), 5000, 'Did not navigate to URL').then(function(result) {
            expect(result).toEqual(true);
        });
    },

    navtopage: async function (page) {

    //Select page
    page.click();

    //Get current URL and check this is the correct page
    browser.getCurrentUrl().then(function (url) {
      browser.wait(protractor.ExpectedConditions.urlContains(url), 5000, 'Did not navigate to URL').then(function (result) {
        expect(result).toEqual(true);

      });
    });

    }
}







