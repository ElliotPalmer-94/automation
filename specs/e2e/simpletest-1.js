// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var abTestingElements = require('../../elements/web/ab-testing-elements');
var navigation = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', function () {
  it('Navigate to the testing site', function (done) {
    navigation.navtosite();

    done();

  });
});

describe('AB Testing', function () {
  it('Navigate to page - correct URL', function (done) {
    navigation.navtopage(pageElements.abTesting)

    done();

  });

  it('Check text on page', function (done) {

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
