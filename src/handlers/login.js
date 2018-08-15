require('env2')('config.env');
const queryString = require('querystring');
const { sign } = require('jsonwebtoken');
const hashed = require('./passwords.js');
const getData = require('../queries/getData');

const login = (req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const enteredData = queryString.parse(data);
    console.log("enteredData=>> ",enteredData);

    getData.getUserData(enteredData.email, (err, result) => {
      if (err) {
        return console.log('error on finding the user', err);
      }
      if (result.length === 0) {
        res.writeHead(302, {
          Location: '/login',
        });
        res.end('User does not exist');
      } else {
        console.log('the user have id');

        hashed.comparePasswords(enteredData.password, result[0].password, (err, isAuh) => {
          if (err) {
            console.log(err, 'user not exist or there is an error');
          } else if (isAuh) {
            const user = {
              email: enteredData.email,
              rule: enteredData.rule,
              id: result[0].id,
            };
            // Create  Token
            const loginJWT = sign(user, process.env.SECRET);
            res.setHeader('Set-Cookie', `jwt=${loginJWT};`);
            res.writeHead(302, {
              Location: '/',
            });
            res.end();
          } else {
            // console.log('fghgjkhfhf');

            res.writeHead(302, {
              Location: '/login',
            });
            res.end();
          }
        });
      }
    });
  });
  req.on('error', err => err);
};

module.exports = { login };
