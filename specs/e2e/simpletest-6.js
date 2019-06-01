// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var loginElements = require('../../elements/web/login-elements');
var navigation = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation.navtosite();

    });
});

describe('Login Page', () => {
    it('Navigate to page - correct URL', async () => {
        navigation.navtopage(pageElements.formAuthentication)

    });

    it('Login Page - Enter incorrect details', async () => {

        loginElements.input_username.click();
        loginElements.input_username.sendKeys('Incorrect Username');
        
        loginElements.input_password.click();
        loginElements.input_password.sendKeys('Incorrect Password');

        loginElements.btn_login.click();

        expect(loginElements.header_error.getText()).toContain('Your username is invalid!');

    });

    it('Login Page - Enter correct username and incorrect password', async () => {

        loginElements.input_username.click();
        loginElements.input_username.sendKeys('tomsmith');
        
        loginElements.input_password.click();
        loginElements.input_password.sendKeys('Incorrect Password');

        loginElements.btn_login.click();

        expect(loginElements.header_error.getText()).toContain('Your password is invalid!');

    });

    it('Login Page - Enter no username or password', async () => {

        loginElements.btn_login.click();

        expect(loginElements.header_error.getText()).toContain('Your username is invalid!');

    });

    it('Login Page - Enter correct details and login', async () => {

        loginElements.input_username.click();
        loginElements.input_username.sendKeys('tomsmith');
        
        loginElements.input_password.click();
        loginElements.input_password.sendKeys('SuperSecretPassword!');

        loginElements.btn_login.click();

        expect(loginElements.header_error.getText()).toContain('You logged into a secure area!');

    });

    it('Login Page - After logging in logout', async () => {

        loginElements.btn_logout.click();

        expect(loginElements.header_error.getText()).toContain('You logged out of the secure area!');
        expect(loginElements.btn_login.isDisplayed()).toBe(true);

    });
});
