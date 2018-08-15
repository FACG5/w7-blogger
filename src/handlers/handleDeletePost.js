const { removePost } = require('./../queries/deleteData.js');

function handleDeletePost(req, res) {
  
  const postId = req.url.split('?')[1];
  console.log(postId);
  removePost(postId, (err, result) => {
    console.log(result);
    if (err) {
      res.end('not ok');
    }
    res.end('ok');
  });
}

module.exports = handleDeletePost;
