export {}
import expressLoader from '@src/loaders/express';
import express from 'express';
import sequelizeLoader from '@src/loaders/sequelize';
// import Logger from '@src/loaders/Logger';

const loaders = async ({ expressApp } : {expressApp: express.Application}) => {

    const sequelizeConnection = await sequelizeLoader().authenticate();
    sequelizeConnection;
    // Logger.info('✌️ DB loaded and connected!');
    
    await expressLoader(expressApp)

}

export default loaders;