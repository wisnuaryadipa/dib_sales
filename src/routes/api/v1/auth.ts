import {Router} from 'express';

const authRouter = Router();

authRouter.get('/login');
authRouter.get('/register');
authRouter.get('/logout');
authRouter.get('/reset-password');

export default authRouter;