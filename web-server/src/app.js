const express = require('express')
const app = express()
const path =require('path')


//use static files
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

//dynamic content by handlebars
app.set('view engine', 'hbs')

app.get('',(req, res)=>{
    res.render('index', {
        title:"Weather app",
        name: "jinyan"
    })
})

app.get('/about',(req, res)=>{
    res.render('about', {
        title:"About me",
        name: "jinyan"
    })
})
app.get('/help',(req, res)=>{
    res.render('help', {
        title: "Help",
        msg: "This is a help message",
        name: "jinyan"
    })
})

app.get('/weather', (req, res)=>{
    res.send({
        forecast:'sunny',
        location: 'nantes'

    })
})

app.listen(3000,()=>{
    console.log("the port is on port 3000")
})