import express from 'express';
import * as Controller from '../controllers/users';
import verifyToken from '../middlewares/verifyToken';

const router = express.Router();

router.use(verifyToken());

router.get('/', Controller.getUsers);
router.delete('/:id', Controller.deleteUser);

export default router;
