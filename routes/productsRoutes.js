//load express
const express = require('express')

//create a special router object for our routes ]
const router = express.Router()

//load products data
const products = require('..models/products.js')

//set up "index" route

router.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });
  //set up "index" route
router.get('/products', (req, res) =>{
  res.send(products)
})
  //set up "new" route
router.get('/new', (req, res) =>{
  res.send('<form> Create product</form>')
})

  //set up "create" route
router.get('/', (req,res) => {
    res.send('creating a new fruit! (in db)')
})


//set up "show" route
router.post('/:index', (req, res) => {
    res.send('products[re.params.index]')
})
    //set up 'edit' route
router.g