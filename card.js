const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ProductCardSchema = new Schema({
    productId:Number,

    productname:String,
    
    productprice:Number,
    
    productdiscription:String,
 
    producturl:String
})

 module.exports = mongoose.model('addcart',ProductCardSchema,'addcart');
