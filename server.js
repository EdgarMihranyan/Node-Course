import http from 'http';
import app from './src/app.js';
import 'dotenv/config';

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
     console.log(`Example app listening on port ${port}!`);
});
