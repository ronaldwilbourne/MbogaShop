//load express 
const express = require('express')

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
app.set('views','./views')
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });
  
  // Tell the app to listen on port 3000
  // for HTTP requests from clients
  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });