import express from 'express';
import TodoController from './controllers/todoList.controller';
import { HandlePool } from './interfaces';
import erroMiddleware from './middlewares/errorMiddleware';
import TodoModel from './models/todoList.model';
import TodoService from './services/todoList.service';

const entityFactory = (db: HandlePool) => {
  const model = new TodoModel(db);
  const service = new TodoService(model);
  const controller = new TodoController(service);
  return controller;
};

class App {
  public app: express.Express;

  private db: HandlePool;

  constructor(db: HandlePool) {
    this.db = db;
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
    this.app.get('/', (req, res, next) => entityFactory(this.db).get(req, res, next));
    this.app.put('/', (req, res, next) => entityFactory(this.db).put(req, res, next));
    this.app.post('/', (req, res, next) => entityFactory(this.db).post(req, res, next));
    this.app.delete('/', (req, res, next) => entityFactory(this.db).delete(req, res, next));
    this.app.use(erroMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server started ${PORT}`));
  }
}

export default App;