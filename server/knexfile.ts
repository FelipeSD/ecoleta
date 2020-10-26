import path from 'path';

module.exports = {
    client: 'sqlite3',
    type: "module",
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite') // dirname: variavel global que retorna diretorio do arquivo que o executa
    },
    migrations:{
        directory: path.resolve(__dirname,'src', 'database', 'migrations')
    },
    seeds:{
        directory: path.resolve(__dirname,'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}