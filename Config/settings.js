module.exports = {
    // ================= LOGIN DETAILS =================

    //Timeouts
    short_wait: 3000,
    long_wait: 6000,

    //Leaving the username and password in the settings as its just easier to run the test without having to setup a system
    //variable. In a *real* case scenario its best to use system variables here. 
    username: 'admin' || process.env.username,
    password: 'admin' || process.env.password,

    //SQL
    sql_connection_details: 'mssql://testaccount:password12345@localhost/mydatabase'

}