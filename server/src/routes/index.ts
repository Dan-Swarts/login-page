import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './auth/index.js';
import type { Request, Response } from 'express';
const router = Router();

router.get('/test', async (req: Request, res: Response) => {
    try {
        console.log('hello world');
        res.status(200).json('hello world');
    } catch (err) {
        res.status(400).json(err);
    }
});

router.use('/api',apiRoutes);
router.use('/auth',authRoutes);

export default router;