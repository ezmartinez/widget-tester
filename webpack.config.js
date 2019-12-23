/**
 * Module dependencies
 */
const {
  createConfig,
  entryPoint,
  customConfig } = require('nordic-dev/building_blocks');
const classicPreset = require('nordic-dev/building_blocks/presets/classic');
const path = require('path');
const glob = require('glob');

const { name } = require('./package.json');

const entryPointPath = path.resolve('app', 'client', 'entry-points');
const entryPoints = glob.sync(`${entryPointPath}/**/*.js`).reduce((res, filePath) => {
  res[filePath.substring(entryPointPath.length + 1, filePath.length - 3)] = ['./app/client/babel-polyfill', filePath];
  return res;
}, {});

/**
 * Create webpack config
 */
const config = createConfig([
  entryPoint(entryPoints),
  customConfig({
    optimization: {
      splitChunks: {
        name: true,
        cacheGroups: {
          vendor: {
            test: /\/node_modules\//,
            chunks: 'initial',
            name: 'vendor',
            reuseExistingChunk: true,
          },
        },
      },
    },
  }),
  classicPreset({
    buildPath: 'build',
    publicPath: `https://http2.mlstatic.com/resources/frontend/statics/${name}/`,
    swift: {
      friendlyUrl: name,
    },
  }),
]);

/**
 * Expose config
 */
module.exports = config;
