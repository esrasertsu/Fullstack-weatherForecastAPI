const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile','email']
   })
  );
  //google Strategy name is 'google' general rule
  app.get('/auth/google/callback',
      passport.authenticate('google'),
      (req,res) => {
        res.redirect('/forecast');
      });

  app.get('/api/logout',(req,res)=> {
    req.logout();    // convenince from passport
    res.redirect('/');
    //res.send(req.user);//for testing if user logout
  });
  app.get('/api/current_user', (req,res) => {
    res.send(req.user);
  });
};
