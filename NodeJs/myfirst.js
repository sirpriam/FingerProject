var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  fs.readFile('demofile1.html',function(err, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  });

  fs.writeFile('mynewfile.txt','this is my text',function(err){
    if (err) throw err;
    console.log('Replaced!');
  });

  fs.appendFile('mynewfile1.txt','tested',function(err){
    if (err) throw err;
    console.log('Appended!');
  });
}).listen(3000);
