const product = require('../models/Products')

//route Get/products (index)
const findAllProducts = (req ,res) => {
    //find takes 2 arguments;
    //1-an object with our query(to filter our data and find exactly what we need)
    //2-nd: callback(with an error object and the found data)
    product.find({}, (err, foundProduct) => {
        if (err) {
            res.status(404).json(err)
        } else {
            res.status(200).render('products/Index', { products: foundProduct})
        }
        
    })
}
//ROUTE GET/products/new (new)
const showNewView = (req, res) => {
    //res.send('<form>create new product</form>)
    res.render('products/New')
}

//ROUTE  POST /products (create)

const createNewProduct = (req, res) => {
    if (req.body.)
}