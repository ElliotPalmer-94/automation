
// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const drag_and_drop_elements = require('../../elements/web/drag-and-drop-elements');
const navigation_helper = require('../../helpers/navigation-helpers');
const drag_and_drop_helper = require('../../helpers/drag-and-drop-helpers');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation_helper.navtosite();

    });
});

describe('Drag and Drop Page', () => {
    it('Navigate to page - correct URL', async () => {
        navigation_helper.navtopage(page_elements.dragAndDrop)

    });

    it('Drag and Drop - Move A to B', async () => {

        drag_and_drop_elements.header.getText().then((text) => {
            console.log('BEFORE MOVE: ' + text); //Should return A,B
        });

        //Run drag and drop function: move element1 onto element2
        browser.executeScript(drag_and_drop_helper, drag_and_drop_elements.box_a, drag_and_drop_elements.box_b);

        //Checking the headers change from there defaults after being dragged
        drag_and_drop_elements.header.getText().then((text) => {
            console.log('AFTER MOVE: ' + text); //Should return B,A
            expect(text).toEqual(['B', 'A']);

        });

    });

    it('Drag and Drop - Move B to A', async () => {

        drag_and_drop_elements.header.getText().then((text) => {
            console.log('BEFORE MOVE: ' + text); //Should return B,A
        });

        //Run drag and drop function: move element2 onto element1
        browser.executeScript(drag_and_drop_helper, drag_and_drop_elements.box_b, drag_and_drop_elements.box_a);

        //Checking the headers change from there defaults after being dragged
        drag_and_drop_elements.header.getText().then((text) => {
            console.log('AFTER MOVE: ' + text); //Should return A,B
            expect(text).toEqual(['A', 'B']);

        });

    });
});
