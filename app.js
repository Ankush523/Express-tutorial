const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res) => {
    res.status(404).send('Page not found')
})
app.listen(3080,()=>{
    console.log('Server listening to port 3080')
})