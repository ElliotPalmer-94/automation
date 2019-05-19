// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var abTestingElements = require('../../elements/web/ab-testing-elements');
var navigation = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
  it('Navigate to the testing site', async () => {
    navigation.navtosite();

  });
});

describe('AB Testing', () => {
  it('Navigate to page - correct URL', async () => {
    navigation.navtopage(pageElements.abTesting)

  });

  it('Check text on page', async () => {

    var heading1 = abTestingElements.heading_variation1;
    var heading2 = abTestingElements.heading_variation2;
    var parargraph = abTestingElements.parargraph;

    abTestingElements.contents.getText().then((text) => {

      if (text.includes('A/B Test Control')) {

        expect(text).toContain(heading1);
        expect(text).toContain(parargraph);

      } else {

        expect(text).toContain(heading2);
        expect(text).toContain(parargraph);

      }

    });
  });

});
