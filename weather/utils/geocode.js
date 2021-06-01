const request = require('request')

const geocode = (address, callback) =>{
    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZG9scGhpbjYyNyIsImEiOiJja3BjYzluZGcxY2liMnVwN2xkeGJldTc2In0.Mwo8kbpvoZ84ubuY-QTi2g&limit=1`

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("cannot get to the server",undefined)
        }else if(response.body.features.length === 0){
            callback("cannot find the location,try another one", undefined)
        }else{
            callback(undefined,{
              longitude : response.body.features[0].center[0],
              latitude : response.body.features[0].center[1],
              location : response.body.features[0].place_name
            })
            
        }
    })
}

module.exports = geocode;