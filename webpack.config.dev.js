const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    //In development mode, webpack will not use the output, cause it generate the files in memory. Anyway, we have to put this property on the config file, so it knows where  it will serv it from memory
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal", //Reduces information in the commandline
    overlay: true, //overlay any errors that occur in the browser
    historyApiFallback: true, //all requests will be sent to index.html (this way we can load deeplinks and it all will be loaded by react-route)
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //Regex to find all jScript or Jsx files
        exclude: /node_modules/, //Ignore files inside the node_modules folder
        use: ["babel-loader"], //Tell webpack what to do with these jscript files (in this case, i'm going to run babel-loader in then)
      },
      {
        test: /(\.css)$/, //Regex to find all .css files
        use: ["style-loader", "css-loader"], //Tell webpack to pass then througth these two loaders
      },
    ],
  },
};
