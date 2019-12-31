const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const path = require("path");

// https://www.valentinog.com/blog/babel/
module.exports = (env, argv) => {

  return {
    mode: argv.mode,
    devtool: argv.mode === "production" ? "nosources-source-map" : "source-map", //https://webpack.js.org/configuration/devtool/ && https://github.com/webpack/webpack/issues/5627#issuecomment-389492939
    entry: {
      "electron-main": "./app/main.js",
      "app": ["babel-polyfill", "react-hot-loader/patch", "./app/index.js"]
    },
    output: {
      filename: "[name]-bundled.js", // Names the bundled files
      path: path.resolve(__dirname, "../../", "dist") // Path of the bundled files
    },
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom"
      }
    },
    target: "electron-renderer", // Allows us to use webpack without setting nodeIntegration to true in the BrowserWindow (Electron) object; https://webpack.js.org/configuration/target/
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: /app/,
          resolve: {
            extensions: [".js", ".jsx", ".json"]
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
        excludeChunks: ["electron-main"]
      }),
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
      new CspHtmlWebpackPlugin({
        "base-uri": ["'self'"],
        "object-src": ["'none'"],
        "script-src": ["'self'"],
        "style-src": ["'self'"],
        "frame-src": ["'none'"],
        "worker-src": ["'none'"]
      })
    ]
  };
}