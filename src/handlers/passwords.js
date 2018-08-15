const bcrypt = require("bcryptjs");

const hashPassword = (password, callback) => {
  bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        callback({
          error: 'Erorr during generating salt'
        });
      } else 
      {
        bcrypt.hash(password, salt, (err, hash) => {
          if(err) {
            callback({
              error: 'Erorr during generating hash'
            });
          } 
          else{
            callback(null, hash);
          } 
          // Store hash in your password DB.
        });
        };
      });
  };

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, (err, res) => {
    if (err){
      callback({
        error: 'Erorr during comparing passwords'
      });
    } 
    else {
      callback(null, res)
    }
    // res === true
  });
};
module.exports = {
  comparePasswords,
  hashPassword };