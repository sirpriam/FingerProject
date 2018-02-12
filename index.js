var express = require('express');
var app = express();

// -----middleware-----

//simple request time logger
/*
app.use(function(req, res, next){
  console.log("A new request received at " + Date.now());

  next();
});
*/


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
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
