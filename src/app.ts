import express from 'express';
import TodoController from './controllers/todoList.controller';
import erroMiddleware from './middlewares/errorMiddleware';
import connection from './models/connetion';
import TodoModel from './models/todoList.model';
import TodoService from './services/todoList.service';

const entityFactory = () => {
  const model = new TodoModel(connection);
  const service = new TodoService(model);
  const controller = new TodoController(service);
  return controller;
};

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.get('/', (req, res, next) => entityFactory().get(req, res, next));
    this.app.put('/', (req, res, next) => entityFactory().put(req, res, next));
    this.app.post('/', (req, res, next) => entityFactory().post(req, res, next));
    this.app.delete('/', (req, res, next) => entityFactory().delete(req, res, next));
    this.app.use(erroMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server started ${PORT}`));
  }
}

export { App };
export const { app } = new App(); 