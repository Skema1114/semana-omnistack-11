const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * GET: Buscar uma informaçção do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parametros
 * QUERY PARAMS: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * ROUTE PARAMS: Parametros utilizados para identificar recursos
 * REQUEST BODY: Cop-rpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * npm install nodemon -D
 * 
 * nao precisar rodar sempre o servidor quando modificar, ele faz automatico, roda um server
 * que fica escutando e restarta automatico e o -D é para adicionar os pacotes no modo dev, 
 * quando for pro prod ele nao pega os pacotes dev
 * para startar sempre precisa do 
 * 
 * npm start
 * 
 * mas antes precisa ser configurando o package.json
 */  

/**
 * Bancos de dados
 * SQL: mysql, sqlite, postgresql, oracle, microsoft sql server, etc..
 * NOSQL: mongodb, couchdb, etc..
 * 
 * utilizaremos sqlite
 */

/**
 * DRIVER: select * from users where
 * QUERY BUILDER: table('users').select('*').where()
 * 
 * utilizaremos query builder, KNEX.JS
 */

/**
 * npm install knex
 * 
 * npm install sqlite3
 * 
 * npx knex init
 * 
 * npm install cors
 */