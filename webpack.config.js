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
  }
};
