import { Router } from 'express';
import type { Request, Response } from 'express';
import profileRouter from './profile.js';
const router = Router();

router.get('/test', async (req: Request, res: Response) => {
    try {
        console.log('hello world');
        res.status(200).json('hello world');
    } catch (err) {
        res.status(400).json(err);
    }
});

router.use('/profile', profileRouter);

export default router;