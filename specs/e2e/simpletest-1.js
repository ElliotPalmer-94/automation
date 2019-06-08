// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const ab_testing_elements = require('../../elements/web/ab-testing-elements');
const navigation_helper = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
  it('Navigate to the testing site', async () => {
    navigation_helper.navtosite();

  });
});

describe('AB Testing', () => {
  it('Navigate to page - correct URL', async () => {
    navigation_helper.navtopage(page_elements.abTesting)

  });

  it('Check headings on page', async () => {

    ab_testing_elements.contents.getText().then((text) => {

      if (text.includes('A/B Test Control')) {

        expect(text).toContain(ab_testing_elements.heading_variation1);

      } else {

        expect(text).toContain(ab_testing_elements.heading_variation2);

      }

    });
  });

  it('Check paragraph on page', async () => {

    ab_testing_elements.contents.getText().then((text) => {

      expect(text).toContain(ab_testing_elements.paragraph)

    });

  });

});
