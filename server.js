const express  =  require('express')
const bodyparser = require('body-parser')
const cors  = require('cors')
const PORT = 4000
const api = require('./routes/api')
const app = express()

const product= require('./routes/productapi')
app.use(cors())
app.use(bodyparser.json())
app.use('/api',api)
app.get('/',function(req,res){
    res.send('Hello from Server')
})
app.post('/api/addProduct',product.addProduct);
app.get('/api/getProduct',product.getProduct);
app.get('/api/getProdById/:id',product.getProductsByID);
app.put('/api/updateProduct/:id',product.updateProduct);
app.delete('/api/deleteProduct/:id',product.deleteProduct);
app.listen(PORT,function(){
    console.log('Server running on localhost: ' + PORT)
})