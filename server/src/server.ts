import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes)
app.listen(3333); //localhost:3333

//Mestodos:

//GET: buscar o listar uma informação
//POST: Criar uma nova informação 
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informção existente

//Paramentros:

//Corpo (Request.body): Dados para criação ou atualização de um resgistro
//Route Params (request.params): Identificar qual recurso eu quero atualizar ou deletar
//Query Params (request,query): Paginação, ordenação, filtros



