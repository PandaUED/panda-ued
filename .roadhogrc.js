export default {
	entry            : 'src/index.js',
	publicPath       : '/',
	disableCSSModules: false,
	sass             : {
		sourceMap   : process.env.NODE_ENV === 'development',
		includePaths: [
			'node_modules',
			'src/style'
		]
	},
	hash             : true,
	theme            : 'src/style/theme.js',
	externals        : {
		jquery: 'window.$'
	},
	extraBabelPlugins: [
		'transform-runtime',
		'lodash',
		[
			'import',
			{libraryName: 'antd', style: true}
		]
	],
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