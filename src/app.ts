import express from 'express';
import config from '@src/config';
// import Logger from '@src/loaders/Logger';
import loaders from '@src/loaders';
import db from './loaders/sequelize'



import './injection/module/ProcessEnv'
// rest of the code remains same

async function startServer() {
    const app = express();
    
    await loaders({ expressApp: app });

    // app.get('/', (req, res) => res.send('Express + TypeScript Server'));
    
    app.listen(config.port, () => {
        // Logger.info(`
        // ################################################
        // 🛡️  Server listening on port: ${config.port} 🛡️
        // ################################################
        // `);
    }).on('error', err => {
        // Logger.error(err);
        process.exit(1);
    })

}

startServer();