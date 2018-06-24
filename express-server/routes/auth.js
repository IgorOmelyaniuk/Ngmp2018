import express from 'express';
import passport from 'passport';
import * as Auth from '../controllers/auth';
const router = express.Router();

import passportService from '../services/passport';
const requireLocalLogin = passport.authenticate('local', { session: false });

router.post('/', Auth.signin);
router.post('/local', requireLocalLogin, Auth.useLocalStrategy);

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', Auth.useFacebookStrategy);

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', Auth.useTwitterStrategy);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', Auth.useGoogleStrategy);

export default router;
