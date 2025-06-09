const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("date", (dateObj, format = "yyyy") => {
        return DateTime.fromJSDate(dateObj).toFormat(format);
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
