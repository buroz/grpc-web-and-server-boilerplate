const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new MiniCssExtractPlugin()
  ],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: [resolve(__dirname, "public"), resolve(__dirname, "dist")],
    compress: false,
    port: 3000
  }
};
