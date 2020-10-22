const path = require('path');
require('dotenv').config();
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies, no-unused-vars

module.exports = {
  /* eslint-disable no-param-reassign */
  webpack: config => {
    config.resolve.alias['~UTIL'] = path.resolve(path.join(__dirname, '/util'));
    config.resolve.alias['~PAGES'] = path.resolve(
      path.join(__dirname, '/pages'),
    );
    config.resolve.alias['~COMPONENTS'] = path.resolve(
      path.join(__dirname, '/components'),
    );
    config.resolve.alias['~DATA'] = path.resolve(path.join(__dirname, '/data'));
    config.resolve.alias['~STYLES'] = path.resolve(
      path.join(__dirname, '/styles'),
    );
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};
