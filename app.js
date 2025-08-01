const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

console.log(routes.someText);

server.listen(3000);
