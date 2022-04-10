const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png)$/,
                use: { loader: "url-loader" },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        hot: true,
        historyApiFallback: true,
    },
};
