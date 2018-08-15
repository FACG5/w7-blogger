const dbConnection = require('../database/db_connections.js');

const removePost = (post_id, cb) => {
  const sql = {
    text: 'delete from posts where post_id =$1 ',
    values: [post_id],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const removeUser = (user_id, cb) => {
  const sql = {
    text: 'DELETE FROM users WHERE user_id =$1',
    values: [user_id],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
  removePost,
  removeUser,
};
