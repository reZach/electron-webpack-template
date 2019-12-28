const path = require('path');

module.exports = {
  mode: "development",
  entry: "./app/main.js",
  // {
  //   "electron-main": "./app/main.js",
  //   "app": "./app/components/app/app.jsx"
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "electron-renderer",
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: /app/,
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