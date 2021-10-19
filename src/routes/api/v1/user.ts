import {Router} from 'express';

const userRouter = Router();
userRouter.get('/');

userRouter.get('/:userId');

export default userRouter;