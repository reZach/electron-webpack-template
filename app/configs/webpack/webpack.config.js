const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackReplaceStringPlugin = require("html-webpack-string-replace-plugin");
const path = require("path");
const nonce = require("../../utils/nonce");

// https://www.valentinog.com/blog/babel/
module.exports = {
  mode: "development",
  entry: {
    "electron-main": "./app/main.js",
    "app": "./app/index.js"
  },
  output: {
    filename: "[name]-bundled.js", // Names the bundled files
    path: path.resolve(__dirname, "../../", "dist") // Path of the bundled files
  },
  target: "electron-renderer", // Allows us to use webpack without setting nodeIntegration to true in the BrowserWindow (Electron) object; https://webpack.js.org/configuration/target/
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /app/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "./index.html",
      excludeChunks: ["electron-main", "app"]
    }),
    new HtmlWebpackReplaceStringPlugin({
      "##NONCE##": nonce
    })
  ]
}