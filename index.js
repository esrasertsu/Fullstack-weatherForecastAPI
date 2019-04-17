const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
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

app.use(
  cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//app.get('/', (req,res)=> {
//  res.send({bye:'buddy'});
//})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
