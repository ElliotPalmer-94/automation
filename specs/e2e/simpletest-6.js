// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const login_elements = require('../../elements/web/login-elements');
const navigation_helper = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation_helper.navtosite();

    });
});

describe('Login Page', () => {
    it('Navigate to page - correct URL', async () => {
        navigation_helper.navtopage(page_elements.formAuthentication)

    });

    it('Login Page - Enter incorrect details', async () => {

        login_elements.input_username.click();
        login_elements.input_username.sendKeys('Incorrect Username');
        
        login_elements.input_password.click();
        login_elements.input_password.sendKeys('Incorrect Password');

        login_elements.btn_login.click();

        expect(login_elements.header_error.getText()).toContain('Your username is invalid!');

    });

    it('Login Page - Enter correct username and incorrect password', async () => {

        login_elements.input_username.click();
        login_elements.input_username.sendKeys('tomsmith');
        
        login_elements.input_password.click();
        login_elements.input_password.sendKeys('Incorrect Password');

        login_elements.btn_login.click();

        expect(login_elements.header_error.getText()).toContain('Your password is invalid!');

    });

    it('Login Page - Enter no username or password', async () => {

        login_elements.btn_login.click();

        expect(login_elements.header_error.getText()).toContain('Your username is invalid!');

    });

    it('Login Page - Enter correct details and login', async () => {

        login_elements.input_username.click();
        login_elements.input_username.sendKeys('tomsmith');
        
        login_elements.input_password.click();
        login_elements.input_password.sendKeys('SuperSecretPassword!');

        login_elements.btn_login.click();

        expect(login_elements.header_error.getText()).toContain('You logged into a secure area!');

    });

    it('Login Page - After logging in logout', async () => {

        login_elements.btn_logout.click();

        expect(login_elements.header_error.getText()).toContain('You logged out of the secure area!');
        expect(login_elements.btn_login.isDisplayed()).toBe(true);

    });
});
