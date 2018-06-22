import express from 'express';
import passport from 'passport';
import * as Auth from '../controllers/auth';
const router = express.Router();

router.post('/', Auth.signin);


router.get('/twitter',
  passport.authenticate('twitter'));

router.get('/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send('Twitter');
    // res.redirect('/');
  });

export default router;
