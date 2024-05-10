// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",

    entry: {
        main: path.resolve(__dirname, "./public/src/js/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/index.html"), // Fixed path
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/about.html"), // Fixed path
            filename: "about.html",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Serve from the 'dist' directory
        },
        port: 8082, // Set the port to 8080
    },
};
