'use strict';
const pricemonitor = require('./controller'),
         axios = require('axios'),
         cheerio = require('cheerio'),
         Scraper = require ('images-scraper'),
         bing = new Scraper.Bing();



module.exports = function(app) {
	app.get('/comm', async function(req, res) {
	    pricemonitor.getAllComment().then(comm => res.json({info : 'BUILD USING EXPRESS JS', data : comm})).catch(err => console.log(err)); 
	});
    app.post('/comment',  async function(req, res) {
		const { body } = req
		const { username , comment } = body
     	await pricemonitor.createComment({ username , comment }).then(user => res.json(user)).catch(err => res.json(err.errors)); 
    });
    app.post('/links', function(req, res) {
    	const link = req.body.link
        const send = res
        axios(link)
              .then( async response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const name = $('.page-title', '#maincontent').text().trim();
                const price = $('#product_addtocart_form > div.product-options-bottom > div.price-box.price-final_price').text().trim();
                    bing.list({
                        keyword: `Fabelio ${name}`,
                        num: 5,
                        detail: true
                    })
                    .then(async function (res) {
                        const data = JSON.stringify(res)
                        const img_url = data.toString()
                        console.log(img_url)
                        await pricemonitor.createLinks({link , name, price , img_url }).then(user => send.json(user)).catch(err => send.json(err.errors))
                        return img_url
                    })
                    .catch(function(err) {
                        console.log('err',err);
                    })
              })
              .catch(err => console.log(err));
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