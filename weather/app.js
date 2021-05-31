const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=27667fcea4908f620b61d96330ca1bfe&query=37.8267,-122.4233'


request({url:url, json:true}, (error,response)=>{
    if(error){
        console.log('can not connect to the server')
    }else if(response.body.error){
        console.log("can not find the location")
    }else{
    console.log(`${response.body.current.weather_descriptions[0]}. It's currently ${response.body.current.temperature} degree outside, it feels like ${response.body.current.feelslike} degree, There is ${response.body.current.precip} % chance of rain.`)
}
})


//geocode

const geoUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZG9scGhpbjYyNyIsImEiOiJja3BjYzluZGcxY2liMnVwN2xkeGJldTc2In0.Mwo8kbpvoZ84ubuY-QTi2g&limit=1';

request({url:geoUrl, json:true}, (error,response)=>{
    if(error){
        console.log('cannot connect to the server')
    }else if(response.body.features.length===0){
        console.log('cannot find the location')
    }else{
    const longitude =response.body.features[0].center[0]
    const latitude =response.body.features[0].center[1]
    console.log(longitude,latitude)
    }
})