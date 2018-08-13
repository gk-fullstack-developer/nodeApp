var mysql = require('mysql');
var connection1 = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'chat'
});

connection1.connect(function(err) {
    if (err) throw err;
});

module.exports = connection1;