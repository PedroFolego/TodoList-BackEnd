import express from 'express';
import TodoController from './controllers/todoList.controller';
import erroMiddleware from './middlewares/errorMiddleware';
import connection from './models/connetion';
import TodoModel from './models/todoList.model';
import TodoService from './services/todoList.service';

const app = express();

app.use(express.json());

const MSC = new TodoController(new TodoService(new TodoModel(connection)));

app.get('/', (req, res, next) => MSC.get(req, res, next));
app.put('/', (req, res, next) => MSC.put(req, res, next));
app.post('/', (req, res, next) => MSC.post(req, res, next));
app.delete('/', (req, res, next) => MSC.delete(req, res, next));

app.use(erroMiddleware);
export default app;
