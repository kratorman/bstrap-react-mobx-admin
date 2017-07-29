var debug = process.env.NODE_ENV !== 'production'
// var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/main.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'main.min.js'
  },
  externals: {
    'axios': 'axios',
    'lodash': '_',
    'react': 'React',
    'react-dom': 'ReactDOM'
    // 'react-mobx-admin': 'react-mobx-admin',
    // 'react-mobx-admin-blog': 'react-mobx-admin-blog'
  },
  resolve: {
    alias: {
      // 'bstrap-react-mobx-admin': path.resolve(__dirname, '../../'),
      // 'react-mobx-admin-blogstate': path.join(__dirname, 'node_modules', 'react-mobx-admin', 'examples', 'blog')
      // 'mobx-router': path.join(__dirname, 'node_modules', 'mobx-router'),
    }
  }
}
