'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const rootPath = path.normalize(__dirname + '/../../../');

module.exports = (app) => {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	
	app.use('/', express.static(path.join(rootPath + '/dist')));

	app.set('json spaces', 2);
	app.set('trust proxy', true);
	app.set('trust proxy', 'loopback');

	app.all('*', (req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		next();
	});

	app.get('*', (req, res) => {
		res.render(path.join(rootPath + '/dist/index.html'));
	});
};