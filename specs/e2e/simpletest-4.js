// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const checkbox_elements = require('../../elements/web/checkboxes-elements');
const navigation_helper = require('../../helpers/navigation-helpers');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation_helper.navtosite();

    });
});

describe('Checkboxes', () => {
    it('Navigate to page - correct URL', async () => {
        navigation_helper.navtopage(page_elements.checkboxes)

    });

    it('Checkboxs - Select checkbox 1, check if the checkbox is selected', async () => {

        var checkbox = checkbox_elements.checkbox.get(0);

        //Checking if the checkbox is selected
        //if true do noting
        //if false click
        checkbox.isSelected().then((result) => {
            if (result == false) {
                checkbox.click();
            }

            expect(checkbox.isSelected()).toBe(true);
        });
    });

    it('Checkboxs - Select checkbox 1, check if the checkbox is NOT selected', async () => {

        var checkbox = checkbox_elements.checkbox.get(0);

        //Checking if the checkbox is selected
        //if true click
        //if false do nothing
        checkbox.isSelected().then((result) => {
            if (result == true) {
                checkbox.click();
            }

            expect(checkbox.isSelected()).toBe(false);
        });
    });

    it('Checkboxs - Select checkbox 2, check if the checkbox is selected', async () => {

        var checkbox = checkbox_elements.checkbox.get(1);

        //Checking if the checkbox is selected
        //if true do noting
        //if false click
        checkbox.isSelected().then((result) => {
            if (result == false) {
                checkbox.click();
            }

            expect(checkbox.isSelected()).toBe(true);
        });
    });

    it('Checkboxs - Select checkbox 2, check if the checkbox is NOT selected', async () => {

        var checkbox = checkbox_elements.checkbox.get(1);

        //Checking if the checkbox is selected
        //if true click
        //if false do nothing
        checkbox.isSelected().then((result) => {
            if (result == true) {
                checkbox.click();
            }

            expect(checkbox.isSelected()).toBe(false);
        });
    });

});
