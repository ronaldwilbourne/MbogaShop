//load express 
const express = require('express');

const methodOverride = require('methodOveride')

const productsRoutes = require('./routes/productsRoutes.js');

require('dotenv').config()

//create express app object
const app = express()

//identify your port
const port = process.env.PORT
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
//req= express request object
//res= response object (req,res are invoked during callbacks)
//res.send is the route handler(callback)/otherways can be res.render-render template and send resulting html to browser
//res.redirect tell browser to issue another GET request
//res.json()- send a JSON response (used when we build an API)
// set up view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine)

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.get('/', (req, res) =>{
  res.redirect('/products')
})
app.use('/products', productsRoutes)


  // Tell the app to listen on port 3000
  // for HTTP requests from clients
  app.listen(port, function () {
    console.log('Listening on port: 3000');
  });
  mongoConfig()