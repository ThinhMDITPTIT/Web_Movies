const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    // the bundle output path
    path: path.join(__dirname, "/dist"),
    // the name of the bundle
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      // to import index.html file inside index.js
      template: "src/index.html",
    }),
  ],
  devServer: {
    // Could change the port
    port: 3000,
  },
  module: {
    rules: [
      {
        // .js and .jsx files
        test: /\.(js|jsx)$/,
        // excluding the node_modules folder
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // styles files
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // to import images and fonts
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
