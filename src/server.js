const http = require('http');
const router = require('./router');

const port = process.env.PORT || 5000;

http.createServer(router).listen(port, () => {
  console.log(`we now in port : ${port}`);
});
