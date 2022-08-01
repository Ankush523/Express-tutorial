const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
app.use([logger,authorize])

app.get('/',logger,(req,res) => {
    res.send('Home')
})

app.get('/about',logger,(req,res) => {
    res.send('About')
})
app.listen(3080,()=>{  
    console.log('Server listening to port 3080...')
})