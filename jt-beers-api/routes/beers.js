import Router from 'express';
import { getBeers } from '../controllers/beersController.js';

const router = Router();

router.get("/", getBeers);

export default router;