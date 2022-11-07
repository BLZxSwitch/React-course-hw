const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.[contenthash].js",
        clean: true,
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};
