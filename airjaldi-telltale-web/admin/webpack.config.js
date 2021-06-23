var webpack = require('webpack');

module.exports = {
  entry: [

    'webpack-hot-middleware/client?reload=true'
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 8081,
    contentBase: 'src/',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  },

};