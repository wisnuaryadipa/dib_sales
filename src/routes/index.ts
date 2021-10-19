import {Router, Application} from 'express';
import api from '@src/routes/api';

const routes = (app: Application) => {

    app.use('/api', api);
}


export default routes;