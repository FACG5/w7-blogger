const fs = require('fs');
const path = require('path');
const url = require('url');
const queryString = require('querystring');
const { addUser} = require('../queries/addData');
const { hashPassword } = require('./passwords.js');
console.log(hashPassword);
// signupPage(req, res) {
//   fs.readFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'), (err, data) => {
//     if (err) {
//       res.end(JSON.stringify(err));
//     }
//     res.end(data);
//   });
// }
//
// }

function signup(req, res) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    const obj = queryString.parse(data);
    console.log('user datazdfghjhgfddfhgkjhgfdfgh', obj);
    console.log(obj.psw);
    hashPassword(obj.psw, (err, resultPassword) => {
      if (err) {
        console.log(err.message);
      }
      obj.password = resultPassword;
      console.log(resultPassword);

      addUser(obj, (err, resultDatabase) => {
        if (err) {
          res.writeHead(302, {
            Location: '/signup',
          });
        }
        res.writeHead(302, {
          Location: '/login',
        });
        res.end();
      });
    })
  });
}

module.exports = signup;
