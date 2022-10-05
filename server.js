//load express 
const express = require('express')

//create express app object
const app = express()
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });
  
  // Tell the app to listen on port 3000
  // for HTTP requests from clients
  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });