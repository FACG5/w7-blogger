const dbConnection = require('../database/db_connections.js');

const addUser = (user, cb) => {
  dbConnection.query(
    {
      text: 'INSERT INTO users (name, email, password) VALUES ($1,$2,$3)',
      values: [user.name,user.email,user.password],
    }, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    },
  );
};

const addPost = (post, cb) => {
    dbConnection.query(
      {
        text: 'INSERT INTO posts (post_title, post_body, user_id) VALUES ($1,$2,$3)',
        values: [post.post_title, post.post_body, post.user_id],
      }, (err, res) => {
        if (err) {
          cb(err);
        } else {
          cb(null, res.rows);
        }
      },
    );
  };

module.exports = {
    addUser,
    addPost
};
