import app from './app';

const { PORT } = process.env;
console.log(PORT);

const server = app.listen(PORT, () => console.log(3000));

export default server;
