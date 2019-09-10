const  express = require('express'),
 	   port = process.env.PORT || 4000,  
 	   app = express();

app.get('/', function (req, res) {
 res.send(JSON.stringify({ status : 'Testing API Price Monitor'}));
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});