
const { parse } = require('cookie');
const { verify } = require('jsonwebtoken');

const SECRET = 'poiugyfguhijokpkoihugyfyguhijo';

const error401 = (req, res) => {
  const message = '<h1>UNAUTHORIZED ERROR</h1>';
  res.writeHead(401, { 'content-type': 'text/html' });
  res.end(message);
};

const isAuth = (req, res, cb) => {
  if (!req.header.cookie) return error401(req, res);
  const { jwt } = parse(req.headers.cookie);
  if (!jwt) return error401(req, res);

  verify(jwt, SECRET, (err, jwt) => {
    if (err) cb(false);
    else {
      cb(true);
    }
  });
};

module.exports = { isAuth, error401 };
