import Router from "express";
import { Request, Response } from "express";
import somethingRouter from './something.js';
import userRoutes from './user-routes.js'
const router = Router();

router.get('/test', async (req: Request, res: Response) => {
    try {
        console.log('hello world');
        res.status(200).json('hello world');
    } catch (err) {
        res.status(400).json(err);
    }
});

router.use('/something',somethingRouter);
router.use('/user',userRoutes);

export default router;