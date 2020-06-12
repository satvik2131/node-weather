const axios = require('axios');

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2F0dmlrMjEzMTYxIiwiYSI6ImNrYXFuYmIxaTI5ZnkyenA2dDBvb29oZmwifQ.LXyQVqd-wdwEg0UlQgxM7Q&limit=1';

    axios.get(url)
.then(res=>res.data)
.then(
  value => callback(undefined,'location : ' + value.features[0].place_name + '\n' +'longitude : '+
  value.features[0].center[0] + '\nlatitude : '+value.features[0].center[1])
  ).catch((err)=>{
      if(err.code == 'ENOTFOUND'){
        callback('cannot connect at the moment');
      }else if(TypeError){ 
        callback('Invalid link');
      }else{
        callback('hell is here');
      }
  })

}


module.exports = geocode;



