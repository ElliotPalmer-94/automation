module.exports = {

    //Email Field
    email_field: `~input-email`,
    email_field_error: `android=new UiSelector().text("Please enter a valid email address").className("android.widget.TextView")`,

    //Password Field
    password_field: `~input-password`,
    password_field_error: `android=new UiSelector().text("Please enter at least 8 characters").className("android.widget.TextView")`,

    //Login Button
    login_button: '~button-LOGIN',

    //Success Message
    success: 'android=new UiSelector().text("Success").className("android.widget.TextView")',
    success_ok_button: 'android=new UiSelector().text("OK").className("android.widget.Button")'

}