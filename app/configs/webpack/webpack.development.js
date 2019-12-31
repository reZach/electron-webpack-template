const merge = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

const port = process.env.port || 4280;
const publicPath = `http://localhost:${port}/dist`;

module.exports = merge(base, {
    mode: "development",
    devtool: "source-map",
    entry: {
        "electron-main": "./app/main.js",
        "app": [
            "babel-polyfill", 
            "react-hot-loader/patch", 
            `webpack-dev-server/client?${publicPath}`,
            "webpack/hot/only-dev-server",
            "./app/index.js"
        ]
    },
    output: {
        filename: "[name]-bundled.js", // Names the bundled files
        path: path.resolve(__dirname, "../../", "dist"), // Path of the bundled files
        publicPath
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    devServer: {
        port,
        publicPath,
        compress: true,
        noInfo: true,
        stats: "errors-only",
        inline: true,
        lazy: false,
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        watchOptions: {
            ignored: /node_modules/,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        }
    }
});