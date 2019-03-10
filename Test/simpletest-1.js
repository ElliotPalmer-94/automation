var pageElements = require('../Elements/page-elements');

// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function(done) {

      browser.get('http://juliemr.github.io/protractor-demo/');
  
      expect(browser.getTitle()).toEqual('Super Calculator');

      done();
    });

    it('A GO button should be displayed', function(done) {
      
      expect(pageElements.element.goButton.isDisplayed()).toBe(true);

      done();

    });
  });