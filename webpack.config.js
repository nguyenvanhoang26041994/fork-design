const path = require('path');

module.exports = {
  entry: {
    'fork-ui': './src/components/index',
    'fork-icon': './src/icons/index',
  },
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'classnames': {
      root: 'classNames',
      commonjs2: 'classnames',
      commonjs: 'classnames',
      amd: 'classnames',
    },
    'lodash': {
      root: '_',
      commonjs2: 'lodash',
      commonjs: 'lodash',
      amd: 'lodash',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    },
    '@tippyjs/react': {
      root: 'Tippy',
      commonjs2: '@tippyjs/react',
      commonjs: '@tippyjs/react',
      amd: '@tippyjs/react',
    },
    'resize-observer-polyfill': {
      root: 'ResizeObserver',
      commonjs2: 'resize-observer-polyfill',
      commonjs: 'resize-observer-polyfill',
      amd: 'resize-observer-polyfill',
    },
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
};
