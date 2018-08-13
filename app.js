var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var con = require('./connection.js');
//var express = require('express');
//var app = express();
http.createServer(function(req,res){
	 //res.writeHead(200, {'Content-Type': 'text/html'});
     //res.write('<h1>Hello world</>');
     //return res.end();
     
	  var sql = "INSERT INTO customers (name, address) VALUES ?";
	  var values = [
				    ['John', 'Highway 71'],
				    ['Peter', 'Lowstreet 4'],
				    ['Amy', 'Apple st 652'],
				    ['Hannah', 'Mountain 21'],
				    ['Michael', 'Valley 345'],
				    ['Sandy', 'Ocean blvd 2'],
				    ['Betty', 'Green Grass 1'],
				    ['Richard', 'Sky st 331'],
				    ['Susan', 'One way 98'],
				    ['Vicky', 'Yellow Garden 2'],
				    ['Ben', 'Park Lane 38'],
				    ['William', 'Central st 954'],
				    ['Chuck', 'Main Road 989'],
				    ['Viola', 'Sideway 1633']
				  ];
	  con.query(sql,[values], function (err, result) {
	    if (err) throw err;
	    console.log("1 record inserted");
	  });
	
	if(req.url === "/index"){
	   fs.readFile("index.html", function (err, data) {
	      res.writeHead(200, {'Content-Type': 'text/html'});
	      res.write(data);
	      res.end();
	   });
	}
	if(req.url === "/123"){
	   //fs.readFile("index.html", function (err, data) {
	      res.writeHead(200, {'Content-Type': 'text/plain'});
	      res.write('Hello World');
	      res.end();
	  //});
	}
     
     
}).listen(5000);

/*app.get('/save',function(req,res){
    var post  = {from:'me', to:'you', msg:'hi'};
    db.query('INSERT INTO messages SET ?', post, function(err, result) {
      if (err) throw err;
    });
});*/


