const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: [
		SRC_DIR + '/app/index.jsx'
	],
	output: {
		path: DIST_DIR,
		filename: 'js/bundle.js',
		publicPath: '/'
	},
	devtool: 'inline-source-map',
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
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ 
			title: 'Justin Mendoza Portfolio',
			template: './src/index.template.html' 
		})
	],
	devServer: {
		contentBase: './dist',
		port: 9000
	}
};
