import passport from 'passport';
import LocalStrategy from 'passport-local';
import TwitterStrategy from 'passport-twitter';
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

const twitterAuth = new TwitterStrategy({
  consumerKey: 	'MiopzfIjkos4or6NvovL32zjv',
  consumerSecret: '	7IwseVUO3G5wSUktyPQ5ILAwHjhm018nXXFijSWtqzysVf9q0q',
  callbackURL: "http://127.0.0.1:8080/api/auth/twitter/callback"
},function(token, tokenSecret, profile, cb) {
  User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return cb(err, user);
  });
  } 
);

passport.use(localLogin)
        .use(twitterAuth);