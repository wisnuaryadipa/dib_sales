import express, { ErrorRequestHandler, Request, Response } from 'express';
import {ConditionalExpression} from 'typescript';
import bodyParser from 'body-parser';
import cors from 'cors';
import {IError} from '@src/interfaces/IError';
import config from '@src/config';
import Logger from '@src/loaders/logger';



export default (app: express.Application) => {
    
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  
  app.get('/status', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
  });
  app.head('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.enable('trust proxy');

  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  /// catch 404 and forward to error handler
  app.use((req: Request, res: Response, next) => {
    const err = new Error('Not Found') as IError ;
    err.status = 404;
    next(err);
  });
  
  /// error handlers
  app.use(((err: any, req: Request, res: Response, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  }) as ErrorRequestHandler);

  app.use(((err: any, req: Request, res: Response, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  }) as ErrorRequestHandler);
};