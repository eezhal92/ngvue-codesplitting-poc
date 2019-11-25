const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    overlay: true,
    historyApiFallback: true,
    hot: true,
    watchContentBase: false,
    port: 4040,
  },
})
