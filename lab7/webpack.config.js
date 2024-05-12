const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
    mode: "development",
    entry: "./public/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Serve from the 'dist' directory
        },
        compress: true, // enable compressing
        open: false, // disable opening a new tab in start
        port: 8082, // Set the port to 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            mimetype: "image/png",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "./public/src/assets/images", to: "images" }, // Копіювати всі файли з src/assets/images в dist/images
            ],
        }),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/index.html"),
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/rozklad.html"),
            filename: "rozklad.html",
        }),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/photo.html"),
            filename: "photo.html",
        }),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/src/pages/news.html"),
            filename: "news.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};

module.exports = config;
