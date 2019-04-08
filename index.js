const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');

const db = keys.mongoURI;
mongoose.connect(db, { useNewUrlParser: true });


// mongoose.connect(keys.mongoURI, function(err,db){
//      if (err) throw err;
//         else console.log(db);
      
// });

const app = express();
require('./routes/authRoutes')(app);

//app.get('/', (req,res)=> {
//  res.send({bye:'buddy'});
//})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
