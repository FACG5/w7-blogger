const http = require('http');
const router = require('./router');

const port = process.env.port || 4000;

http.createServer(router).listen(port, () => {
  console.log(`Server is now listenning : ${port}`);
});
