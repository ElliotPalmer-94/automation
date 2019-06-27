// ================= LOGIN DETAILS =================
//Leaving the username and password in the settings as its just easier to run the test without having to setup a system
//variable. In a *real* case scenario its best to use system variables here. 
const username = 'admin' || process.env.username
const password = 'admin' || process.env.password

//SQL
const sql_connection_details = 'mssql://testaccount:password12345@localhost/mydatabase'

module.exports = {

    username,
    password,
    sql_connection_details,
}