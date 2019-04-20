const path = require('path'),
  glob = require('glob'),
  Merge = require('webpack-merge'),
  CommonConfig = require('./webpack.common.config.js'),
  entryFiles = glob.sync('./src/**/*.js')
  .map((element) => `./${element}`);

module.exports = Merge(CommonConfig, {
  entry: entryFiles,
  output: {
    path: path.join(__dirname, '../dev),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  mode: 'none'
});

