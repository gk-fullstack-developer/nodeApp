var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload')
   {
    var form = new formidable.IncomingForm();
	    form.parse(req, function (err, fields, files) {
	      var oldpath = files.filetoupload.path;
	      var newpath = 'upload/' + files.filetoupload.name;
	      fs.rename(oldpath, newpath, function (err) {
	        if (err) throw err;
	        res.write('File uploaded and moved!');
	        res.end();
	      });
	 	});
	 	
  } 
  else 
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload" multiple><br>');
    res.write('<input type="submit">');
    res.write('</form>');
     res.end();
  }



	if(req.url=='file123')
	{
		var form = formidable.IncomingForm();
		form.parse(req,function(error,fields,files){
			var old = files.userfile.path;
			var new1 = 'upload/'+files.userfile.name;
			fs.rename(old,new1,function(err){
				if(err) throw err;
				res.write('fileuploaded success');
				res.end();
			});
		});
	}
	else
	{
		fs.readFile('index.html',function(error,data){
			res.writeHead(200,{'Content-Type': 'text/html'});
			res.write(data);
			 res.end();
		});
	}	
}).listen(8080);;