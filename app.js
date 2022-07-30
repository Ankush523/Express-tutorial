const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.json([{name:'john'},{name:'susan'}])
})

app.listen(3080,() => {
    console.log("Server listening to port 3080...")
})