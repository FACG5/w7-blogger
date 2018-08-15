
const { parse } = require('cookie');
const { verify } = require('jsonwebtoken');

const SECRET = 'poiugyfguhijokpkoihugyfyguhijo';

const error401 = (req, res) => {
  const message = '<h1>UNAUTHORIZED ERROR</h1>';
  res.writeHead(401, { 'content-type': 'text/html' });
  res.end(message);
};

const isAuth = (req, res, cb) => {
  if(!req.header) return cb(false);
  if (!req.header.cookie) return cb(false);
  const { jwt } = parse(req.headers.cookie);
  if (!jwt) return cb(false);
    // so this is not ok return error401(req, res);
  verify(jwt, SECRET, (err, jwt) => {
    if (err) cb(false);
    else {
      cb(true);
    }
  });
};

module.exports = { isAuth, error401 };
