const express = require('express');

const routes = express.Router();

const ongcontrollers = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessionController');


routes.get('/ongs', ongcontrollers.index);
routes.post('/ongs', ongcontrollers.create);
routes.delete('/ongs/:id', ongcontrollers.delete);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);
routes.search('/incidentes/:id', incidentcontroller.search);

routes.get('/profile/', profilecontroller.index);

routes.post('/session', sessioncontroller.create);

module.exports = routes;