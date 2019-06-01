module.exports = {

    //Choose file
    btn_choose_file: element(by.css('[id="file-upload"]')),

    //Upload button
    btn_upload: element(by.css('[id="file-submit"]')),
    
    //Uploaded file
    uploaded_file: element(by.css('[id="uploaded-files"]')),

    heading: element(by.cssContainingText('h1', 'Internal Server Error')),
    
    }