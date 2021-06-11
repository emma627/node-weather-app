const express = require('express')
const app = express()
const path =require('path')



const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res)=>{
    res.send({
        forecast:'sunny',
        location: 'nantes'

    })
})

app.listen(3000,()=>{
    console.log("the port is on port 3000")
})