import express from 'express';
import * as Controller from '../controllers/cities';

const router = express.Router();

router.get('/', Controller.getRandomCity);

export default router;
