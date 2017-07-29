var debug = process.env.NODE_ENV !== 'production'
var path = require('path')

module.exports = {
  devtool: debug ? 'eval-source-map' : 'hidden-source-map',
  entry: './src-bstrap-rma/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bstrap-react-mobx-admin.js',
    library: 'BStrapReactMobxAdmin',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: {
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    'mobx': 'mobx',
    'mobx-react': 'mobx-react',
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    },
    'react-mobx-admin': {
      commonjs: 'react-mobx-admin',
      commonjs2: 'react-mobx-admin',
      amd: 'react-mobx-admin',
      root: 'ReactMobxAdmin'
    }
  }
}
