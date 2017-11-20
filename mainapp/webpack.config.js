const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require('webpack');

module.exports = {
  watch: true,
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  entry: "./src/index.js",
  target: "web",
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          "babel-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: "./public",
  },
};
