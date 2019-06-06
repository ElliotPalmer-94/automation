// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const add_remove_elements = require('../../elements/web/add-remove-elements');
const click_helper = require('../../helpers/click-helpers');
const navigation_helper = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
  it('Navigate to the testing site', async () => {
    navigation_helper.navtosite();

  });
});

describe('Add/Remove Elements', () => {
  it('Navigate to page - correct URL', async () => {
    navigation_helper.navtopage(page_elements.addRemoveElements)

  });

  it('Add Element - check element has been added', async () => {

    add_remove_elements.add_element.click();

    expect(add_remove_elements.added_element.isDisplayed()).toBe(true);

  });


  it('Add Element - Remove added element', async () => {

    add_remove_elements.added_element.click();

    browser.wait(protractor.ExpectedConditions.invisibilityOf(add_remove_elements.added_element));

    expect(add_remove_elements.added_element.isPresent()).toBe(false);

  });

  it('Add Element - Able to add 10 elements', async () => {

    click_helper.clickElementMultipleTimes(10, add_remove_elements.add_element);

    element.all(by.css('[class="added-manually"]')).then ((array) => {
      if (array.length === 10) {

        array.forEach((item) => {
          expect(item.isPresent()).toBe(true);
  
        });

      } else {

        //Fail if array is greater than 10
        expect(array.length).toEqual(10);
        console.log('Array length (' + array.length + ') is greater than (10)'); 
      }


    });

  });

});
