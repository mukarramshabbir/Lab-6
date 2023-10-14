const express=require('express');
const router=express.Router();
const productController=require('../controller/productController');

router.post('/product',productController.createProduct);
// if you want to insert the data into database we use post request
// if you want to get the data from database we use get request
// if you want to update the data into database we use post request
// if you want to delete the data into database we use post request
module.exports=router;