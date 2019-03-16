var pageElements = require('../Elements/page-elements');
var helper = require('../Helpers/helpers');


describe('Test Setup', function () {
  it('Navigate to the testing site', function (done) {

      helper.navtosite();
      done();

  });
});