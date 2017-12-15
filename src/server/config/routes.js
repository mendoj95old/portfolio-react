'use strict';

module.exports = (app) => {

	app.all('*', (req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		next();
	});

	//Serving Site
	app.get('/', (req, res) => {
		res.render('dist/index.html');
	});
};