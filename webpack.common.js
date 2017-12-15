const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: [
		SRC_DIR + '/app/index.jsx'
	],
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Justin Mendoza Portfolio',
			template: './src/index.template.html' 
		})
	],
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				include: SRC_DIR,
				loader: 'babel-loader' 
			},
			{ 
				test: /\.jsx$/, 
				exclude: /node_modules/,
				include: SRC_DIR, 
				loader: 'babel-loader' 
			},
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(png|jpg|gif)$/, use: ['file-loader'] }
		]
	},
	output: {
		path: DIST_DIR,
		filename: 'js/bundle.js',
		publicPath: '/'
	}
};
