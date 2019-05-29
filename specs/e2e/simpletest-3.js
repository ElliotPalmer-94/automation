// ================= REQUIRE =================
var basicAuthElements = require('../../elements/web/basic-auth-elements');
var navigation = require('../../helpers/navigation-helpers');
var settings = require('../../config/settings');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation.navtosite();

    });
});

describe('Basic Auth', () => {
    it('Navigate to page - pass correct username and password via HTTP', async () => {

        //Passing the username and password through HTTP as the auth popup is hidden in the HTML
        browser.get('https://' + settings.username + ':' + settings.password + '@the-internet.herokuapp.com/basic_auth');

        basicAuthElements.contents.getText().then(function (text) {
            expect(text).toContain(basicAuthElements.parargraph);
        });

    });
});