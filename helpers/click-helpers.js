

module.exports = {

    clickElementMultipleTimes: async function (value = null, element = undefined) {

        var i;
        for (i = 0; i < value; i++) {
            element.click([i]);
        }
    },
}







