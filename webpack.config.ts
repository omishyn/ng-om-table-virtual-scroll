const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = (config, options, targetOptions) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
    })
  );

  config.module.rules.push({
    resourceQuery: /raw/,
    type: 'asset/source',
  });

  config.module.rules.push({
    resourceQuery: /ngResource/,
    type: 'asset/source',
  });

  config.target = ['web', 'es2022'];

  console.log({rules: config.module.rules});

  return config;
};
