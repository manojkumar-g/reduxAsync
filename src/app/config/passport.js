import localStratagy from 'passport-local'.Strategy;
import Users from '../model/User';

const config = (passport) =>{
  passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

}
