"use strict";
// PAREI NO MINUTO 53:03
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema
// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação do back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end
// POST http://localhost:33333/users = Criar um usuário
// GET http://localhost:33333/users = Listar usuários
// GET http://localhost:33333/users/5 = Buscar dados do usuário com ID 5
// REQUEST PARAM: Parâmetros que vem na rota que identificam um recurso
// QUERY PARAM:  Parametros que vem na propria rota geralmente opcionais para filtros, paginações
// request body: Parametros para criação/atualização de informações
//DATABASE
// usar knex
// knex('users').where('name', 'Felipe').select('*')
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var handler_1 = __importDefault(require("./errors/handler"));
var celebrate_1 = require("celebrate");
require("express-async-error");
require("dotenv").config();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json()); // use, coloca uma funcionalidade a mais no empress
app.use(handler_1.default);
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
app.use(celebrate_1.errors());
app.listen(process.env.PORT || 3333);
