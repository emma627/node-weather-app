const request = require("request")

const forecast = (longitude,latitude, callback)=>{
const forecastURL = `http://api.weatherstack.com/current?access_key=27667fcea4908f620b61d96330ca1bfe&query=${latitude},${longitude}`

request({url:forecastURL, json:true},(error,response)=>{
    if(error){
        callback('cannot get to the server',undefined)
    }else if(response.body.error){
        callback('cannot find the location',undefined)
    }else{
        callback(undefined,`${response.body.current.weather_descriptions[0]}. It's currently ${response.body.current.temperature} degree outside, 
        it feels like ${response.body.current.feelslike} degree, There is ${response.body.current.precip} % chance of rain.`)
        
    }
})

}

module.exports = forecast;

