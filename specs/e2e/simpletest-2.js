// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var addRemoveElements = require('../../elements/web/add-remove-elements');
var navigation = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', function () {
  it('Navigate to the testing site', function (done) {
    navigation.navtosite();

    done();

  });
});

describe('Add/Remove Elements', function () {
  it('Navigate to page - correct URL', function (done) {
    navigation.navtopage(pageElements.addRemoveElements)

    done();

  });

  it('Add Element - check element has been added', function (done) {

    browser.wait(protractor.ExpectedConditions.elementToBeClickable(addRemoveElements.add_element));
    
    addRemoveElements.add_element.click();

    expect(addRemoveElements.added_element.isDisplayed()).toBe(true);

    done();
  });

  
  it('Add Element - Remove added element', function (done) {

    browser.wait(protractor.ExpectedConditions.elementToBeClickable(addRemoveElements.added_element));
    
    addRemoveElements.added_element.click();

    browser.wait(protractor.ExpectedConditions.invisibilityOf(addRemoveElements.added_element));

    expect(addRemoveElements.added_element.isPresent()).toBe(false);

    done();
  });


});
