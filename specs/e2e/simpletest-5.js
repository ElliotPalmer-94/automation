// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var fileUploadElements = require('../../elements/web/file-upload-elements');
var navigation = require('../../helpers/navigation-helpers');
var screenUrls = require('../../helpers/screenurl-helpers');
var path = require('path');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation.navtosite();

    });
});

describe('Uploading Files', () => {
    it('Navigate to page - correct URL', async () => {
        navigation.navtopage(pageElements.fileUpload)

    });

    it('Upload file - Able to upload file', async () => {

        var fileToUpload = '../../resources/images/car.jpg'

        //Send path of file into choose file 
        //Click upload button
        //Once the upload has finished check the file is uploaded
        absolutePath = path.resolve(__dirname, fileToUpload);
        fileUploadElements.btn_choose_file.sendKeys(absolutePath);    
        fileUploadElements.btn_upload.click();

        //No image appears here so just check the file name returned on the file upload screen
        fileUploadElements.uploaded_file.getText().then((text) => {
            expect(text).toEqual('car.jpg');
        });

    });

    it('Upload file - Uploading without a file returns error', async () => {

        //Navigate to page and click upload button without adding file
        //Check for heading 'Internal Server Error' appears
        browser.get(screenUrls.file_upload_url)
        fileUploadElements.btn_upload.click();

        expect(fileUploadElements.heading.isDisplayed()).toBe(true);

    });

});
