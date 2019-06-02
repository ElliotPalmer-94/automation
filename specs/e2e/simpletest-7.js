
// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var dragAndDropElements = require('../../elements/web/drag-and-drop-elements');
var navigation = require('../../helpers/navigation-helpers');
var dragAndDropFn = require('../../helpers/drag-and-drop-helpers');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation.navtosite();

    });
});

describe('Drag and Drop Page', () => {
    it('Navigate to page - correct URL', async () => {
        navigation.navtopage(pageElements.dragAndDrop)

    });

    it('Drag and Drop - Move A to B', async () => {

        dragAndDropElements.header.getText().then((text) => {
            console.log('BEFORE MOVE: ' + text); //Should return A,B
        });

        //Run drag and drop function: move element1 onto element2
        browser.executeScript(dragAndDropFn, dragAndDropElements.box_a, dragAndDropElements.box_b);

        //Checking the headers change from there defaults after being dragged
        dragAndDropElements.header.getText().then((text) => {
            console.log('AFTER MOVE: ' + text); //Should return B,A
            expect(text).toEqual(['B', 'A']);

        });

    });

    it('Drag and Drop - Move B to A', async () => {

        dragAndDropElements.header.getText().then((text) => {
            console.log('BEFORE MOVE: ' + text); //Should return B,A
        });

        //Run drag and drop function: move element1 onto element2
        browser.executeScript(dragAndDropFn, dragAndDropElements.box_b, dragAndDropElements.box_a);

        //Checking the headers change from there defaults after being dragged
        dragAndDropElements.header.getText().then((text) => {
            console.log('AFTER MOVE: ' + text); //Should return A,B
            expect(text).toEqual(['A', 'B']);

        });

    });
});
