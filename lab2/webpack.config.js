// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
            template: path.resolve(__dirname, "./public/src/template.html"), //шаблон
            filename: "index.html", // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/about.html"), //шаблон
            filename: "about.html", // ім'я вихідного файлу
        }),
    ],
};
