module.exports = (env) => {
  if (env === undefined) {
    env = 'dev';
  }
  return require(`./config/webpack.${env}.config.js`);
};

