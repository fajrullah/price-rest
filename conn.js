const mysql = require('mysql');
//function ini untuk Kedatabase , sesuaikan dengan Database MYSQL nya
const con = mysql.createConnection({
	host : "remotemysql.com",
	user : "y22DR5hEJT",
	password : "IkVxw25d1g",
	database : "y22DR5hEJT",
	port: 3306
});
con.connect(function(err){
	if(err) throw err;
});
module.exports = con;

