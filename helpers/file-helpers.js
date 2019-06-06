var fs = require('fs');

module.exports = {

  checkFilesExist: async function (path, file) {

    if (path) {
      if (fs.existsSync(file)) {

        //file exists
        expect(fs.existsSync(file)).toBe(true);

      } else {
        console.log('ERROR: SOMETHING WENT WRONG');
      }
    }
  },


  removeFiles: async function (path, file) {

    if (path) {
      if (fs.existsSync(file)) {

        //file removed
        fs.unlinkSync(file);
        expect(fs.existsSync(file)).toBe(false);

      } else {
        console.log('ERROR: SOMETHING WENT WRONG');
      }
    }
  }








}