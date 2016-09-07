var express = require('express');
var app = express();

// spin up server
app.listen('3000','localhost',function(){
  console.log('Server is listening on port 3000');
});

// base url hit
app.get('/', function(req,res){
  console.log('base url hit');
  res.send('Hello world from server!!!');
});
