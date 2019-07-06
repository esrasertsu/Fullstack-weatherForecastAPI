const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // to enable cookies and make express use cookie
const passport = require('passport');  // to use cookies
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
    maxAge : 100000,  //10*24*60*60*1000
    keys: [keys.cookieKey]
  })
);

 app.use(passport.initialize());
  app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
