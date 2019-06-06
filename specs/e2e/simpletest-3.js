// ================= REQUIRE =================
const basic_auth_elements = require('../../elements/web/basic-auth-elements');
const navigation_helper = require('../../helpers/navigation-helpers');
const settings = require('../../config/settings');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation_helper.navtosite();

    });
});

describe('Basic Auth', () => {
    it('Navigate to page - pass correct username and password via HTTP', async () => {

        //Passing the username and password through HTTP as the auth popup is hidden in the HTML
        browser.get('https://' + settings.username + ':' + settings.password + '@the-internet.herokuapp.com/basic_auth');

        basic_auth_elements.contents.getText().then(function (text) {
            expect(text).toContain(basic_auth_elements.parargraph);
        });

    });
});