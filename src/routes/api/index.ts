import {Router} from 'express';
import userController from '@src/routes/api/v1/user'

const apiV1 = Router();
apiV1.use('/user',userController);

export default apiV1;