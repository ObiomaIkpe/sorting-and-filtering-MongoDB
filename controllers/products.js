const product = require('../models/product')

const getAllProductsStatic = async (req, res) =>{ 

    const products = await product.find({}).sort('-name price')
    res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }

    if(company){
        queryObject.company = company
    }

    if(name){
        queryObject.name = {$regex: search, $options: 'i'}
    }
    console.log(queryObject)
    let result = await product.find(queryObject)
    if(sort){
       products = product.sort()
    }
    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {

    getAllProducts,
    getAllProductsStatic
}