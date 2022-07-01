import express from 'express';
import erroMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});
app.use(erroMiddleware);
export default app;
