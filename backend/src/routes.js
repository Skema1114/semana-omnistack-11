const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;

/**
//EXEMPLOS
routes.get('/', (request, response) => {
    return response.json({
       evento: 'Semana Oministack 11.0',
       aluno: 'Rafael Martins',
       codigo: 'Hello World'
   });
});
 
// QUERY PARAMS (http://localhost:3333/usuarios?name=Rafael&Idade=22)
routes.get('/usuarios', (request, response) => {
   const params = request.query;

   console.log(params);
   
   return response.json({
       evento: 'Semana Oministack 11.0',
       aluno: 'Rafael Martins',
       codigo: 'Hello World'
   });
});

// ROUTE PARAMS (http://localhost:3333/nomes/12)
routes.get('/nomes/:id', (request, response) => {
   const params = request.params;

   console.log(params);
   
   return response.json({
       evento: 'Semana Oministack 11.0',
       aluno: 'Rafael Martins',
       codigo: 'Hello World'
   });
});

// REQUEST BODY (http://localhost:3333/nomes/12)
routes.post('/animais', (request, response) => {
   const body = request.body;

   console.log(body);
   
   return response.json({
       evento: 'Semana Oministack 11.0',
       aluno: 'Rafael Martins',
       codigo: 'Hello World'
   });
});
* 
*/