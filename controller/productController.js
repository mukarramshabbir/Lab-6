const product=require('../models/product');

async function createProduct(req,res){
    try{
        const newproduct=await product.create(req.body);
        res.status(201).json(newproduct);
    } catch (error){
        res.status(500).json({error:error})
    }
}

async function getAllProducts(req,res){
    try{
        const products= await product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function updateProduct(req,res){
    try{
        const { id }=req.params;
        const updatedProduct=await product.findByIdAndUpdate(id, req.body, {new:true});
        res.json(updateProduct);
    } catch (err){
        res.status(500).json({error:err.message});
    }
}

async function deleteProduct(req,res){
    try{
        const { id }=req.params;
        await product.findByIdAndRemove(id);
        res.sendStatus(204);
    }catch (err){
        res.status(500).json({error: err.message});
    }
}

module.exports={
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
}