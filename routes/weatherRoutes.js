const fetch = require('node-fetch');

module.exports = (app) => {
  app.get('/forecast', (req,res) => {
    fetch('https://api.apixu.com/v1/forecast.json?key=95d4c8915a8d4a0388665716193006&q=Sydney&days=10')
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
  });

  
var request = require("request");
request({
   uri: reqUrl,
   method: "GET",
   timeout: 10000,
   followRedirect: true,
   maxRedirects: 10
}, function(error, response, body) {
   var parsedJSON = JSON.parse(body);
   var currTemp = parsedJSON.data.current_condition[0].temp_C;
   var obsTime = parsedJSON.data.current_condition[0].observation_time;
   storeTemperature(location, currTemp, obsTime);
});

// Store location, temperature and time of the observation
function storeTemperature(loc, temp, obstime) {
   var mongoose = require('mongoose');
   // connect to a db at localhost
   mongoose.connect('localhost', 'temperatures');
   // define the db schema
   var schema = mongoose.Schema({
      location: String,
      temperature: String,
      observationTime: String
   });

   var Temperature = mongoose.model('Temperature', schema);
   // Create a new object with the fields initialized by the read data
   var t = new Temperature({
      location: loc,
      temperature: temp,
      observationTime: obstime
   })
   // attempt to save the data
   t.save(function(err) {
     if (err) {
        console.log("error saving");
     } else {
        console.log("saved");
        throw '';
     }
 });
}
