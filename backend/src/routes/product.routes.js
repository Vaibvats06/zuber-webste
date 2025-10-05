import express from 'express';
const router=express.Router();
import { getAllProducts, createDashboardData } from '../controllers/product.controller.js';

router.get('/products', getAllProducts);
router.post('/data', createDashboardData);

export default router;
