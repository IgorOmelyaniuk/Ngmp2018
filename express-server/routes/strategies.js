import express from 'express';
import passport from 'passport';
import * as Controller from '../controllers/strategies';
const router = express.Router();

import passportService from '../config/passport';
const requireLocalLogin = passport.authenticate('local', { session: false });

router.post('/local', requireLocalLogin, Controller.useLocalStrategy);

export default router;