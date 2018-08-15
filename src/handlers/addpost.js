
const querystring = require('querystring');
const { addPost } = require('./../queries/addData.js');

console.log(addPost);

function addPostRoute(req, res) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const query = querystring.parse(data);
    console.log(query);
    res.end();
  });
}

module.exports = addPostRoute;
