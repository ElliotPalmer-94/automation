// ================= REQUIRE =================
const login_elements = require('../../../elements/mobile/login-elements');
const navigation_elements = require('../../../elements/mobile/navigation-elements');
const settings = require('../../../Config/settings');

// ================= TEST =================
describe('Test Setup', () => {
  it('Navigate to page', async () => {

    $(navigation_elements.login_nav_button).click();

  });
});

describe('Webdriver.io Native App - Logging in', () => {
  it('Login - Login with invalid email address', async () => {

    $(login_elements.email_field).click();
    $(login_elements.email_field).addValue('invalid email address');

    $(login_elements.password_field).click();
    $(login_elements.password_field).addValue('password');

    $(login_elements.login_button).click();

    $(login_elements.email_field_error).waitForDisplayed(settings.long_wait);
    expect($(login_elements.email_field_error).getText()).toEqual('Please enter a valid email address');

  });

  it('Login - Login with invalid password', async () => {

    $(login_elements.email_field).click();
    $(login_elements.email_field).clearValue();
    $(login_elements.email_field).addValue('test@test.com');

    $(login_elements.password_field).click();
    $(login_elements.password_field).clearValue();
    $(login_elements.password_field).addValue('p');

    $(login_elements.login_button).click();

    $(login_elements.password_field_error).waitForDisplayed(settings.long_wait);
    expect($(login_elements.password_field_error).getText()).toEqual('Please enter at least 8 characters');

  });

  it('Login - Login with correct details', async () => {

    $(login_elements.email_field).click();
    $(login_elements.email_field).clearValue();
    $(login_elements.email_field).addValue('test@test.com');

    $(login_elements.password_field).click();
    $(login_elements.password_field).clearValue();
    $(login_elements.password_field).addValue('password');

    $(login_elements.login_button).click();

    //Check for success message to appear if login was successful
    $(login_elements.success).waitForDisplayed(settings.long_wait);
    expect($(login_elements.success).isDisplayed()).toBe(true);

  });

});

