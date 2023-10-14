const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    title:String,
    disc: String,
    price: Number
}, {timestamps:true});

module.exports = mongoose.model('Product',productSchema);