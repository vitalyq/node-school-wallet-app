const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'./source/app.js'
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'ignore-loader'
			}
		]
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'public')
	},
	target: 'node',
	resolve: {
		modules: [
			__dirname,
			'node_modules'
		]
	},
};
