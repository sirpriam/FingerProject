var express = require('express');
var app = express();


//dynamic routes
//url building
/*
app.get('/things/:name/:id', function(req, res){
  res.send('id: ' + req.params.id + ' and name: '
  + req.params.name);
});
*/


//regex , to restrict url parameter
/*
app.get('/things/:id([0-9]{5})', function(req, res){
  res.send('id: ' + req.params.id);
});
*/

//mistake handler
/*
app.get('*',function(req, res){
  res.send('Sorry, this is an invalid URL.');
});
*/

// -----middleware-----

//simple request time logger
/*
app.use(function(req, res, next){
  console.log("A new request received at " + Date.now());

  next();
});
*/

//Middleware function to log request protocol
/*
app.use('/things', function(req, res, next){
  console.log("A request for things received at " + Date.now());
  next();
});
*/

//Route handler that sends the response
/*
app.get('/things', function(req, res){
  res.send('Things');
});
*/

/*
//First middleware before response is sent
app.use(function(req, res, next){
  console.log("Start");
  next();
});

//Route handler
app.get('/', function(req, res, next){
  res.send("Middle");
  next();
});

//last middleware
app.use('/',function(req,res){
  console.log('End');
});

*/

//third party middleware
var bodyParser = require('body-parser');

//to parse URL encoded data
app.use(bodyParser.urlencoded({extended: false}));

//to parse json data
app.use(bodyParser.json());

app.listen(3000);
