import * as dotenv from 'dotenv';
import App from './app';
import connection from './models/connetion';

dotenv.config();

const PORT = process.env.PORT || 3000;

new App(connection).start(PORT);