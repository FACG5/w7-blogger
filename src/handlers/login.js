require('env2')('config.env');
const queryString = require('querystring');
const hashed = require('./passwords.js');
const getData = require('../queries/getData');
const { sign, verify } = require('jsonwebtoken');

const login = (req, res) => {
  let data = "";
  req.on("data", chunk => {
    data += chunk;
  });
  req.on("end", () => {
    const enteredData = queryString.parse(data);
    getData.getUserData(enteredData.email, (err, result) => {
      if (err) {
        return err;
      } else {
        if (result.length == 0) {
          res.writeHead(302, {
            Location: "/login"
          });
          res.end("User does not exist");
        } else {
          hashed.comparePasswords(
            enteredData.password,
            result[0].password,
            (err) => {
              if (err) {
                console.log(err, "user not exist or there is an error");
              } else {
                const user = {
                  email: enteredData.email,
                  rule: enteredData.rule,
                  id: result[0].id
                };
                //Create  Token
                const loginJWT = sign(user, process.env.SECRET);
                res.setHeader("Set-Cookie", `jwt=${loginJWT};`);
                res.writeHead(302, {
                  Location: "/index"
                });
                res.end();
              }
            }
          );
        }
      }
    });
  });
  req.on("error", err => {
    return err;
  });
};

module.exports = { login };
