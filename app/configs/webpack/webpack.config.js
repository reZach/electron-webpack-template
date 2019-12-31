const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

module.exports = (env, argv) => {

    return {
        target: "electron-renderer", // Allows us to use webpack without setting nodeIntegration to true in the BrowserWindow (Electron) object; https://webpack.js.org/configuration/target/
        module: {
            rules: [{
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
            }]
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