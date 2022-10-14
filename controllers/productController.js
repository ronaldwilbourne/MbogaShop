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
    if (req.body.description === "on") {
        req.body.description = true
    } else {
        req.body.description = false
    }
    //create has 2 argument
    //1-the data we want to send
    //2- call back function
    product.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(404).json(err)
        }else {
            res.status(200).redirect('/fruits')
        }
    })
}

//ROUTE  GET/fruits/seed (seed)
const seedStarterData = (req, res) => {
    //delete all remaining documents (if there are any)
    product.deleteMany ({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.products)
            //data has been deleted
            //use seed data to repopulate the DB
            product.create(seed.products, (err, createdProduct) =>{
                if(err) {
                    res.status(400).json(err)
                }else{
                    res.status(200).redirect('/products')
                }
            })
        }
    })
}

//ROUTE GET/products:id (show)
const showOneProduct = (req, res) => {
    //findById accepts 2 arguments
    //1-id of document in our DB
    //2- callback (with error object and found document)
product.findById(req.params.id, (err, foundProduct)=> {
    if(err) {
        res.status(400).json(err)

    }else {
        res.status(200).render('products/Show', { product:foundProduct })
    }
})
}

//ROUTE GET/product/:id/edit  (edit)
const showEditView = (req, res) => {
    product.findById(req.params.id, (err, foundProduct) => {
        if(err) {
            res.status(400).json(err)
        } else{
            res.status(200).render('products/Edit',{ product:foundProduct})

        }
    })
}

//ROUTE PUT/products/:id  (update)

const updateOneProduct = (req, res) => {
    if(req.body.description === "on") {
        req.body.description = true
    } else {
        req.body.description = false
    }

    //findByIdAndUpdate take 4 arguments
    //1- the id
    //2- new data we want to use to update our old document
    //3-(optional): an option object, which looks like this: {new : true}
    //4- callback (with error object and foundProuduct or updatedProduct)
    product.findByIdAndUpdate(req.params.id, req.body, (err, foundProduct) =>{
        if(err) {
            res.status(400).json(err)

        } else {
            res.status(200).redirect('/product/${req.params.id}')

        }
    })
}

//ROUTE  DELETE/products/:id  (destroy)
const deleteOneProduct = (req, res) => {
    //console.log('in delete route')
    //res.send('deleting a product at Index! (in DB)')

    product.findByIdAndDelete(req.params.id, (err, deletedProduct) =>{
      if (err) {
        res.status(400).json(err)
      }else{
        res.status(200).redirect('/products')
      }  
    })
}
 module.exports = {
    findAllProducts,
    showNewView,
    createNewProduct,
    seedStarterData,
    showOneProduct,
    showEditView,
    updateOneProduct,
    deleteOneProduct
}