'use strict';
const pricemonitor = require('./controller')

module.exports = function(app) {
	app.get('/comm', async function(req, res) {
	    pricemonitor.getAllComment().then(comm => res.json({info : 'BUILD USING EXPRESS JS', data : comm})).catch(err => console.log(err)); 
	});
    app.post('/comment',  async function(req, res) {
		const { body } = req
		const { username , comment } = body
     	await pricemonitor.createComment({ username , comment }).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.post('/links',  async function(req, res) {
    	const link = req.body.link
        await pricemonitor.createLinks({link}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.post('/reply',  async function(req, res) {
		const { body } = req
		const { username , comment , id_comment } = body
        await pricemonitor.createReply({comment, username , id_comment}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.put('/comment/likes',  async function(req, res) {
		const { body } = req
		const {  likes , id_comment } = body
         await pricemonitor.updateComment({likes , id_comment}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.put('/comment/dislikes',  async function(req, res) {
		const { body } = req
		const {  dislikes , id_comment } = body
         await pricemonitor.updateComment({dislikes , id_comment}).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
	app.get('/', function (req, res) {
	 res.send({ status : 'Testing API Price Monitor'});
	});
}