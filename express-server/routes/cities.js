import express from 'express';
import * as Controller from '../controllers/cities';

const router = express.Router();

router.get('/random', Controller.getRandomCity);

router.route('/')
    .get(Controller.getCities)
    .post(Controller.createCity);

router.route('/:id')
    .put(Controller.updateCity)
    .delete(Controller.deleteCity);

export default router;
