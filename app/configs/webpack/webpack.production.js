const merge = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

module.exports = merge(base, {
    mode: "production",
    devtool: "nosources-source-map", //https://webpack.js.org/configuration/devtool/ && https://github.com/webpack/webpack/issues/5627#issuecomment-389492939
    entry: {
        "electron-main": "./app/main.js",
        "app": "./app/index.js"
    },
    output: {
        filename: "[name]-bundled.js", // Names the bundled files
        path: path.resolve(__dirname, "../../", "dist") // Path of the bundled files
    }
});