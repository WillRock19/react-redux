const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development", //webpack will knows to run in development mode
  target: "web",
  devtool: "cheap-module-source-map", //Gets a sourcemap for debugging the original code
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"), //In development mode, the webpack won't output any files in a folder, but on a in memory directory (that we will call build)
    publicPath: "/",
    filename: "bundle.js", //Name of the bundle file that will be serve in memory
  },
  devServer: {
    stats: "minimal", //reduce information that will show in commandline
    overlay: true, //overlay errors that occur in browser
    historyApiFallback: true, //we can load deep links, and it will be handle by the react-router
    disableHostCheck: true, //used because of a open-issue in webpack when using the latest version of chrome
    headers: { "Access-Control-Allow-Origin": "*" }, //used because of a open-issue in webpack when using the latest version of chrome
    https: false, //used because of a open-issue in webpack when using the latest version of chrome
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001"), //With this plugin, we will be able to acces the string "http://localhost:3001" from anyware in the app where the process.env.API_URL is used (webpack will serve it for us). We need to use JSON.stringfy() because webpack requires this formmat for values.
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"], //run eslint loader first, and then, if it passes, run babel-loader in te outputed .js files
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"], //run css-loader and style-loader to load the css in our bundle files
      },
    ],
  },
};
