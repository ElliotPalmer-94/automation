module.exports = {

//Username and password login input fields
input_username: element(by.css('[id="username"]')),
input_password: element(by.css('[id="password"]')),

//Login button
btn_login: element(by.buttonText('Login')),

//Header appears when login is rejected
header_error: element(by.css('[id="flash"]')),

//Logout button
btn_logout: element(by.css('[class="button secondary radius"]')),

}