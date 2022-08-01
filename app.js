const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))
app.get('./api/people' , (req,res) => {
    res.status(200).json({success:true , data:people})
})

app.post('/login' , (req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    else{
        return res.status(404).send("Please provie valid credentials ")
    }
    res.send("post")
})
app.listen(3080,()=>{  
    console.log('Server listening to port 3080...')
})