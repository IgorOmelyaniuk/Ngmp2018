import express from 'express';
import * as Controller from '../controllers/products';
import verifyToken from '../middlewares/verifyToken';

const router = express.Router();

router.use(verifyToken());

router.route('/')
  .get(Controller.getProducts)
  .post(Controller.createProduct);

router.route('/:id')
  .get(Controller.getProductById)
  .delete(Controller.deleteProduct);

router.get('/:id/reviews', Controller.getReviewsForProduct);

export default router;
