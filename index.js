const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const fetch = require('node-fetch');

require('./models/Users');
require('./services/passport');

const db = keys.mongoURI;
mongoose.connect(db, { useNewUrlParser: true });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
//require('./routes/weatherRoutes')(app);




    //   const url = "https://api.apixu.com/v1/forecast.json?key=95d4c8915a8d4a0388665716193006&q=Sydney&days=10";
    //   const getData = async url => {
    //   try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     console.log(json);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData(url);


//app.get('/', (req,res)=> {
//  res.send({bye:'buddy'});
//})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
