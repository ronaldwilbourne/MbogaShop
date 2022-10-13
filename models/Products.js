//load mongoose
const mongoose = require('mongoose')
const products = require('./seed')

//add a shortcut to schema
const schema = mongoose.Schema

//create our schema
const productSchema = new Schema({
    image: {},
    name:{type: String, required: true},
    size: {type: String, required: true},
    description: {type: String, required: true}
})

//create a Model from our Schema
const Product = mongoose.model('Products', productSchema)

//export our Model
module.exports = products