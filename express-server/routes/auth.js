import express from 'express';
import * as Auth from '../controllers/auth';
const router = express.Router();

router.post('/', Auth.signin);

export default router;
