import {RequestHandler} from 'express';
import Joi from 'joi';
import sendResponse from '@src/utilities/sendResponse';


interface IRequestValidationSchema {
    body?: Joi.Schema;
    query?: Joi.Schema;
    params?: Joi.Schema;
    header?: Joi.Schema;
}

class BaseController {
    public Joi = Joi;

    sendResponse = sendResponse;

    requestHandler!: RequestHandler;
}

export default BaseController;