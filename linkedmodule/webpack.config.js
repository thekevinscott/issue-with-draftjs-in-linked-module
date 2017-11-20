const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
  watch: true,
  context: __dirname,
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          "babel-loader",
          // "eslint-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  }
};

