//load express 
const express = require('express');
const products = require('./models/Products');

//create express app object
const app = express()

//identify your port
const port = 3000
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
//req= express request object
//res= response object (req,res are invoked during callbacks)
//res.send is the route handler(callback)/otherways can be res.render-render template and send resulting html to browser
//res.redirect tell browser to issue another GET request
//res.json()- send a JSON response (used when we build an API)



  // Tell the app to listen on port 3000
  // for HTTP requests from clients
  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });