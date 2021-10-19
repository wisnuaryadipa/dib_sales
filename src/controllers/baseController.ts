import Joi from 'joi';


interface IRequestValidationSchema {
    body?: Joi.Schema;
    query?: Joi.Schema;
    params?: Joi.Schema;
    header?: Joi.Schema;
}