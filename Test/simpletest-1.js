// ================= REQUIRE =================
var pageElements = require('../Elements/page-elements');
var abTestingElements = require('../Elements/ab-testing-elements');
var helper = require('../Helpers/helpers');

// ================= TEST =================
describe('Test Setup', function () {
  it('Navigate to the testing site', function (done) {

    helper.navtosite();

    done();

  });
});

describe('AB Testing', function () {
  it('Navigate to page - correct URL', function (done) {

    //Select the A/B Testing link
    pageElements.abTesting.click();

    //Get current URL and check this is the correct page
    browser.getCurrentUrl().then(function (url) {
      browser.wait(protractor.ExpectedConditions.urlContains(url), 5000, 'Did not navigate to URL').then(function (result) {
        expect(result).toEqual(true);

      });
    });

    done();

  });

  it('Check text on page', function (done) {

    browser.sleep(5000); ///// <-- Need to remove added for edge

    var heading1 = abTestingElements.heading_variation1;
    var heading2 = abTestingElements.heading_variation2;
    var parargraph = abTestingElements.parargraph;

    abTestingElements.contents.getText().then(function (text) {

      if (text.includes('A/B Test Control')) {

        expect(text).toContain(heading1);
        expect(text).toContain(parargraph);

      } else {

        expect(text).toContain(heading2);

      }
    });

    done();
  });


});
