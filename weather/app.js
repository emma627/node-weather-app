
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

//before object destructuring
if(!address){
    console.log('please provide un address')
}else{
    geocode(address,(error,geoData)=>{
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
}

//after object destructuring

if(!address){
    console.log('please provide un address')
}else{
    geocode(address,(error,{longitude,latitude,location})=>{
    if(error){
       return console.log(error)
    }
    forecast(longitude, latitude,(error,forecastData)=>{
        if(error){
        return  console.log(error)
        }
    console.log(location)
    console.log(forecastData)
})
})
}

