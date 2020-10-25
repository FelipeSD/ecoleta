"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'src', 'database', 'database.sqlite') // dirname: variavel global que retorna diretorio do arquivo que o executa
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};
