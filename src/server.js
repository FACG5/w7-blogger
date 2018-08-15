const http = require('http');
const router = require('./router');

<<<<<<< HEAD
const port = process.env.port || 4000;

http.createServer(router).listen(port, () => {
  console.log(`Server is now listenning : ${port}`);
=======
const port = process.env.PORT || 4000;

http.createServer(router).listen(port, () => {
  console.log(`we now in port : ${port}`);
>>>>>>> f157a9ec132f7d74436ec08a703670de715fcf4f
});
