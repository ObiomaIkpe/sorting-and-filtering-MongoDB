require('dotenv').config()
require('express-async-errors')
 
const connectDB = require('./db/connect');

const productsroutes = require('./routes/products');
 const express = require('express');
 const app =  express();
const notfoundmiddleware = require('./middleware/not-found');
const errormiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('<h1>STORE API</h1><a href="/api/v1/products">products routes</a>')
})

app.use('/api/v1/products', productsroutes)

//products route
app.use(notfoundmiddleware)
app.use(errormiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try{
        //conncetDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}`))
    }
    catch(error){
console.log(error)
    }
}

start()