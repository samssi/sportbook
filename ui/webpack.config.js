const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

const DefinePluginConfig = new webpack.DefinePlugin({
  __SPORTBOOK_API_URL__: JSON.stringify("http://localhost:8090/api/v1/private")
});

module.exports = {
  entry: "./src/index.js",
  plugins: [
    HtmlWebpackPluginConfig,
    DefinePluginConfig
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".css"]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
