const path = require('path'),
  glob = require('glob'),
  Merge = require('webpack-merge'),
  CommonConfig = require('./webpack.common.config.js'),
  testFiles = glob.sync('**/*.test.js')
  .filter((element) => element !== 'tests/bundle.test.js')
  .map((element) => `./${element}`);

module.exports = Merge(CommonConfig, {
  entry: testFiles,
  output: {
    path: path.join(__dirname, '../tests'),
    filename: 'bundle.test.js'
  },
  devtool: 'source-map',
  mode: 'none'
});

