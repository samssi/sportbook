const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body"
});

module.exports = {
  entry: "./src/index.js",
  plugins: [
    HtmlWebpackPluginConfig
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
      { test: /\.css$/,loader: "style-loader!css-loader" }
    ]
  }
};
