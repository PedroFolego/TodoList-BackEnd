import * as dotenv from 'dotenv';
import { App } from './app';

dotenv.config();

const PORT = process.env.NODE_PORT || 3000;

new App().start(PORT);