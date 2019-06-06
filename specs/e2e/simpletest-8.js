
// ================= REQUIRE =================
const page_elements = require('../../elements/web/page-elements');
const download_elements = require('../../elements/web/download-elements');
const navigation_helper = require('../../helpers/navigation-helpers');
const files_helpers = require('../../helpers/file-helpers');
const downloads_folder = require('downloads-folder');
const fs = require('fs');

const path = downloads_folder();
console.log('PATH: ' + path)

const file = '\\simple.txt';
console.log('FILE: ' + file)

const downloaded_file = path + file;
console.log('DOWNLOADED FILE: ' + downloaded_file)


// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation_helper.navtosite();

    });
});

describe('Download Page', () => {
    it('Navigate to page - correct URL', async () => {
        navigation_helper.navtopage(page_elements.download)

    });

    it('Download - Download txt file', async () => {

        download_elements.download_item_1.click();

        //Wait for download to finish otherwise file will become tmp file...
        browser.sleep(5000);

    });

    it('Download - Check file is downloaded', async () => {

        files_helpers.checkFilesExist(path, downloaded_file);

    });

    it('Download - Check file contents', async () => {

        var data = fs.readFileSync(downloaded_file, 'utf8');
            
        expect(data.toString()).toEqual('This is txt file');

    });

    it('Download - Remove file', async () => {

        files_helpers.removeFiles(path, downloaded_file);

    });
});
