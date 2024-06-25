const Joi = require('joi');
export const phone = Joi.number().required()
export const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))