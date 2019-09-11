'use strict';
const pricemonitor = require('./controller')

module.exports = function(app) {
	app.get('/comm', async function(req, res) {
	    pricemonitor.getAllComment().then(comm => res.json({info : 'BUILD USING EXPRESS JS', data : comm})).catch(err => console.log(err)); 
	});
    app.post('/comment',  async function(req, res) {
         await pricemonitor.createComment({comment : 's' , username : 's'}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.post('/links',  async function(req, res) {
         await pricemonitor.createLink({link : 's'}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.post('/reply',  async function(req, res) {
         await pricemonitor.createReply({comment : 's' , username : 's' , id_comment : 1}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.put('/comment/edit',  async function(req, res) {
         await pricemonitor.updateComment({dislikes : 10 , likes : 10 , id_comment : 1}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
	app.get('/', function (req, res) {
	 res.send({ status : 'Testing API Price Monitor'});
	});
}