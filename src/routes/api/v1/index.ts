import {Router} from 'express';
import userRouter from '@src/routes/api/v1/user';
import authRouter from '@src/routes/api/v1/auth';

const apiV1Router = Router();

apiV1Router.use('/', authRouter);
apiV1Router.use('/user', userRouter);
apiV1Router.get('/users');



export default apiV1Router;