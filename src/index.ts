import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT } = process.env;
console.log(PORT);

const server = app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));

export default server;
