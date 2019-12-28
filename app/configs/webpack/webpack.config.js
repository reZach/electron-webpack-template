const path = require("path");

// https://www.valentinog.com/blog/babel/
module.exports = {
  mode: "development",
  entry: {
    "electron-main": "./app/main.js",
    "app": "./app/components/app/app.jsx"
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
  }
}