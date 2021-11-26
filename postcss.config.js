const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        cssnano({
            preset: "default",
        }),
        purgecss([
            content: [
                "./public/**/*.html",
                "./public/**/*.vue",
                "./public/**/*.jsx",
            ],
            defaultExtractor: (content) =>
                {
                    return content.match(/[\w-/:]+(?<!:)/g) || [];
                },
        ]),
    ],





};