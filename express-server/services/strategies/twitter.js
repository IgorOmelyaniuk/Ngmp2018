import TwitterStrategy from 'passport-twitter';
import config from '../../../config/config.json';

const { consumerKey, consumerSecret, callbackURL } = config.strategies.twitter;

const twitterAuth = new TwitterStrategy({
  consumerKey,
  consumerSecret,
  callbackURL,
},
(token, tokenSecret, profile, done) => done(null, profile, token));

export default twitterAuth;
