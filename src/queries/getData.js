const dbConnection = require('../database/db_connections.js');

// GET posts and the name of users that published it ...
const getPosts = (cb) =>{
    dbConnection.query('SELECT posts.post_title, posts.post_body, users.name as posted_by, posts.date , posts.time  FROM posts JOIN users ON users.user_id = posts.user_id ORDER BY posts.date desc;'
    ,(err,result) =>{
        if (err){
            cb (err);
        }else{
            cb(null, result.rows)
        }
    })
};


// GET posts for specific user ...
const getUserPosts = (user_id, cb) => {
    const sql = {
      text: 'SELECT posts.post_title, posts.post_body, users.name as published_by , posts.date , posts.time FROM posts JOIN users ON users.user_id = posts.user_id WHERE users.user_id=$1 ORDER BY posts.date desc ',
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

  // GET user details for specific user ...
const getUserData = (user_id, cb) => {
    const sql = {
      text: 'SELECT name, email, password FROM users WHERE user_id=$1',
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
    getPosts,
    getUserPosts,
    getUserData
};