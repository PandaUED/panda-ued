export default {
	entry            : 'src/index.js',
	publicPath       : '/',
	disableCSSModules: true,
	sass             : true,
	hash             : true,
	theme            : 'src/style/theme.js',
	extraBabelPlugins: [
		'transform-runtime',
		'lodash',
		[
			'import',
			{libraryName: 'antd', style: true}
		]
	],
	externals        : {
		jquery: 'window.$'
	},
	proxy            : {
		'/api': {
			target      : 'http://ued.xiongmaojinku.com',
			changeOrigin: true,
			xfwd        : true,
			secure      : true
		}
	},
	autoprefixer     : {
		browsers: [
			'iOS >= 8',
			'Android >= 4'
		]
	},
	env              : {
		development: {
			extraBabelPlugins: [
				'dva-hmr'
			]
		}
	},
	dllPlugin        : {
		exclude: [
			'babel-runtime'
		],
		include: [
			'dva/router',
			'dva/saga',
			'dva/fetch'
		]
	}
};