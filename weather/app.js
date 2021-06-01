
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')



//geocode

geocode('boston',(error,geoData)=>{
    if(error){
       return console.log(error)
    }
    forecast(geoData.longitude, geoData.latitude,(error,forecastData)=>{
        if(error){
        return  console.log(error)
        }
    console.log(geoData.location)
    console.log(forecastData)
})
})

