
// ================= REQUIRE =================
var pageElements = require('../../elements/web/page-elements');
var downloadElements = require('../../elements/web/download-elements');
var navigation = require('../../helpers/navigation-helpers');
var files = require('../../helpers/file-helpers');
var downloadsFolder = require('downloads-folder');
var fs = require('fs');

const path = downloadsFolder();
console.log('PATH: ' + path)

const file = '\\simple.txt';
console.log('FILE: ' + file)

const downloaded_file = path + file;
console.log('DOWNLOADED FILE: ' + downloaded_file)


// ================= TEST =================
describe('Test Setup', () => {
    it('Navigate to the testing site', async () => {
        navigation.navtosite();

    });
});

describe('Download Page', () => {
    it('Navigate to page - correct URL', async () => {
        navigation.navtopage(pageElements.download)

    });

    it('Download - Download txt file', async () => {

        downloadElements.download_item_1.click();

        //Wait for download to finish otherwise file will become tmp file...
        browser.sleep(5000);

    });

    it('Download - Check file is downloaded', async () => {

        files.checkFilesExist(path, downloaded_file);

    });

    it('Download - Check file contents', async () => {

        var data = fs.readFileSync(downloaded_file, 'utf8');
            
        expect(data.toString()).toEqual('This is txt file');

    });

    it('Download - Remove file', async () => {

        files.removeFiles(path, downloaded_file);

    });
});
