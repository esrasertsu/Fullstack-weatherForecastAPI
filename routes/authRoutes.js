const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile','email']
   })
  );
  //google Strategy name is 'google' general rule
  app.get('/auth/google/callback', passport.authenticate('google'));
};
