// PAREI NO MINUTO 53:03

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


import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import errorHandler from "./errors/handler";
import { errors } from 'celebrate';
import 'express-async-error';

const app = express();
app.use(cors());
app.use(express.json()); // use, coloca uma funcionalidade a mais no empress
app.use(errorHandler);
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(3333);