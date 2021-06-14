const express = require('express')
const app = express()
const path =require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//static directory
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

//customize view directory
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views', viewsPath)

//partial set up
const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)

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
    if(!req.query.address){
        return res.send({
            error: "you must provide an address"
        })
    }
    geocode(req.query.address,(error, {longitude,latitude,location})=>{
        if(error){
            return res.send({error})
        }
        forecast(longitude,latitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address

            })
        })
    })
    
})

app.get('/help/*',(req, res)=>{
    res.render('404', {
        title:"404 Page",
        name:"jinyan",
        msg404:"help article not found"
    })
})

app.get('/products',(req, res)=>{
    if(!req.query.search){
         return res.send({
             error: "you must provide a search term"
         })
    }
    res.send({products:[]})
})

app.get('*',(req, res)=>{
    res.render('404', {
        title:"404 Page",
        msg404:"page not found"
    })
})


app.listen(3000,()=>{
    console.log("the port is on port 3000")
})