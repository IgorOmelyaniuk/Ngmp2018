import FacebookStrategy from 'passport-facebook';
import config from '../../../config/config.json';

const { clientID, clientSecret, callbackURL } = config.strategies.facebook;

const facebookAuth = new FacebookStrategy({
  clientID,
  clientSecret,
  callbackURL,
},
(accessToken, refreshToken, profile, done) => done(null, profile, token));

export default facebookAuth;