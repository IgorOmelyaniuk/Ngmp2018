import passport from 'passport';
import localAuth from './strategies/local';
import facebookAuth from './strategies/facebook';
import twitterAuth from './strategies/twitter';
import googleAuth from './strategies/google';

passport.use(localAuth)
        .use(facebookAuth)
        .use(twitterAuth)
        .use(googleAuth);

passport.serializeUser((user, done) => cb(null, done));
passport.deserializeUser((user, done) => cb(null, done));
