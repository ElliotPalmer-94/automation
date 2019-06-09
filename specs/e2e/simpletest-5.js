// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const file_upload_elements = require('../../elements/web/file-upload-elements');
const navigation_helper = require('../../helpers/navigation-helpers');
const screen_urls = require('../../helpers/screenurl-helpers');
const path = require('path');

// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation_helper.navtosite();

    });
});

describe('Uploading Files', () => {
    it('Navigate to page - correct URL', async () => {
        navigation_helper.navtopage(page_elements.fileUpload)

    });

    it('Upload file - Able to upload image file', async () => {

        var fileToUpload = '../../resources/images/car.jpg'

        //Send path of file into choose file 
        //Click upload button
        //Once the upload has finished check the file is uploaded
        absolutePath = path.resolve(__dirname, fileToUpload);
        file_upload_elements.btn_choose_file.sendKeys(absolutePath);    
        file_upload_elements.btn_upload.click();

        //No image appears here so just check the file name returned on the file upload screen
        file_upload_elements.uploaded_file.getText().then((text) => {
            expect(text).toEqual('car.jpg');
        });

    });

    it('Upload file - Able to upload txt file', async () => {

        var fileToUpload = '../../resources/files/simple.txt'

        browser.get(screen_urls.file_upload_url);

        //Send path of file into choose file 
        //Click upload button
        //Once the upload has finished check the file is uploaded
        absolutePath = path.resolve(__dirname, fileToUpload);
        file_upload_elements.btn_choose_file.sendKeys(absolutePath);    
        file_upload_elements.btn_upload.click();

        //No image appears here so just check the file name returned on the file upload screen
        file_upload_elements.uploaded_file.getText().then((text) => {
            expect(text).toEqual('simple.txt');
        });

    });

    it('Upload file - Uploading without a file returns error', async () => {

        //Navigate to page and click upload button without adding file
        //Check for heading 'Internal Server Error' appears
        browser.get(screen_urls.file_upload_url)
        file_upload_elements.btn_upload.click();

        expect(file_upload_elements.heading.isDisplayed()).toBe(true);

    });

});
