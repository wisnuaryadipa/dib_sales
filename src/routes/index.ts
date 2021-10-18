import {Router} from 'express';
import apiV1 from '@src/routes/api';

const apiRouter = Router();
apiRouter.use('/v1', apiV1);

export default apiRouter;