const path = require('path')
const base = require('./webpack.base')

const config = {
  ...base,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: [{ context: ['/api'], target: 'http://localhost:3000' }]
  }
}

module.exports = config
