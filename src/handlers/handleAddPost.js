
const querystring = require('querystring');
const { addPost } = require('./../queries/addData.js');
const { handlePageNotFound } = require('./homePage.js');

const { parse } = require('cookie');
const { verify } = require('jsonwebtoken');

console.log(addPost);
const SECRET = process.env.SECRET;

function handleAddPost(req, res) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const user = querystring.parse(data);
    const { jwt } = parse(req.headers.cookie);
    console.log(jwt);
    verify(jwt, SECRET, (error, obj) => {
      if (error) {
        console.log(error);
      }
      console.log(obj);
      user['user_id'] = obj['user_id'];
      console.log(user);
      addPost(user, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
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
  });
}

module.exports = handleAddPost;
