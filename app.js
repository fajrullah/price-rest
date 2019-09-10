const  express = require('express'),
 	   port = process.env.PORT || 4000,  
 	   app = express(),
 	   bodyParser = require('body-parser'),
       cors = require('cors');



const routes = require('./routes');
routes(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);