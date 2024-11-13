import { Router, Request, Response, } from "express";
import { User } from "../../models/user.js";
import bcrypt from 'bcrypt';

const router = Router();

router.use('/test', async (req: Request, res: Response) => {
    try {
        console.log('hello world');
        res.status(200).json('hello world');
    } catch (err) {
        res.status(400).json(err);
    }
});


// GET the names of users
router.get('/', async(_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/create', async (req: Request, res: Response) => {
    try{
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password,10);
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


export default router;