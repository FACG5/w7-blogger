const { getPosts } = require('./../queries/deleteData.js');

function handleQuery(req, res) {
  getPosts((err, obj) => {
    if (err) {
      console.log(err);
    }
    res.writeHead(200, {
      'content-type': 'application/json',
    });
    res.end(JSON.stringify(obj));
  });
}
module.exports = handleQuery;
