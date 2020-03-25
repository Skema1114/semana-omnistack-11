// Update with your config settings.

/**
 * para criar um arquivo de tabela
 * 
 * npx knex migrate:make [nome]
 * 
 * para rodar o arquivo de migrate criado, FAZ A ULTIMA MIGRATION
 * 
 * npx knex migrate:latest
 * 
 * para executar o drop, o segundo metodo do arquivo de criação das tabelas, DESFAZ A ULTIMA MIGRATION
 * 
 * npx knex migrate:rollback
 * 
 * lista as migrations ja executadas
 * 
 * npx knex migrate:status
 * 
 */

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
