'use strict';
const pricemonitor = require('./controller')

module.exports = function(app) {
	app.get('/comm', async function(req, res) {
	    pricemonitor.getAllComment().then(comm => res.json({info : 'BUILD USING EXPRESS JS', data : comm})).catch(err => console.log(err)); 
	});
	app.get('/', function (req, res) {
	 res.send({ status : 'Testing API Price Monitor'});
	});
}