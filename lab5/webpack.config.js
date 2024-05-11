// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",

    entry: {
        main: path.resolve(__dirname, "./public/src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Serve from the 'dist' directory
        },
        compress: true, // enable compressing
        open: false, // disable opening a new tab in start
        port: 8082, // Set the port to 8080
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
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],

    module: {
        rules: [
            // CSS loader
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // SCSS loader
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            // image loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                        },
                    },
                ],
            },
        ],
    },
};
