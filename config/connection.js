var mysql = require('mysql');
var connection;


{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password :  null,
    database : 'burgers' 
  });
}



module.exports = connection;