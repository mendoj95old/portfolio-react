'use strict';

const express = require('express');

const env = process.env.NODE_ENV || 'development';

const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
if(env === 'development') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const config = require('./webpack.dev.js');
	const compiler = webpack(config);
	app.use(webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	}));
} else {
	require('./src/server/config/express')(app);	
	//require('./src/server/config/routes')(app);
}

// Serve the files on port 3000.
app.listen(3000, function () {
	console.log('Listening on port 3000!\n');
});