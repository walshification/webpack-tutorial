const webpack = require('webpack');

module.exports = {
  entry: "./app/entry.js",
  output: {
    path: "./dist",
    filename: "app.es6.js"
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ]
};
