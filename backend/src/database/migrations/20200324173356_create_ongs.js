
exports.up = function(knex) {
    //aqui é quando executa a criação da tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
  //aqui é caso der errado, o que ele faz, aqui ele dropa a tabela
  return knex.schema.dropTable('ongs');
};
