import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // dirname: variavel global que retorna diretorio do arquivo que o executa
    },
    useNullAsDefault: true
});

export default connection;

// Migrations: Histórico do banco de dados
    // create table points
    // create table users
    // une criações de tabelas para programações divididas