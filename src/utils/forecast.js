const axios = require('axios');


const forecast = (latitude,longitude,callback)=>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/b-73.989,40.733.json?types=poi&access_token=pk.eyJ1Ijoic2F0dmlrMjEzMTYxIiwiYSI6ImNrYXFuYmIxaTI5ZnkyenA2dDBvb29oZmwifQ.LXyQVqd-wdwEg0UlQgxM7Q'

axios.get(url)
.then(res=>res.data)
.then(
    value=>{
        callback(undefined, value.body.daily.data[0].summary + ' It is currently ' + value.body.currently.temperature + ' degress out. There is a ' + value.body.currently.precipProbability + '% chance of rain.')
    }
  ).catch((err)=>{
    if(err.code == 'ENOTFOUND'){
      callback('cannot connect at the moment');
    }else if(TypeError){ 
      callback('Invalid link');
    }   
})
}


module.exports = forecast;