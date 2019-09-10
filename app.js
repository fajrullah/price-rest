const  express = require('express'),
 	   port = process.env.PORT || 4000,  
 	   app = express(),
 	   connection = require('./conn'),   
 	   bodyParser = require('body-parser'),
       cors = require('cors');

app.get('/', function (req, res) {
 res.send({ status : 'Testing API Price Monitor'});
});

// const app.get('/comment', function (req, response) {
//     const comment = connection.query('SELECT * FROM comment', function (error, rows, fields){
//        return response.send(rows)
//     });    
// });

app.get('/comment', function (req, response) {
	let comment = {}
    connection.query('SELECT * FROM comment', function (error, rows, fields){
   		if(error){
            console.log(error)
        } else{
            response.send(rows)
        }
    });

// connection.query('SELECT * FROM comment', function (error, rows, fields){
//         response.send(rows)
//     });
    
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);