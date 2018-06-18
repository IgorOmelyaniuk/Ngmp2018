import express from 'express';
import passport from 'passport';
import * as Controller from '../controllers/users';
import verifyToken from '../middlewares/verifyToken';

import passportService from '../config/passport';

const requireSignin = passport.authenticate('local', { session: false });

const router = express.Router();

// router.use(verifyToken());

router.get('/', Controller.getUsers);

router.post('/', requireSignin, Controller.login)

export default router;
