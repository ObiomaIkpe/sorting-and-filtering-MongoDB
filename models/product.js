const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:[true, 'product name must be provided'],
    },
    price:{
        type:Number,
        required:[true, 'price must be provided'],
    },
    featured:{
        type:Boolean,
        default:false,
        required:[true, 'product name must be provided'],
    },
        rating:{
        type:Number,
        default: 4.5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{value} is not supported',
        },
        //enum:['ikea', 'liddy', 'caressa', 'marcos'],
    
    },
})

module.exports = mongoose.model('Product', productSchema)