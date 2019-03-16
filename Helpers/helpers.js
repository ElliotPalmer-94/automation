

module.exports = {

    navtosite: function () {

        var url = 'http://the-internet.herokuapp.com';
        
        browser.get(url);

        browser.wait(protractor.ExpectedConditions.urlContains(url), 5000, 'Did not navigate to URL').then(function(result) {
            expect(result).toEqual(true);
        });
    }
}







