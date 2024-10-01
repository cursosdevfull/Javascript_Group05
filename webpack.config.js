const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./assets/scripts/app.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // app.css
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
