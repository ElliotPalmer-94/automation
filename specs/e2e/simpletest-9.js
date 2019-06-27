
// ================= REQUIRE =================
const navigation_helper = require('../../helpers/navigation-helpers');
const settings = require('../../config/settings');
const sql = require('mssql')

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {

        //We have to navigate to a site before performing any SQL connections because this runs through protractor otherwise the following error will occur: 
        //<unknown>: Failed to read the 'localStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
        //OR run through NODE to bypass navigating to a site

        navigation_helper.navtosite();

    });
});

describe('SQL - Database', () => {
    it('SQL - Run query and check data in table', async () => {

        try {
            await sql.connect(settings.sql_connection_details)
            const result = await sql.query`select * from dbo.Persons`

            console.dir(result.recordset); //Return data from query
            console.log(result.recordset[0].FirstName); //Return the first item from fistname col 
            console.log(result.recordset[0].LastName); //Return the first item from lastname col 

            expect(result.recordset[0].FirstName).toEqual('Elliot');
            expect(result.recordset[0].LastName).toEqual('Palmer');

        } catch (err) {
            // ... error checks
            console.log(err);
        }

        //Close SQL connection
        sql.close()
    });
});
