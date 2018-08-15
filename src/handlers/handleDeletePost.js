const { removePost } = require('./../queries/deleteData.js');

function handleDeletePost(req, res) {
  const postId = req.url.split('?')[1];
  removePost(postId, (err, result) => {
    if (err) {
      res.end('not ok');
    }
    res.end('ok');
  });
}

module.exports = handleDeletePost;
