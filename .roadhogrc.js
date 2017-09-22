import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
  entry: 'src/index.js',
  publicPath: '/',
  multipage: true,
  disableCSSModules: false,
  hash: true,
  sass: {
    sourceMap: process.env.NODE_ENV === 'development',
    includePaths: ['node_modules', 'src/style'],
  },
  theme: 'src/style/theme.js',
  externals: {
    jquery: 'window.$',
  },
  extraPostCSSPlugins: [],
  extraBabelPlugins: [
    'transform-runtime',
    'lodash',
    ['import', { libraryName: 'antd', style: true }],
  ],
  proxy: {
    '/api': {
      target: 'http://ued.xiongmaojinku.com',
      changeOrigin: true,
      xfwd: true,
      secure: true,
    },
  },
  autoprefixer: {
    browsers: ['iOS >= 8', 'Android >= 4'],
  },
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {
      extraPostCSSPlugins: [
        cssnano({
          preset: ['default', { discardComments: { removeAll: true } }],
        }),
      ],
    },
  },
  dllPlugin: {
    exclude: ['babel-runtime'],
    include: ['dva/router', 'dva/saga', 'dva/fetch'],
  },
};
