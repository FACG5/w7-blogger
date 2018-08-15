
const querystring = require('querystring');
const { addPost } = require('./../queries/addData.js');
const { handlePageNotFound } = require('./homePage.js');

console.log(addPost);


function handleAddPost(req, res) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const user = querystring.parse(data);
    console.log(user);
    addPost(user, (err, result) => {
      res.writeHead(302, {
        location: '/',
      });
      const obj = {
        err,
        result,
      };
      res.end(JSON.stringify(obj));
    });
  });
}

module.exports = handleAddPost;
