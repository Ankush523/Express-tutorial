const express = require('express')
const app = express()
const {products} = require('./data')
app.get('/',(req,res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res) => {
    const newProducts = products.map((product)=>{
        const{id,name,image} = product;
        return{id,name,image}; 
    })
    res.json(newProducts)
})

// app.get('/api/products/1',(req,res) => {
//     const singleProduct = products.find((product) => product.id===1)
//     res.json(singleProduct)
// })

app.listen(3080,() => {
    console.log("Server listening to port 3080...")
})