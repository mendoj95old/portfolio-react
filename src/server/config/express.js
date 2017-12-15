'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
    
	app.use('/', express.static(config.rootPath + '/dist'));

	app.set('json spaces', 2);
	app.set('trust proxy', true);
	app.set('trust proxy', 'loopback');
};