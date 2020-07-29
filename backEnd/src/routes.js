const express = require('express');
const { celebrate, Segments,Joi } = require('celebrate');
const routes = express.Router();

const ongcontrollers = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessionController');
const { join } = require('./database/connection');


routes.get('/ongs', ongcontrollers.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongcontrollers.create);

routes.delete('/ongs/:id', ongcontrollers.delete);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentcontroller.index);

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), incidentcontroller.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentcontroller.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profilecontroller.index);

routes.post('/session', sessioncontroller.create);

module.exports = routes;