import express from 'express';
import * as Controller from '../controllers/users';

const router = express.Router();

router.get('/', Controller.getUsers);

export default router;
