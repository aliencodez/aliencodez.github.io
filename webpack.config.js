const path = require('path'); module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('js'),
    filename: 'app_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
