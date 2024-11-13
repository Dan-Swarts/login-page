import Router from "express";
import type { Request, Response } from "express";

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
     try {
        const username = req.body.username;
        const password = req.body.password;
        res.status(200).json({"username":username, "password": password});
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/test', async (req: Request, res: Response) => {
    try {
        console.log('hello world');
        res.status(200).json('hello world');
    } catch (err) {
        res.status(400).json(err);
    }
});


export default router;