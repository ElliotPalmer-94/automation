// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var click_helper = require('../../helpers/click-helpers');
var addRemoveElements = require('../../elements/web/add-remove-elements');
var navigation = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
  it('Navigate to the testing site', async () => {
    navigation.navtosite();

  });
});

describe('Add/Remove Elements', () => {
  it('Navigate to page - correct URL', async () => {
    navigation.navtopage(pageElements.addRemoveElements)

  });

  it('Add Element - check element has been added', async () => {

    addRemoveElements.add_element.click();

    expect(addRemoveElements.added_element.isDisplayed()).toBe(true);

  });


  it('Add Element - Remove added element', async () => {

    addRemoveElements.added_element.click();

    browser.wait(protractor.ExpectedConditions.invisibilityOf(addRemoveElements.added_element));

    expect(addRemoveElements.added_element.isPresent()).toBe(false);

  });

  it('Add Element - Able to add 10 elements', async () => {

    click_helper.clickElementMultipleTimes(10, addRemoveElements.add_element);

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
