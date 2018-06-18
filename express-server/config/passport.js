import passport from 'passport';
import LocalStrategy from 'passport-local';
import user from '../config/user.json';

const localLogin = new LocalStrategy({
  usernameFiled: 'username',
  passwordField: 'email',
  session: false
}, function (username, password, done) {
  if (username === user.username && password === user.email) {
    done(null, user);
  } else {
    done(null, false, 'Wrong username/email combination');
  }
});

passport.use(localLogin)