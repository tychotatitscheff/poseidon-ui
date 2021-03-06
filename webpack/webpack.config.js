import _ from 'lodash';
import baseConfig, { options } from './base.config';

export default _.extend({}, baseConfig, {
  entry: {
    'poseidon-ui': './src/index.js'
  },

  output: {
    path: './dist',
    filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
    library: 'PoseidonUi',
    libraryTarget: 'umd'
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
});
