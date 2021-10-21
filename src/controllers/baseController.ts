import {RequestHandler} from 'express';
import Joi from 'joi';
import sendResponse from '@src/utilities/sendResponse';
import _ from 'lodash';

interface IRequestValidationSchema {
    body?: Joi.Schema;
    query?: Joi.Schema;
    params?: Joi.Schema;
    header?: Joi.Schema;
}

const _baseController = {
    name: "base",
    extend: (child): RequestHandler => {
        return _.extend({sendResponse: sendResponse}, this, child);
    },
    run: function(req, res, next) {}
}



class BaseController {
    public Joi = Joi;
    sendResponse = sendResponse;
    requestHandler!: RequestHandler;
}

export default _baseController;