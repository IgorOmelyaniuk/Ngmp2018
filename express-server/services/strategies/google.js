import GoogleStrategy from 'passport-google-oauth20';
import config from '../../../config/config.json';

const { clientID, clientSecret, callbackURL } = config.strategies.google;

const googleAuth = new GoogleStrategy({
  clientID,
  clientSecret,
  callbackURL,
},
(accessToken, refreshToken, profile, done) => done(null, profile, token));

export default googleAuth;
